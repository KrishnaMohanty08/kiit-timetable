import * as XLSX from 'xlsx';

let cachedData = null;

export const parseExcelFiles = async () => {
  if (cachedData) return cachedData;

  try {
    const response = await fetch('/data/6th_sem_Time-Table_and_Section_Detail.xlsx');
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    
    const ttSheet = workbook.Sheets[workbook.SheetNames[0]]; // Time-Table
    const sectionSheet = workbook.Sheets[workbook.SheetNames[1]]; // Section Detail
    
    const ttData = XLSX.utils.sheet_to_json(ttSheet, { header: 1, defval: '' });
    const sectionData = XLSX.utils.sheet_to_json(sectionSheet, { header: 1, defval: '' });

    const timetable = parseTimetable(ttData);
    const sections = parseSections(sectionData);

    cachedData = { sections, timetable };
    return cachedData;
  } catch (error) {
    console.error('Error parsing Excel files:', error);
    return { sections: {}, timetable: {} };
  }
};

const normalizeRoll = (r) => {
  if (!r) return { raw: '', digits: '' };
  const s = r.toString().trim();
  const digits = s.replace(/\D+/g, '');
  return { raw: s, digits };
};

const parseTimetable = (data) => {
  const timetable = {};
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row[0] && days.includes(row[0].toString().toUpperCase())) {
      const day = row[0].toString();
      const section = row[1]?.toString().trim();
      
      if (!section || section === 'Section') continue;
      
      if (!timetable[section]) timetable[section] = {};
      
      const dayMap = { 'MON': 'Monday', 'TUE': 'Tuesday', 'WED': 'Wednesday', 'THU': 'Thursday', 'FRI': 'Friday' };
      const fullDay = dayMap[day.toUpperCase()] || day;
      
      const periods = parsePeriods(row);
      timetable[section][fullDay] = periods;
    }
  }
  
  Object.keys(timetable).forEach(section => {
    timetable[section]['Saturday'] = [];
    timetable[section]['Sunday'] = [];
  });
  
  return timetable;
};

const parsePeriods = (row) => {
  const periods = [];
  const timeSlots = [
    { index: 3, room: 2, time: '8:00-9:00' },
    { index: 5, room: 4, time: '9:00-10:00' },
    { index: 6, room: 4, time: '10:00-11:00' },
    { index: 8, room: 7, time: '11:00-12:00' },
    { index: 10, room: 9, time: '12:00-1:00' },
    { index: 11, room: 9, time: '1:00-2:00' },
    { index: 13, room: 12, time: '2:00-3:00' },
    { index: 15, room: 14, time: '3:15-4:15' }
  ];
  
  for (const slot of timeSlots) {
    const subject = row[slot.index]?.toString().trim();
    const room = row[slot.room]?.toString().trim();
    
    if (subject && subject !== 'X' && subject !== '---' && subject !== '') {
      if (subject.toLowerCase().includes('break')) {
        periods.push({ time: slot.time, subject: 'Break', room: '-', faculty: '-' });
      } else {
        let cleanSubject = subject.replace(/\\/g, ' / ').replace(/\|/g, ', ');
        periods.push({ time: slot.time, subject: cleanSubject, room: room || '-', faculty: '-' });
      }
    }
  }
  
  return periods;
};

const parseSections = (data) => {
  const sections = {};
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row[0] && row[1]) {
      const rawRoll = row[0].toString().trim();
      const section = row[1].toString().trim();
      const { raw, digits } = normalizeRoll(rawRoll);
      
      if (raw.match(/^\d{6,8}$/) && section) {
        sections[raw] = section;
        if (digits && digits !== raw) sections[digits] = section;
      }
    }
  }
  return sections;
};

export const getTodayTimetable = async (rollNumber) => {
  const { sections, timetable } = await parseExcelFiles();
  const { raw: lookupRaw, digits: lookupDigits } = normalizeRoll(rollNumber);
  const section = sections[lookupRaw] || sections[lookupDigits] || null;
  
  if (!section) throw new Error("Roll number not found");
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  const sectionTimetable = timetable[section] || {};
  const todaySchedule = sectionTimetable[today] || [];

  if (todaySchedule.length === 0) {
    return { day: today, section, timetable: [], message: "No classes today. Enjoy your break! 🎉" };
  }
  
  return { day: today, section, timetable: todaySchedule };
};

export const getFullWeekTimetable = async (rollNumber) => {
  const { sections, timetable } = await parseExcelFiles();
  const { raw: lookupRaw, digits: lookupDigits } = normalizeRoll(rollNumber);
  const section = sections[lookupRaw] || sections[lookupDigits] || null;
  
  if (!section) throw new Error("Roll number not found");
  
  const fullTimetable = timetable[section] || {};
  
  return { section, fullTimetable };
};