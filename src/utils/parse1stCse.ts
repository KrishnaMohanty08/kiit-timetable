// parse1stCse.ts - Fixed version with proper Scheme B support

import KIIT_TIMETABLE_DATA from '@/lib/year1stSchemeA_B';

interface Period {
  time: string;
  subject: string;
  room: string;
  faculty?: string;
  type?: string;
  note?: string;
}

interface DaySchedule {
  section: string;
  slots: Period[];
}

interface TimetableResult {
  section: string;
  timetable: Array<{
    day: string;
    slots: Period[];
  }>;
}

// Get full week timetable for Scheme A or B
const getSchemeABWeekTimetable = (scheme: 'A' | 'B', section: string): TimetableResult => {
  console.log(`Getting timetable for Scheme ${scheme}, Section ${section}`);
  
  // Debug: log available keys
  console.log('Available keys in KIIT_TIMETABLE_DATA:', Object.keys(KIIT_TIMETABLE_DATA));
  console.log('Available scheme keys:', Object.keys(KIIT_TIMETABLE_DATA.schemes || {}));
  
  // Access the correct scheme
  const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
  const schemeData = KIIT_TIMETABLE_DATA.schemes[schemeKey];
  
  if (!schemeData) {
    console.error(`Scheme ${scheme} not found in data`);
    console.error(`Tried to access: KIIT_TIMETABLE_DATA.schemes['${schemeKey}']`);
    console.error('Full schemes object:', KIIT_TIMETABLE_DATA.schemes);
    throw new Error(`Scheme ${scheme} not found`);
  }

  console.log(`Scheme ${scheme} data found, sections available:`, schemeData.sections);

  // Validate section exists
  if (!schemeData.sections.includes(section)) {
    console.error(`Section ${section} not found in Scheme ${scheme}`);
    console.log('Available sections:', schemeData.sections);
    throw new Error(`Section ${section} not found in Scheme ${scheme}`);
  }

  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const weekSchedule: Array<{ day: string; slots: Period[] }> = [];

  days.forEach(day => {
    const daySchedule = schemeData.timetable[day];
    
    if (!daySchedule) {
      console.warn(`No timetable data for ${day}`);
      return;
    }

    const sectionSchedule = daySchedule.find((s: DaySchedule) => s.section === section);
    
    if (sectionSchedule) {
      weekSchedule.push({
        day: day.charAt(0) + day.slice(1).toLowerCase(),
        slots: sectionSchedule.slots.map(slot => ({
          time: slot.time,
          subject: slot.subject,
          room: slot.room,
          faculty: slot.faculty || '-',
          type: slot.type,
          note: slot.note
        }))
      });
    } else {
      console.warn(`No schedule found for ${section} on ${day}`);
      // Add empty day
      weekSchedule.push({
        day: day.charAt(0) + day.slice(1).toLowerCase(),
        slots: []
      });
    }
  });

  // Add weekend
  weekSchedule.push(
    { day: 'Saturday', slots: [] },
    { day: 'Sunday', slots: [] }
  );

  return {
    section,
    timetable: weekSchedule
  };
};

// Get today's timetable for Scheme A or B
const getSchemeABTodayTimetable = (scheme: 'A' | 'B', section: string): TimetableResult => {
  console.log(`Getting today's timetable for Scheme ${scheme}, Section ${section}`);
  
  const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
  const schemeData = KIIT_TIMETABLE_DATA.schemes[schemeKey];
  
  if (!schemeData) {
    throw new Error(`Scheme ${scheme} not found`);
  }

  // Validate section exists
  if (!schemeData.sections.includes(section)) {
    throw new Error(`Section ${section} not found in Scheme ${scheme}`);
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  const todayUpper = today.toUpperCase();

  console.log(`Today is: ${today}`);

  // Weekend check
  if (today === 'Saturday' || today === 'Sunday') {
    return {
      section,
      timetable: [{
        day: today,
        slots: []
      }]
    };
  }

  const daySchedule = schemeData.timetable[todayUpper];
  
  if (!daySchedule) {
    console.warn(`No timetable data for ${today}`);
    return {
      section,
      timetable: [{
        day: today,
        slots: []
      }]
    };
  }

  const sectionSchedule = daySchedule.find((s: DaySchedule) => s.section === section);

  if (!sectionSchedule || sectionSchedule.slots.length === 0) {
    return {
      section,
      timetable: [{
        day: today,
        slots: []
      }]
    };
  }

  return {
    section,
    timetable: [{
      day: today,
      slots: sectionSchedule.slots.map(slot => ({
        time: slot.time,
        subject: slot.subject,
        room: slot.room,
        faculty: slot.faculty || '-',
        type: slot.type,
        note: slot.note
      }))
    }]
  };
};

// Main function to get timetable by identifier
export const getTimetableByIdentifier = (
  identifier: string,
  viewType: 'today' | 'week' = 'week'
): TimetableResult => {
  console.log(`getTimetableByIdentifier called with: ${identifier}, viewType: ${viewType}`);

  // Parse the identifier: "1st|A|A5" or "1st|B|B10"
  const parts = identifier.split('|');
  
  if (parts.length !== 3) {
    throw new Error('Invalid identifier format. Expected format: "1st|A|A5" or "1st|B|B10"');
  }

  const [year, scheme, section] = parts;

  // Validate year
  if (year !== '1st') {
    throw new Error('This parser only handles 1st year timetables');
  }

  // Validate scheme
  if (scheme !== 'A' && scheme !== 'B') {
    throw new Error('Invalid scheme. Must be "A" or "B"');
  }

  // Validate section format
  const schemePrefix = scheme; // 'A' or 'B'
  if (!section.startsWith(schemePrefix)) {
    throw new Error(`Section ${section} does not match scheme ${scheme}`);
  }

  console.log(`Parsed: Year=${year}, Scheme=${scheme}, Section=${section}`);

  if (viewType === 'today') {
    return getSchemeABTodayTimetable(scheme as 'A' | 'B', section);
  } else {
    return getSchemeABWeekTimetable(scheme as 'A' | 'B', section);
  }
};

// Helper function to get all sections for a scheme
export const getSchemeSections = (scheme: 'A' | 'B'): string[] => {
  const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
  const schemeData = KIIT_TIMETABLE_DATA.schemes[schemeKey];
  
  if (!schemeData) {
    return [];
  }
  
  return schemeData.sections;
};

// Helper function to get course full name
export const getCourseFullName = (scheme: 'A' | 'B', courseCode: string): string => {
  const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
  const schemeData = KIIT_TIMETABLE_DATA.schemes[schemeKey];
  
  if (!schemeData || !schemeData.courseFullNames) {
    return courseCode;
  }
  
  return schemeData.courseFullNames[courseCode] || courseCode;
};

// Helper function to validate if section exists
export const validateSection = (scheme: 'A' | 'B', section: string): boolean => {
  const sections = getSchemeSections(scheme);
  return sections.includes(section);
};

export default getTimetableByIdentifier;