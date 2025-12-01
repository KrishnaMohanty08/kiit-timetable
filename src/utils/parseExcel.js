import * as XLSX from 'xlsx';

/**
 * Parse Excel files and convert them to JSON
 * This utility reads the Excel files and generates:
 * 1. sections.json - Maps roll numbers to sections
 * 2. timetable.json - Weekly timetable for each section
 */

let cachedData = null;

export const parseExcelFiles = async () => {
  // Return cached data if available
  if (cachedData) {
    return cachedData;
  }

  try {
    // Fetch and parse the section detail Excel file (contains both timetable and roll mappings)
    const sdResponse = await fetch('/data/6th_sem_Time-Table_and_Section_Detail.xlsx');
    const sdBuffer = await sdResponse.arrayBuffer();
    const sdWorkbook = XLSX.read(sdBuffer, { type: 'array' });
    const sdSheet = sdWorkbook.Sheets[sdWorkbook.SheetNames[0]];
    const sdData = XLSX.utils.sheet_to_json(sdSheet, { header: 1, defval: '' });

    // Parse timetable
    const timetable = parseTimetable(sdData);
    
    // Parse sections (roll number to section mapping)
    const sections = parseSections(sdData);

    cachedData = { sections, timetable };
    return cachedData;
  } catch (error) {
    console.error('Error parsing Excel files:', error);
    
    // Return empty data structure on error
    return {
      sections: {},
      timetable: {}
    };
  }
};

const parseTimetable = (data) => {
  const timetable = {};
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    
    // Check if this row has a day
    if (row[0] && days.includes(row[0].toString().toUpperCase())) {
      const day = row[0].toString();
      const section = row[1]?.toString().trim();
      
      if (!section || section === 'Section') continue;
      
      // Initialize section if not exists
      if (!timetable[section]) {
        timetable[section] = {};
      }
      
      // Map day names
      const dayMap = {
        'MON': 'Monday',
        'TUE': 'Tuesday',
        'WED': 'Wednesday',
        'THU': 'Thursday',
        'FRI': 'Friday'
      };
      
      const fullDay = dayMap[day.toUpperCase()] || day;
      
      // Parse the periods for this day
      const periods = parsePeriods(row);
      timetable[section][fullDay] = periods;
    }
  }
  
  // Add empty arrays for Saturday and Sunday
  Object.keys(timetable).forEach(section => {
    timetable[section]['Saturday'] = [];
    timetable[section]['Sunday'] = [];
  });
  
  return timetable;
};

const parsePeriods = (row) => {
  const periods = [];
  
  // Time slot mappings based on Excel structure
  // Columns: DAY, Section, ROOM1, 8-9, ROOM2, 9-10, 10-11, ROOM3, 11-12, ROOM4, 12-1, 1-2, ROOM5, 2-3, ROOM6, 3.15-4.15, ROOM7, 4.15-5.15, 5.15-6.15
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
      // Check if it's a break
      if (subject.toLowerCase().includes('break')) {
        periods.push({
          time: slot.time,
          subject: 'Break',
          room: '-',
          faculty: '-'
        });
      } else {
        // Clean up subject names - replace | with comma and handle lab notation
        let cleanSubject = subject.replace(/\\/g, ' / ');
        
        periods.push({
          time: slot.time,
          subject: cleanSubject,
          room: room || '-',
          faculty: '-' // Faculty info not in Excel
        });
      }
    }
  }
  
  return periods;
};

const parseSections = (data) => {
  const sections = {};
  let foundMapping = false;
  
  // Find where the roll number mapping starts
  // It usually starts after many rows and has format: Roll Number | Section
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    
    // Check if we found the mapping section (starts with 7-8 digit numbers)
    if (row[0]?.toString().match(/^\d{7,8}$/)) {
      foundMapping = true;
    }
    
    if (foundMapping && row[0] && row[1]) {
      const rollNumber = row[0].toString().trim();
      const section = row[1].toString().trim();
      
      // Validate roll number format (7-8 digits)
      if (rollNumber.match(/^\d{7,8}$/) && section) {
        sections[rollNumber] = section;
      }
    }
  }
  
  return sections;
};

/**
 * Function to read actual Excel files when provided
 * @param {File} sectionsFile - The sections Excel file
 * @param {File} timetableFile - The timetable Excel file
 */
export const parseRealExcelFiles = async (sectionsFile, timetableFile) => {
  try {
    // Read sections file
    const sectionsData = await readExcelFile(sectionsFile);
    // Read timetable file
    const timetableData = await readExcelFile(timetableFile);
    
    // Process and structure the data
    // This will need to be customized based on actual Excel structure
    
    return { sections: sectionsData, timetable: timetableData };
  } catch (error) {
    console.error("Error parsing real Excel files:", error);
    throw error;
  }
};

/**
 * Helper function to read Excel file
 */
const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Get first sheet
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

/**
 * Get today's timetable for a given roll number
 */
export const getTodayTimetable = async (rollNumber) => {
  try {
    const { sections, timetable } = await parseExcelFiles();
    
    // Get section for roll number
    const section = sections[rollNumber];
    
    if (!section) {
      throw new Error("Roll number not found");
    }
    
    // Get current day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];
    
    // Get timetable for section and day
    const todaySchedule = timetable[section][today];
    
    if (!todaySchedule || todaySchedule.length === 0) {
      return {
        day: today,
        section: section,
        timetable: [],
        message: "No classes today. Enjoy your break! 🎉"
      };
    }
    
    return {
      day: today,
      section: section,
      timetable: todaySchedule
    };
  } catch (error) {
    console.error("Error getting today's timetable:", error);
    throw error;
  }
};
