import * as XLSX from 'xlsx';

/**
 * Parse Excel files and convert them to JSON
 * This utility reads the Excel files and generates:
 * 1. sections.json - Maps roll numbers to sections
 * 2. timetable.json - Weekly timetable for each section
 */

export const parseExcelFiles = async () => {
  try {
    // Note: In production, you would read actual Excel files
    // For now, we'll use sample data structure
    
    // Sample structure for sections.json
    const sectionsData = {
      "23051001": "CSE-6A",
      "23051002": "CSE-6A",
      "23051025": "CSE-6B",
      "23051026": "CSE-6B",
      "23051050": "CSE-6C",
      "23051051": "CSE-6C",
    };

    // Sample structure for timetable.json
    const timetableData = {
      "CSE-6A": {
        "Monday": [
          { time: "09:00-10:00", subject: "DBMS", room: "B-204", faculty: "Dr. Sharma" },
          { time: "10:00-11:00", subject: "Operating Systems", room: "B-205", faculty: "Dr. Kumar" },
          { time: "11:00-12:00", subject: "Computer Networks", room: "B-204", faculty: "Dr. Patel" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Software Engineering", room: "B-206", faculty: "Dr. Singh" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "B-207", faculty: "Dr. Verma" },
        ],
        "Tuesday": [
          { time: "09:00-10:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "10:00-11:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "11:00-12:00", subject: "DBMS", room: "B-204", faculty: "Dr. Sharma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Operating Systems", room: "B-205", faculty: "Dr. Kumar" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "B-207", faculty: "Dr. Verma" },
        ],
        "Wednesday": [
          { time: "09:00-10:00", subject: "Software Engineering", room: "B-206", faculty: "Dr. Singh" },
          { time: "10:00-11:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
          { time: "11:00-12:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Operating Systems", room: "B-205", faculty: "Dr. Kumar" },
          { time: "02:00-03:00", subject: "Computer Networks", room: "B-204", faculty: "Dr. Patel" },
        ],
        "Thursday": [
          { time: "09:00-10:00", subject: "Compiler Design", room: "B-207", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Software Engineering", room: "B-206", faculty: "Dr. Singh" },
          { time: "11:00-12:00", subject: "DBMS", room: "B-204", faculty: "Dr. Sharma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Computer Networks", room: "B-204", faculty: "Dr. Patel" },
          { time: "02:00-03:00", subject: "Operating Systems", room: "B-205", faculty: "Dr. Kumar" },
        ],
        "Friday": [
          { time: "09:00-10:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
          { time: "10:00-11:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
          { time: "11:00-12:00", subject: "Compiler Design", room: "B-207", faculty: "Dr. Verma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Software Engineering", room: "B-206", faculty: "Dr. Singh" },
          { time: "02:00-03:00", subject: "Computer Networks", room: "B-204", faculty: "Dr. Patel" },
        ],
        "Saturday": [
          { time: "09:00-10:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "11:00-12:00", subject: "DBMS", room: "B-204", faculty: "Dr. Sharma" },
        ],
        "Sunday": []
      },
      "CSE-6B": {
        "Monday": [
          { time: "09:00-10:00", subject: "Operating Systems", room: "C-101", faculty: "Dr. Kumar" },
          { time: "10:00-11:00", subject: "DBMS", room: "C-102", faculty: "Dr. Sharma" },
          { time: "11:00-12:00", subject: "Software Engineering", room: "C-103", faculty: "Dr. Singh" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Computer Networks", room: "C-104", faculty: "Dr. Patel" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "C-105", faculty: "Dr. Verma" },
        ],
        "Tuesday": [
          { time: "09:00-10:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
          { time: "10:00-11:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
          { time: "11:00-12:00", subject: "Operating Systems", room: "C-101", faculty: "Dr. Kumar" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Computer Networks", room: "C-104", faculty: "Dr. Patel" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "C-105", faculty: "Dr. Verma" },
        ],
        "Wednesday": [
          { time: "09:00-10:00", subject: "Computer Networks", room: "C-104", faculty: "Dr. Patel" },
          { time: "10:00-11:00", subject: "Software Engineering", room: "C-103", faculty: "Dr. Singh" },
          { time: "11:00-12:00", subject: "DBMS", room: "C-102", faculty: "Dr. Sharma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Operating Systems", room: "C-101", faculty: "Dr. Kumar" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "C-105", faculty: "Dr. Verma" },
        ],
        "Thursday": [
          { time: "09:00-10:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
          { time: "10:00-11:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
          { time: "11:00-12:00", subject: "Software Engineering", room: "C-103", faculty: "Dr. Singh" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "DBMS", room: "C-102", faculty: "Dr. Sharma" },
          { time: "02:00-03:00", subject: "Computer Networks", room: "C-104", faculty: "Dr. Patel" },
        ],
        "Friday": [
          { time: "09:00-10:00", subject: "Compiler Design", room: "C-105", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "11:00-12:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Software Engineering", room: "C-103", faculty: "Dr. Singh" },
          { time: "02:00-03:00", subject: "Operating Systems", room: "C-101", faculty: "Dr. Kumar" },
        ],
        "Saturday": [
          { time: "09:00-10:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "11:00-12:00", subject: "DBMS", room: "C-102", faculty: "Dr. Sharma" },
        ],
        "Sunday": []
      },
      "CSE-6C": {
        "Monday": [
          { time: "09:00-10:00", subject: "Computer Networks", room: "D-201", faculty: "Dr. Patel" },
          { time: "10:00-11:00", subject: "Compiler Design", room: "D-202", faculty: "Dr. Verma" },
          { time: "11:00-12:00", subject: "DBMS", room: "D-203", faculty: "Dr. Sharma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Software Engineering", room: "D-204", faculty: "Dr. Singh" },
          { time: "02:00-03:00", subject: "Operating Systems", room: "D-205", faculty: "Dr. Kumar" },
        ],
        "Tuesday": [
          { time: "09:00-10:00", subject: "Software Engineering", room: "D-204", faculty: "Dr. Singh" },
          { time: "10:00-11:00", subject: "DBMS", room: "D-203", faculty: "Dr. Sharma" },
          { time: "11:00-12:00", subject: "Computer Networks", room: "D-201", faculty: "Dr. Patel" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
          { time: "02:00-03:00", subject: "Operating Systems Lab", room: "Lab-1", faculty: "Dr. Kumar" },
        ],
        "Wednesday": [
          { time: "09:00-10:00", subject: "Compiler Design", room: "D-202", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Operating Systems", room: "D-205", faculty: "Dr. Kumar" },
          { time: "11:00-12:00", subject: "Software Engineering", room: "D-204", faculty: "Dr. Singh" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
          { time: "02:00-03:00", subject: "DBMS Lab", room: "Lab-2", faculty: "Dr. Sharma" },
        ],
        "Thursday": [
          { time: "09:00-10:00", subject: "Computer Networks", room: "D-201", faculty: "Dr. Patel" },
          { time: "10:00-11:00", subject: "DBMS", room: "D-203", faculty: "Dr. Sharma" },
          { time: "11:00-12:00", subject: "Compiler Design", room: "D-202", faculty: "Dr. Verma" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "Software Engineering", room: "D-204", faculty: "Dr. Singh" },
          { time: "02:00-03:00", subject: "Operating Systems", room: "D-205", faculty: "Dr. Kumar" },
        ],
        "Friday": [
          { time: "09:00-10:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "10:00-11:00", subject: "Computer Networks Lab", room: "Lab-3", faculty: "Dr. Patel" },
          { time: "11:00-12:00", subject: "Operating Systems", room: "D-205", faculty: "Dr. Kumar" },
          { time: "12:00-01:00", subject: "LUNCH BREAK", room: "-", faculty: "-" },
          { time: "01:00-02:00", subject: "DBMS", room: "D-203", faculty: "Dr. Sharma" },
          { time: "02:00-03:00", subject: "Compiler Design", room: "D-202", faculty: "Dr. Verma" },
        ],
        "Saturday": [
          { time: "09:00-10:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "10:00-11:00", subject: "Compiler Design Lab", room: "Lab-4", faculty: "Dr. Verma" },
          { time: "11:00-12:00", subject: "Software Engineering", room: "D-204", faculty: "Dr. Singh" },
        ],
        "Sunday": []
      }
    };

    return { sections: sectionsData, timetable: timetableData };
  } catch (error) {
    console.error("Error parsing Excel files:", error);
    throw error;
  }
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
