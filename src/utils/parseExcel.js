import * as XLSX from 'xlsx';
import { mechanicalTimetable, getMechanicalSectionFromRoll, getMechanicalSectionTimetable } from '@/lib/mechanicalTimetable';
import { civilTimetable, getCivilSectionTimetable } from '@/lib/civilTimetable';

let cachedDataMap = {}; // cache per semester key ('4', '6', 'mse4')

/**
 * Determine semester key from roll number or year+section
 */
const semesterKeyFromInput = (input) => {
  const s = String(input || '').trim().toUpperCase();
  
  // Check if it's a year|section format
  if (s.includes('|')) {
    const [year, section] = s.split('|');
    
    // Check if it's Civil Engineering (CE)
    if (/^CE$/.test(section)) {
      return 'civil4';
    }
    
    // Check if it's Mechanical Engineering (M1, M2, M3, M4, ME-A, etc.)
    if (/M[1-4](?![A-Z])/.test(section) || section.includes('ME-') || section.includes('MSE')) {
      return 'mse4';
    }
    
    if (year === '2ND') return '4';
    if (year === '3RD') return '6';
    return '6'; // default
  }
  
  // Check roll number patterns for Mechanical Engineering
  const rollNum = s.replace(/\D+/g, '');
  if (rollNum) {
    const num = parseInt(rollNum);
    
    // MSE roll number ranges
    if ((num >= 2402001 && num <= 2402110) ||  // M1 & M2
        (num >= 2409001 && num <= 2409023) ||  // M3
        (num >= 2426001 && num <= 2426021) ||  // M4
        (num >= 2502601 && num <= 2502616) ||  // M1 & M2 (2nd batch)
        (num >= 2526301 && num <= 2526304)) {  // M4 (2nd batch)
      return 'mse4';
    }
  }
  
  // Otherwise treat as standard roll number
  if (s.startsWith('24')) return '4';
  if (s.startsWith('23')) return '6';
  return '6';
};

/** Normalize roll number */
const normalizeRoll = (r) => {
  if (!r) return { raw: '', digits: '' };
  const s = r.toString().trim();
  const digits = s.replace(/\D+/g, '');
  return { raw: s, digits };
};

/** --------------------------- PARSE EXCEL ---------------------------- */
export const parseExcelFiles = async (input) => {
  const semKey = semesterKeyFromInput(input);
  if (cachedDataMap[semKey]) {
    return cachedDataMap[semKey];
  }

  try {
    // FIXED: Use /data/ paths that work with fetch() - ensure files exist in /public/data/
    const files = {
      '6': { 
        filepath: '/data/6th_sem_Time-Table_and_Section_Detail.xlsx', 
        name: 'CSE/IT 6th Sem',
        attendanceFile: '/data/6th_sem_Time-Table_and_Section_Detail.xlsx'
      },
      '4': { 
        filepath: '/data/4thSem25-26CSEClassList.xlsx', 
        name: 'CSE/IT 4th Sem',
        attendanceFile: '/data/4thSem25-26CSEClassList.xlsx'
      },
      'mse4': { 
        filepath: '/data/SME_4th_Semester_Timetable_Spring_20252026_WEF_01122025.xlsx', 
        name: 'MSE 4th Sem',
        attendanceFile: null
      }
    };

    const chosen = files[semKey] || files['6'];
    
    const response = await fetch(chosen.filepath);

    if (!response.ok) {
      throw new Error(`Failed to fetch Excel file: ${response.status} ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });

    let timetable = {};
    let sections = {};

    if (semKey === 'mse4') {
      // MSE has sections in one sheet
      const ttSheet = workbook.Sheets[workbook.SheetNames[0]];
      const ttData = XLSX.utils.sheet_to_json(ttSheet, { header: 1, defval: '' });
      
      timetable = parseMSETimetable(ttData);
      sections = getMSERollNumberMappings();
    } else {
      // CSE/IT format - FIXED: Better sheet detection
      const ttSheet = workbook.Sheets[workbook.SheetNames[0]];
      
      // Try to find section data sheet (could be sheet 1 or sheet 2)
      let sdSheet = null;
      let sdData = [];
      
      // Check if there's a second sheet
      if (workbook.SheetNames.length > 1) {
        sdSheet = workbook.Sheets[workbook.SheetNames[1]];
        sdData = XLSX.utils.sheet_to_json(sdSheet, { header: 1, defval: '' });
      }
      
      // If second sheet doesn't have section data, try the first sheet
      if (sdData.length === 0 || !hasRollNumbers(sdData)) {
        const firstSheetData = XLSX.utils.sheet_to_json(ttSheet, { header: 1, defval: '' });
        if (hasRollNumbers(firstSheetData)) {
          sdData = firstSheetData;
        }
      }

      const ttData = XLSX.utils.sheet_to_json(ttSheet, { header: 1, defval: '' });

      timetable = parseTimetable(ttData, semKey);
      sections = sdData.length > 0 ? parseSections(sdData) : {};
    }

    // For MSE, add hardcoded roll number mappings if no section data exists
    if (semKey === 'mse4' && Object.keys(sections).length === 0) {
      sections = getMSERollNumberMappings();
    }

    // Load additional attendance/student list file if available
    if (chosen.attendanceFile && chosen.attendanceFile !== chosen.filepath) {
      try {
        const attendanceResponse = await fetch(chosen.attendanceFile);
        if (attendanceResponse.ok) {
          const attendanceBuffer = await attendanceResponse.arrayBuffer();
          const attendanceWorkbook = XLSX.read(attendanceBuffer, { type: 'array' });
          
          const attendanceSections = parseAttendanceFile(attendanceWorkbook);
          sections = { ...sections, ...attendanceSections };
        }
      } catch (attendanceError) {
        // Silently continue if attendance file cannot be loaded
      }
    }



    const result = { sections, timetable, semKey };
    cachedDataMap[semKey] = result;
    return result;
  } catch (error) {
    console.error('Error parsing Excel files:', error);
    throw error; // Re-throw to let caller handle
  }
};

/**
 * Helper function to check if data contains roll numbers
 */
const hasRollNumbers = (data) => {
  for (let i = 0; i < Math.min(50, data.length); i++) {
    const row = data[i];
    if (row && row[0]) {
      const cell = row[0].toString().trim();
      if (/^\d{6,10}$/.test(cell)) {
        return true;
      }
    }
  }
  return false;
};

/** --------------------------- MSE ROLL NUMBER MAPPINGS ---------------------------- */
const getMSERollNumberMappings = () => {
  const sections = {};
  
  // M1: 2402001-2402052 + 2502601-2502607
  for (let i = 2402001; i <= 2402052; i++) {
    sections[i.toString()] = 'M1';
  }
  for (let i = 2502601; i <= 2502607; i++) {
    sections[i.toString()] = 'M1';
  }
  
  // M2: 2402053-2402110 + 2502608-2502616
  for (let i = 2402053; i <= 2402110; i++) {
    sections[i.toString()] = 'M2';
  }
  for (let i = 2502608; i <= 2502616; i++) {
    sections[i.toString()] = 'M2';
  }
  
  // M3: 2409001-2409023
  for (let i = 2409001; i <= 2409023; i++) {
    sections[i.toString()] = 'M3';
  }
  
  // M4: 2426001-2426021 + 2526301-2526304
  for (let i = 2426001; i <= 2426021; i++) {
    sections[i.toString()] = 'M4';
  }
  for (let i = 2526301; i <= 2526304; i++) {
    sections[i.toString()] = 'M4';
  }
  
  return sections;
};

const parseMSETimetable = (data) => {
  const timetable = {};
  
  // Look for section headers "SECTION: M1" etc. in column A (index 0)
  const sectionStarts = [];
  
  for (let i = 0; i < data.length; i++) {
    const rowStr = data[i][0]?.toString().toUpperCase().trim();
    if (rowStr && rowStr.includes('SECTION: ')) {
      const sectionMatch = rowStr.match(/M[1-4]/);
      if (sectionMatch) {
        const section = sectionMatch[0];
        const startRow = i + 2;
        sectionStarts.push({ section, startRow });
      }
    }
  }

  if (sectionStarts.length === 0) {
    return {};
  }

  sectionStarts.sort((a, b) => a.startRow - b.startRow);
  sectionStarts.push({ startRow: data.length, section: null });

  for (let k = 0; k < sectionStarts.length - 1; k++) {
    const { section, startRow } = sectionStarts[k];
    const endRow = sectionStarts[k + 1].startRow;
    
    let sectionData = [];
    for (let r = startRow; r < endRow; r++) {
      if (data[r]) {
        const col0 = data[r][0]?.toString().toUpperCase().trim();
        if (col0 && (col0.includes('MON') || col0.includes('TUE') || col0.includes('WED') || col0.includes('THU') || col0.includes('FRI'))) {
          sectionData.push(data[r]);
        }
      }
    }

    const sectionTimetable = parseMSESection(sectionData);
    timetable[section] = sectionTimetable;
  }

  return timetable;
};

/** --------------------------- PARSE ATTENDANCE FILE ---------------------------- */

const parseAttendanceFile = (workbook) => {
  const sections = {};
  
  for (const sheetName of workbook.SheetNames) {
    
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    
    let detectedSection = null;
    
    // Pattern 1: Section in sheet name
    const sheetNameMatch = sheetName.match(/M[1-4](?![A-Z])|(?:ME|MSE|CSE|CSSE|IT|CE|EE)-[A-Z0-9]+/i);
    if (sheetNameMatch) {
      detectedSection = sheetNameMatch[0].toUpperCase();
    }
    
    // Pattern 2: Look for section in first few rows
    if (!detectedSection) {
      for (let i = 0; i < Math.min(10, data.length); i++) {
        const row = data[i];
        for (let j = 0; j < Math.min(10, row.length); j++) {
          const cell = row[j]?.toString().trim();
          const cellMatch = cell?.match(/M[1-4](?![A-Z])|(?:ME|MSE|CSE|CSSE|IT|CE|EE)-[A-Z0-9]+/i);
          if (cellMatch) {
            detectedSection = cellMatch[0].toUpperCase();
            break;
          }
        }
        if (detectedSection) break;
      }
    }
    
    // Find roll numbers in the sheet
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      
      for (let j = 0; j < row.length; j++) {
        const cell = row[j]?.toString().trim();
        
        // Look for roll number patterns (6-10 digits)
        if (cell && /^\d{6,10}$/.test(cell)) {
          const rollNumber = cell;
          
          if (detectedSection) {
            sections[rollNumber] = detectedSection;
          } else {
            // Try to find section in the same row
            for (let k = 0; k < row.length; k++) {
              const nearbyCell = row[k]?.toString().trim();
              const sectionMatch = nearbyCell?.match(/M[1-4](?![A-Z])|(?:ME|MSE|CSE|CSSE|IT|CE|EE)-[A-Z0-9]+/i);
              if (sectionMatch) {
                const foundSection = sectionMatch[0].toUpperCase();
                sections[rollNumber] = foundSection;
                break;
              }
            }
          }
        }
      }
    }
  }
  
  return sections;
};

/** --------------------------- PARSE TIMETABLE ---------------------------- */

const parseTimetable = (data, semKey) => {
  const timetable = {};
  
  const dayPatterns = [
    ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    ['MON(1)', 'TUE(1)', 'WED(1)', 'THU(1)', 'FRI(1)']
  ];

  let usedPattern = dayPatterns[0];
  for (const pattern of dayPatterns) {
    for (let i = 0; i < Math.min(50, data.length); i++) {
      const col0 = data[i][0]?.toString().toUpperCase().trim();
      if (pattern.some(day => col0?.includes(day))) {
        usedPattern = pattern.map(d => d.toUpperCase());
        break;
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const col0 = row[0]?.toString().toUpperCase().trim();
    
    const matchedDay = usedPattern.find(day => col0?.includes(day));
    
    if (matchedDay) {
      const day = matchedDay.substring(0, 3);
      const section = row[1]?.toString().trim();

      if (!section || section === 'Section' || section === '') continue;

      if (!timetable[section]) {
        timetable[section] = {};
      }

      const dayMap = {
        'MON': 'Monday',
        'TUE': 'Tuesday', 
        'WED': 'Wednesday',
        'THU': 'Thursday',
        'FRI': 'Friday'
      };

      const fullDay = dayMap[day] || day;
      const periods = parsePeriods(row, semKey);
      timetable[section][fullDay] = periods;
    }
  }

  console.log(`Sections created:`, Object.keys(timetable));

  Object.keys(timetable).forEach(sec => {
    timetable[sec]['Saturday'] = [];
    timetable[sec]['Sunday'] = [];
  });

  return timetable;
};

/** --------------------------- PARSE PERIODS ---------------------------- */
const parseMSESection = (sectionData) => {
  const sectionTimetable = {};
  
  const dayPatterns = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  const dayMap = {
    'MON': 'Monday',
    'TUE': 'Tuesday', 
    'WED': 'Wednesday',
    'THU': 'Thursday',
    'FRI': 'Friday'
  };

  for (let i = 0; i < sectionData.length; i++) {
    const row = sectionData[i];
    const col0 = row[0]?.toString().toUpperCase().trim();
    
    const matchedDay = dayPatterns.find(day => col0?.includes(day));
    
    if (matchedDay) {
      
      const fullDay = dayMap[matchedDay];
      const periods = parseMSEPeriods(row);
      sectionTimetable[fullDay] = periods;
    }
  }

  return sectionTimetable;
};

const parseMSEPeriods = (row) => {
  const periods = [];

  const slots = [
    { time: "8:00-9:00",    col: 2,  endTime: "9:00" },
    { time: "9:00-10:00",   col: 4,  endTime: "10:00" },
    { time: "10:00-11:00",  col: 6,  endTime: "11:00" },
    { time: "11:00-12:00",  col: 8,  endTime: "12:00" },
    { time: "12:00-1:00",   col: 10, endTime: "1:00" },
    { time: "1:00-2:00",    col: 12, endTime: "2:00" },
    { time: "2:00-3:00",    col: 14, endTime: "3:00" },
    { time: "3:00-4:00",    col: 16, endTime: "4:00" },
    { time: "4:00-5:00",    col: 18, endTime: "5:00" },
    { time: "5:00-6:00",    col: 20, endTime: "6:00" }
  ];

  const skipIndices = new Set();

  for (let i = 0; i < slots.length; i++) {
    if (skipIndices.has(i)) continue;

    const slot = slots[i];
    const subject = row[slot.col]?.toString().trim();

    if (!subject || subject === "" || subject === "---" || subject === "undefined" || subject === "***") {
      continue;
    }

    if (subject.toLowerCase().includes('lunch') || subject.toLowerCase().includes('break')) {
      periods.push({
        time: slot.time,
        subject: "Break",
        room: "-",
        faculty: "-"
      });
      continue;
    }

    if (subject === "X" || subject.toLowerCase() === "free") {
      periods.push({
        time: slot.time,
        subject: "Free Period",
        room: "-",
        faculty: "-"
      });
      continue;
    }

    let endSlotIndex = i;
    for (let j = i + 1; j < slots.length; j++) {
      const nextSubject = row[slots[j].col]?.toString().trim();
      if (nextSubject === subject) {
        endSlotIndex = j;
        skipIndices.add(j);
      } else if (!nextSubject || nextSubject === "" || nextSubject === "---" || nextSubject === "***") {
        break;
      } else {
        break;
      }
    }

    const startTime = slot.time.split('-')[0];
    const endTime = slots[endSlotIndex].endTime;
    const finalTime = endSlotIndex > i ? `${startTime}-${endTime}` : slot.time;

    let room = "-";
    if (subject.toLowerCase().includes('lab') || 
        subject.toLowerCase().includes('sessional') ||
        subject.includes('MKD') || 
        subject.includes('CP') ||
        subject.includes('MDSM') ||
        subject.includes('MP-II')) {
      room = "Lab";
    } else {
      room = "301";
    }

    periods.push({
      time: finalTime,
      subject,
      room,
      faculty: "-"
    });
  }

  return periods;
};

const parsePeriods = (row, semKey) => {
  const periods = [];

  const slots = [
    { time: "8:00-9:00",    subject: 3,  room: 2  },
    { time: "9:00-10:00",   subject: 5,  room: 4  },
    { time: "10:00-11:00",  subject: 6,  room: 4  },
    { time: "11:00-12:00",  subject: 8,  room: 7  },
    { time: "12:00-1:00",   subject: 10, room: 9  },
    { time: "1:00-2:00",    subject: 11, room: 9  },
    { time: "2:00-3:00",    subject: 13, room: 12 },
    { time: "3:15-4:15",    subject: 15, room: 14 },
    { time: "4:15-5:15",    subject: 17, room: 16 },
    { time: "5:15-6:15",    subject: 18, room: 16 }
  ];

  for (const slot of slots) {
    const subject = row[slot.subject]?.toString().trim();
    let room = row[slot.room]?.toString().trim();

    if (!subject || subject === "" || subject === "---" || subject === "undefined") {
      continue;
    }

    if (subject.toLowerCase().includes('lunch') || subject.toLowerCase().includes('break')) {
      periods.push({
        time: slot.time,
        subject: "Break",
        room: "-",
        faculty: "-"
      });
      continue;
    }

    if (subject === "X" || subject.toLowerCase() === "free") {
      periods.push({
        time: slot.time,
        subject: "Free Period",
        room: room || "-",
        faculty: "-"
      });
      continue;
    }

    if (room && room !== '-' && room !== '---' && room !== 'undefined') {
      const patterns = [
        /([A-Z]\d+-[A-Z]-\d+)/i,
        /([A-Z]\d+-[A-Z]\d+)/i,
        /([A-Z]-\d+)/i,
        /(Room\s*[A-Z]?\d+)/i,
        /([A-Z]\d+)/i,
        /(\d{3,})/
      ];

      let extractedRoom = room;
      for (const pattern of patterns) {
        const match = room.match(pattern);
        if (match) {
          extractedRoom = match[1];
          break;
        }
      }

      room = extractedRoom;
    } else {
      room = "-";
    }

    periods.push({
      time: slot.time,
      subject,
      room: room || "-",
      faculty: "-"
    });
  }

  return periods;
};

/** --------------------------- PARSE SECTIONS ---------------------------- */

const parseSections = (data) => {
  const sections = {};

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    if (row[0] && row[1]) {
      const rawRoll = row[0].toString().trim();
      const section = row[1].toString().trim();

      const { raw, digits } = normalizeRoll(rawRoll);

      if (raw.match(/^\d{6,10}$/)) {
        sections[raw] = section;
        if (digits && digits !== raw) sections[digits] = section;
      }
    }
  }

  return sections;
};

/** --------------------------- NORMALIZE SECTION NAME ---------------------------- */

const normalizeSectionName = (section) => {
  if (!section) return section;
  
  if (/^M[1-4]$/.test(section)) {
    return section;
  }
  
  let normalized = section
    .replace(/CSCE-0?/, 'CSCE-')
    .replace(/CSE-0/, 'CSE-')
    .replace(/IT-0/, 'IT-')
    .replace(/M-0/, 'M-')
    .replace(/MSE-0/, 'MSE-');
  
  normalized = normalized.replace(/(\D+)0+(\d+)/, '$1$2');
  
  return normalized;
};

/** --------------------------- FIND SECTION IN TIMETABLE ---------------------------- */

const findSectionInTimetable = (timetable, section) => {
  const normalizedSection = normalizeSectionName(section);

  let sectionTT = timetable[section] || timetable[normalizedSection];
  
  if (!sectionTT) {
    const exactMatch = Object.keys(timetable).find(
      key => key.toLowerCase() === section.toLowerCase()
    );
    if (exactMatch) {
      sectionTT = timetable[exactMatch];
    }
  }

  if (!sectionTT) {
    const cleanSection = section.replace(/[-\s]/g, '').toLowerCase();
    const fuzzyMatch = Object.keys(timetable).find(
      key => key.replace(/[-\s]/g, '').toLowerCase() === cleanSection
    );
    if (fuzzyMatch) {
      sectionTT = timetable[fuzzyMatch];
    }
  }

  return sectionTT;
};

/** --------------------------- DETECT BRANCH FROM SECTION ---------------------------- */

const detectBranchFromSection = (section) => {
  const s = section.toUpperCase();
  if (/M[1-4](?![A-Z])/.test(s) || s.includes('ME-') || s.includes('MSE')) {
    return 'mse4';
  }
  return null;
};

/** --------------------------- TODAY TIMETABLE ---------------------------- */

export const getTodayTimetable = async (input) => {
  let section;

  // Check if input is year|section format
  if (input.includes('|')) {
    const [year, sec] = input.split('|');
    section = sec.trim().toUpperCase();
    console.log(`Using year+section input: ${year} ${section}`);
  } else {
    // Roll number lookup - check mechanical sections first
    const mechanicalSection = getMechanicalSectionFromRoll(input);
    if (mechanicalSection) {
      section = mechanicalSection;
      console.log(`Roll number: ${input}, Found mechanical section: ${section}`);
    }
  }

  // If it's a civil section (CE), use civilTimetable.ts
  if (section && /^CE$/.test(section)) {
    console.log(`Using civil timetable data for section ${section}`);
    const sectionData = getCivilSectionTimetable(section);
    
    if (!sectionData) {
      throw new Error(`Civil section ${section} not found in timetable`);
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()] || "Monday";
    const todaySchedule = (sectionData.timetable[today] || []).filter(
      period => period.subject !== "---" && period.subject !== "Weekend"
    );

    console.log(`Today (${today}) schedule for ${section}:`, todaySchedule);

    if (todaySchedule.length === 0) {
      return {
        day: today,
        section: section,
        timetable: [],
        message: "No classes today. Enjoy your break! 🎉"
      };
    }

    return { day: today, section: section, timetable: todaySchedule };
  }

  // If it's a mechanical section (M1, M2, M3, M4), use mechanicalTimetable.ts
  if (section && /^M[1-4]$/.test(section)) {
    console.log(`Using mechanical timetable data for section ${section}`);
    const sectionData = getMechanicalSectionTimetable(section);
    
    if (!sectionData) {
      throw new Error(`Mechanical section ${section} not found in timetable`);
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()] || "Monday";
    const todaySchedule = (sectionData.timetable[today] || []).filter(
      period => period.subject !== "---" && period.subject !== "Weekend"
    );

    console.log(`Today (${today}) schedule for ${section}:`, todaySchedule);

    if (todaySchedule.length === 0) {
      return {
        day: today,
        section: section,
        timetable: [],
        message: "No classes today. Enjoy your break! 🎉"
      };
    }

    return { day: today, section: section, timetable: todaySchedule };
  }

  // For non-mechanical/non-civil sections, use Excel parsing
  let { sections, timetable, semKey } = await parseExcelFiles(input);

  // Check if input is year|section format
  if (input.includes('|')) {
    const [year, sec] = input.split('|');
    section = sec.trim();
    console.log(`Using year+section input: ${year} ${section}`);
    
    // Re-fetch with correct semester if it's MSE
    const branch = detectBranchFromSection(section);
    if (branch && branch !== semKey) {
      console.log(`Re-fetching data for branch: ${branch}`);
      const newData = await parseExcelFiles(section);
      sections = newData.sections;
      timetable = newData.timetable;
      semKey = newData.semKey;
    }
  } else {
    // Roll number lookup
    const { raw: lookupRaw, digits: lookupDigits } = normalizeRoll(input);
    section = sections[lookupRaw] || sections[lookupDigits];
    console.log(`Roll number: ${input}, Found section: ${section}`);
    
    // Re-fetch with correct semester if it's MSE
    if (section) {
      const branch = detectBranchFromSection(section);
      if (branch && branch !== semKey) {
        console.log(`Re-fetching data for branch: ${branch}`);
        const newData = await parseExcelFiles(section);
        sections = newData.sections;
        timetable = newData.timetable;
        semKey = newData.semKey;
      }
    }
  }

  if (!section) {
    throw new Error("Section not found. Please check your roll number or year+section.");
  }

  const sectionTT = findSectionInTimetable(timetable, section);

  if (!sectionTT) {
    throw new Error(`Section ${section} not found in timetable`);
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()] || "Monday";

  const todaySchedule = sectionTT[today] || [];

  if (todaySchedule.length === 0) {
    return {
      day: today,
      section: normalizeSectionName(section),
      timetable: [],
      message: "No classes today. Enjoy your break! 🎉"
    };
  }

  return { day: today, section: normalizeSectionName(section), timetable: todaySchedule };
};

/** --------------------------- FULL WEEK TIMETABLE ---------------------------- */

export const getFullWeekTimetable = async (input) => {
  let section;

  // Check if input is year|section format
  if (input.includes('|')) {
    const [year, sec] = input.split('|');
    section = sec.trim().toUpperCase();
    console.log(`Using year+section input: ${year} ${section}`);
  } else {
    // Roll number lookup - check mechanical sections first
    const mechanicalSection = getMechanicalSectionFromRoll(input);
    if (mechanicalSection) {
      section = mechanicalSection;
      console.log(`Roll number: ${input}, Found mechanical section: ${section}`);
    }
  }

  // If it's a civil section (CE), use civilTimetable.ts
  if (section && /^CE$/.test(section)) {
    console.log(`Using civil timetable data for section ${section}`);
    const sectionData = getCivilSectionTimetable(section);
    
    if (!sectionData) {
      throw new Error(`Civil section ${section} not found in timetable`);
    }

    // Filter out "---" and "Weekend" entries from all days
    const filteredTimetable = {};
    for (const [day, periods] of Object.entries(sectionData.timetable)) {
      filteredTimetable[day] = periods.filter(
        period => period.subject !== "---" && period.subject !== "Weekend"
      );
    }

    return { section: section, fullTimetable: filteredTimetable };
  }

  // If it's a mechanical section (M1, M2, M3, M4), use mechanicalTimetable.ts
  if (section && /^M[1-4]$/.test(section)) {
    console.log(`Using mechanical timetable data for section ${section}`);
    const sectionData = getMechanicalSectionTimetable(section);
    
    if (!sectionData) {
      throw new Error(`Mechanical section ${section} not found in timetable`);
    }

    // Filter out "---" and "Weekend" entries from all days
    const filteredTimetable = {};
    for (const [day, periods] of Object.entries(sectionData.timetable)) {
      filteredTimetable[day] = periods.filter(
        period => period.subject !== "---" && period.subject !== "Weekend"
      );
    }

    return { section: section, fullTimetable: filteredTimetable };
  }

  // For non-mechanical/non-civil sections, use Excel parsing
  let { sections, timetable, semKey } = await parseExcelFiles(input);

  // Check if input is year|section format
  if (input.includes('|')) {
    const [year, sec] = input.split('|');
    section = sec.trim();
    console.log(`Using year+section input: ${year} ${section}`);
    
    // Re-fetch with correct semester if it's MSE
    const branch = detectBranchFromSection(section);
    if (branch && branch !== semKey) {
      console.log(`Re-fetching data for branch: ${branch}`);
      const newData = await parseExcelFiles(section);
      sections = newData.sections;
      timetable = newData.timetable;
      semKey = newData.semKey;
    }
  } else {
    // Roll number lookup
    const { raw: lookupRaw, digits: lookupDigits } = normalizeRoll(input);
    section = sections[lookupRaw] || sections[lookupDigits];
    console.log(`Roll number: ${input}, Found section: ${section}`);
    
    // Re-fetch with correct semester if it's MSE
    if (section) {
      const branch = detectBranchFromSection(section);
      if (branch && branch !== semKey) {
        console.log(`Re-fetching data for branch: ${branch}`);
        const newData = await parseExcelFiles(section);
        sections = newData.sections;
        timetable = newData.timetable;
        semKey = newData.semKey;
      }
    }
  }

  if (!section) {
    throw new Error("Section not found. Please check your roll number or year+section.");
  }

  const fullTimetable = findSectionInTimetable(timetable, section);

  if (!fullTimetable) {
    throw new Error(`Section ${section} not found in timetable`);
  }

  return { section: normalizeSectionName(section), fullTimetable };
};