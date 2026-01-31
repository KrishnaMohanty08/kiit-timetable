
const KIIT_TIMETABLE_DATA = {
    metadata: {
        university: "Kalinga Institute of Industrial Technology",
        location: "Bhubaneswar-24",
        academicYear: "2025-2026",
        effectiveFrom: "2025-12-03",
        year: "1st"
    },

    schemes: {
        // ==================== SCHEME A ====================
        schemeA: {
            name: "Scheme A",

            courseFullNames: {
                "T&NM": "Transform & Numerical Methods",
                "CHEM": "Chemistry",
                "ENG": "English",
                "BETc": "Basic Electronics",
                "BEE": "Basic Electrical Engineering",
                "E.MECH": "Engineering Mechanics"
            },

            labs: {
                "Chem. Lab": { name: "Chemistry Lab", location: "Lab complex, School of Applied Sciences, Campus-3" },
                "BEE Lab": { name: "Basic Electrical Engineering Lab", location: "Block-E, Campus-3" },
                "B.Etc Lab": { name: "Basic Electronics Lab", location: "Block-A, Campus-3" },
                "Engg. Lab": { name: "Engineering Lab", location: "Campus-3", note: "Pre Mid-Sem: B.Etc for odd, BEE for even. Post: Reversed" },
                "Workshop": { name: "Workshop Practice", location: "School of Mechanical Engineering, Campus-8" },
                "SY": { name: "Sports and Yoga", location: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13" },
                "Comm. Lab": { name: "Communication Lab", location: "Respective Classroom" },
                "E. Mech. Lab": { name: "Engineering Mechanics Lab", location: "Campus-3" }
            },

            electiveCourses: {
                "SST": "Society, Science and Technology",
                "CIE": "Creativity, Innovation and Entrepreneurship",
                "EM": "Essentials of Management",
                "FL": "Foreign Language",
                "FL-1": "German",
                "FL-2": "Japanese",
                "FL-3": "French",
                "CEP": "Community/Environment-based Group Project"
            },

            theoryClassLocations: ["Campus-3: C-7 to C-23", "Campus-3: D-1 to D-6", "Campus-3: E-105, E-205"],

            sections: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30"],

            sectionRooms: {
                "A1": "C7", "A2": "C8", "A3": "C9", "A4": "C10", "A5": "C12", "A6": "C13", "A7": "C14", "A8": "C15", "A9": "C16", "A10": "C18",
                "A11": "C19", "A12": "C20", "A13": "C21", "A14": "C23", "A15": "D1", "A16": "D2", "A17": "D3", "A18": "D4", "A19": "D5", "A20": "D6",
                "A21": "C19", "A22": "D5", "A23": "C21", "A24": "C23", "A25": "D1", "A26": "D2", "A27": "D3", "A28": "D4", "A29": "C20", "A30": "C16"
            },

            electiveSections: {
                // CEP - Community/Environment-based Group Project
                "CEP-1": { room: "E105", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CEP-2": { room: "E205", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CEP-3": { room: "E105", sessions: ["WEDNESDAY 8:00-10:00", "THURSDAY 8:00-10:00"] },

                // EM - Essentials of Management
                "EM-1": { room: "E105", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "EM-2": { room: "E205", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "EM-3": { room: "E105", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "EM-4": { room: "E205", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "EM-5": { room: "E105", sessions: ["WEDNESDAY 10:20-12:20", "THURSDAY 10:20-11:20"] },
                "EM-6": { room: "E205", sessions: ["WEDNESDAY 10:20-12:20", "THURSDAY 11:20-12:20"] },

                // CIE - Creativity, Innovation and Entrepreneurship
                "CIE-1": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CIE-2": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CIE-3": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CIE-4": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CIE-5": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "CIE-6": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CIE-7": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CIE-8": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CIE-9": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CIE-10": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "CIE-11": { room: "D6", sessions: ["WEDNESDAY 10:20-11:20", "WEDNESDAY 11:20-12:20"] },
                "CIE-12": { room: "D6", sessions: ["WEDNESDAY 10:20-11:20", "WEDNESDAY 11:20-12:20"] },
                "CIE-13": { room: "D6", sessions: ["WEDNESDAY 10:20-11:20", "WEDNESDAY 11:20-12:20"] },
                "CIE-14": { room: "D6", sessions: ["WEDNESDAY 10:20-11:20", "WEDNESDAY 11:20-12:20"] },
                "CIE-15": { room: "D6", sessions: ["WEDNESDAY 10:20-11:20", "WEDNESDAY 11:20-12:20"] },

                // FL - Foreign Language
                "FL-1": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"], language: "German" },
                "FL-2": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"], language: "Japanese" },
                "FL-3": { room: "D6", sessions: ["WEDNESDAY 8:00-10:00", "THURSDAY 10:20-11:20"], language: "French" },

                // SST - Society, Science and Technology
                "SST-1": { room: "D6", sessions: ["MONDAY 8:00-10:00", "TUESDAY 8:00-10:00"] },
                "SST-2": { room: "D6", sessions: ["MONDAY 10:20-12:20", "TUESDAY 10:20-12:20"] },
                "SST-3": { room: "D6", sessions: ["WEDNESDAY 10:20-12:20", "THURSDAY 10:20-11:20"] }
            },

            // Complete weekly timetable for all sections
            timetable: {
                MONDAY: [
                    {
                        section: "A1", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "C7", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A2", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C8", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "14:00-16:00", subject: "E. Mech. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem" }
                        ]
                    },
                    {
                        section: "A3", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "C9", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C9", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C9", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A4", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C10", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C10", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C10", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A5", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "C12", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A6", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C13", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C13", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C13", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A7", slots: [
                            { time: "9:00-10:00", subject: "BEE", room: "C14", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C14", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A8", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C15", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A9", slots: [
                            { time: "9:00-10:00", subject: "BEE", room: "C16", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C16", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A10", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C18", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "C18", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C18", type: "theory" }
                        ]
                    },
                    {
                        section: "A11", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A12", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C20", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C20", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A13", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "C21", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C21", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A14", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A15", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D1", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A16", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A17", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D3", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A18", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "D4", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A19", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D5", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A20", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "D6", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "D6", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D6", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A21", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A22", slots: [
                            { time: "9:00-10:00", subject: "BEE", room: "D5", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A23", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A25", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D1", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D1", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A26", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A27", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D3", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A28", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "D4", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A29", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C20", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM[11:20]", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A30", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "C16", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C16", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM[11:20]", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    }
                ],
                TUESDAY: [
                    {
                        section: "A1", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C7", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A2", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C8", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C8", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A3", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "C9", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C9", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C9", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A4", slots: [
                            { time: "9:00-10:00", subject: "ENG", room: "C10", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C10", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C10", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A5", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C12", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (odd section, post mid)" }
                        ]
                    },
                    {
                        section: "A6", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C13", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C13", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C13", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (even section, post mid)" }
                        ]
                    },
                    {
                        section: "A7", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C14", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A8", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C15", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C15", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A9", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C16", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C16", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A10", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C18", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "C18", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C18", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A11", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C19", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A12", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C20", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A13", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A14", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A15", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D1", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "D1", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (odd section, post mid)" }
                        ]
                    },
                    {
                        section: "A16", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D2", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "D2", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (even section, post mid)" }
                        ]
                    },
                    {
                        section: "A17", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "10:00-11:00", subject: "ENG", room: "D3", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A18", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "D4", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A19", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "D5", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A20", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "D6", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D6", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D6", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A21", slots: [
                            { time: "11:00-12:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A22", slots: [
                            { time: "11:00-12:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A23", slots: [
                            { time: "11:00-12:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A24", slots: [
                            { time: "11:00-12:00", subject: "ENG", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A25", slots: [
                            { time: "11:00-12:00", subject: "CHEM", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (odd section, post mid)" }
                        ]
                    },
                    {
                        section: "A26", slots: [
                            { time: "11:00-12:00", subject: "BEE", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (even section, post mid)" }
                        ]
                    },
                    {
                        section: "A27", slots: [
                            { time: "11:00-12:00", subject: "BETc", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A28", slots: [
                            { time: "11:00-12:00", subject: "BEE", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A29", slots: [
                            { time: "11:00-12:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A30", slots: [
                            { time: "11:00-12:00", subject: "CHEM", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    }
                ],
                WEDNESDAY: [
                    {
                        section: "A1", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "BETc", room: "C7", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "C7", type: "theory" },
                            { time: "11:20-12:20", subject: "E.MECH", room: "C7", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A2", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "ENG", room: "C8", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C8", type: "theory" },
                            { time: "11:20-12:20", subject: "BETc", room: "C8", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A3", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "E.MECH", room: "C9", type: "theory" },
                            { time: "10:20-11:20", subject: "BETc", room: "C9", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C9", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" }
                        ]
                    },
                    {
                        section: "A4", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "C10", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "C10", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C10", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" }
                        ]
                    },
                    {
                        section: "A5", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C12", type: "theory" },
                            { time: "11:20-12:20", subject: "BETc", room: "C12", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A6", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "BETc", room: "C13", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "C13", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "C13", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A7", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C14", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A8", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C15", type: "theory" },
                            { time: "11:20-12:20", subject: "BETc", room: "C15", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A9", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" },
                            { time: "9:00-10:00", subject: "E.MECH", room: "C16", type: "theory" },
                            { time: "10:20-11:20", subject: "BEE", room: "C16", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A10", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" },
                            { time: "9:00-10:00", subject: "T&NM", room: "C18", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "C18", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C18", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A11", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A12", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "BETc", room: "C20", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A13", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" }
                        ]
                    },
                    {
                        section: "A14", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "ENG", room: "C23", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C23", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" }
                        ]
                    },
                    {
                        section: "A15", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "D1", type: "theory" },
                            { time: "10:20-11:20", subject: "BETc", room: "D1", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A16", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "ENG", room: "D2", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "D2", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A17", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "BEE", room: "D3", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A18", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "BETc", room: "D4", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "D4", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A19", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" },
                            { time: "9:00-10:00", subject: "CHEM", room: "D5", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A20", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" },
                            { time: "9:00-10:00", subject: "T&NM", room: "D6", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "D6", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D6", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A21", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "C19", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A22", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "D5", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A23", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "C21", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" }
                        ]
                    },
                    {
                        section: "A24", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C23", type: "theory" },
                            { time: "10:20-11:20", subject: "BEE", room: "C23", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" }
                        ]
                    },
                    {
                        section: "A25", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "D1", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "D1", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A26", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "9:00-10:00", subject: "BEE", room: "D2", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM", room: "D2", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A27", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "T&NM", room: "D3", type: "theory" },
                            { time: "10:20-11:20", subject: "ENG", room: "D3", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A28", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "9:00-10:00", subject: "CHEM", room: "D4", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A29", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-A, Campus-3", type: "lab", note: "B.Etc Lab (odd, pre mid)" },
                            { time: "9:00-10:00", subject: "BETc", room: "C20", type: "theory" },
                            { time: "10:20-11:20", subject: "T&NM[10:10]", room: "C20", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A30", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Block-E, Campus-3", type: "lab", note: "BEE Lab (even, pre mid)" },
                            { time: "9:00-10:00", subject: "CHEM", room: "C16", type: "theory" },
                            { time: "10:20-11:20", subject: "CHEM[10:20]", room: "C16", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG[11:20]", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    }
                ],
                THURSDAY: [
                    {
                        section: "A1", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "CHEM", room: "C7", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C7", type: "theory" }
                        ]
                    },
                    {
                        section: "A2", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C8", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "C8", type: "theory" }
                        ]
                    },
                    {
                        section: "A3", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C9", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "C9", type: "theory" }
                        ]
                    },
                    {
                        section: "A4", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C10", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C10", type: "theory" }
                        ]
                    },
                    {
                        section: "A5", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "BEE", room: "C12", type: "theory" },
                            { time: "11:20-12:20", subject: "BETc", room: "C12", type: "theory" }
                        ]
                    },
                    {
                        section: "A6", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C13", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C13", type: "theory" }
                        ]
                    },
                    {
                        section: "A7", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C14", type: "theory" },
                            { time: "11:20-12:20", subject: "CHEM", room: "C14", type: "theory" }
                        ]
                    },
                    {
                        section: "A8", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C15", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "C15", type: "theory" }
                        ]
                    },
                    {
                        section: "A9", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: B.Etc Lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C16", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C16", type: "theory" }
                        ]
                    },
                    {
                        section: "A10", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: BEE Lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C18", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C18", type: "theory", note: "[10:10]" }
                        ]
                    },
                    {
                        section: "A11", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C19", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C19", type: "theory" }
                        ]
                    },
                    {
                        section: "A12", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C20", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C20", type: "theory" }
                        ]
                    },
                    {
                        section: "A13", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C21", type: "theory" },
                            { time: "11:20-12:20", subject: "ENG", room: "C21", type: "theory" }
                        ]
                    },
                    {
                        section: "A14", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C23", type: "theory" },
                            { time: "11:20-12:20", subject: "BEE", room: "C23", type: "theory" }
                        ]
                    },
                    {
                        section: "A15", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "D1", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D1", type: "theory" }
                        ]
                    },
                    {
                        section: "A16", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "BEE", room: "D2", type: "theory" },
                            { time: "11:20-12:20", subject: "E.MECH", room: "D2", type: "theory" }
                        ]
                    },
                    {
                        section: "A17", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "D3", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D3", type: "theory" }
                        ]
                    },
                    {
                        section: "A18", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "D4", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D4", type: "theory" }
                        ]
                    },
                    {
                        section: "A19", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: B.Etc Lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "D5", type: "theory" },
                            { time: "11:20-12:20", subject: "E.MECH", room: "D5", type: "theory" }
                        ]
                    },
                    {
                        section: "A20", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: BEE Lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "D6", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D6", type: "theory" }
                        ]
                    },
                    {
                        section: "A21", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "BEE", room: "C19", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C19", type: "theory" }
                        ]
                    },
                    {
                        section: "A22", slots: [
                            { time: "8:00-10:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" },
                            { time: "10:20-11:20", subject: "CHEM", room: "D5", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D5", type: "theory" }
                        ]
                    },
                    {
                        section: "A23", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "BEE", room: "C21", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C21", type: "theory" }
                        ]
                    },
                    {
                        section: "A24", slots: [
                            { time: "8:00-10:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C23", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C23", type: "theory" }
                        ]
                    },
                    {
                        section: "A25", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "D1", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D1", type: "theory" }
                        ]
                    },
                    {
                        section: "A26", slots: [
                            { time: "8:00-10:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" },
                            { time: "10:20-11:20", subject: "CHEM", room: "D2", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D2", type: "theory" }
                        ]
                    },
                    {
                        section: "A27", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "BEE", room: "D3", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D3", type: "theory" }
                        ]
                    },
                    {
                        section: "A28", slots: [
                            { time: "8:00-10:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "D4", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "D4", type: "theory" }
                        ]
                    },
                    {
                        section: "A29", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: B.Etc Lab" },
                            { time: "10:20-11:20", subject: "BETc", room: "C20", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C20", type: "theory", note: "[10:10]" }
                        ]
                    },
                    {
                        section: "A30", slots: [
                            { time: "8:00-10:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: BEE Lab" },
                            { time: "10:20-11:20", subject: "ENG", room: "C16", type: "theory" },
                            { time: "11:20-12:20", subject: "T&NM", room: "C16", type: "theory", note: "[10.10]" }
                        ]
                    }
                ],
                FRIDAY: [
                    {
                        section: "A1", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C7", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C7", type: "theory" },
                            { time: "14:00-16:00", subject: "E. Mech. Lab", room: "Campus-3", type: "lab", note: "Post Mid-Sem" }
                        ]
                    },
                    {
                        section: "A2", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C8", type: "theory" },
                            { time: "14:00-16:00", subject: "E. Mech. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem" }
                        ]
                    },
                    {
                        section: "A3", slots: [
                            { time: "9:00-10:00", subject: "E.MECH", room: "C9", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C9", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM[11.20]", room: "C9", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A4", slots: [
                            { time: "9:00-10:00", subject: "E.MECH", room: "C10", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C10", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C10", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A5", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C12", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C12", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C12", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A6", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C13", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C13", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C13", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A7", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C14", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "C14", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C14", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A8", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "11:00-12:00", subject: "T&NM", room: "C15", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A9", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C16", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "C16", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C16", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A10", slots: [
                            { time: "9:00-10:00", subject: "CHEM", room: "C18", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C18", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C18", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A11", slots: [
                            { time: "9:00-10:00", subject: "BEE", room: "C19", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C19", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: B.Etc Lab for odd" }
                        ]
                    },
                    {
                        section: "A12", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: BEE Lab for even" }
                        ]
                    },
                    {
                        section: "A13", slots: [
                            { time: "9:00-10:00", subject: "BETc", room: "C21", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A14", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A15", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D1", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A16", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D2", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D2", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A17", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D3", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D3", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A18", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "D4", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A19", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A20", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D6", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D6", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D6", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A21", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C19", type: "theory" },
                            { time: "10:00-11:00", subject: "CHEM", room: "C19", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C19", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: B.Etc Lab for odd" }
                        ]
                    },
                    {
                        section: "A22", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D5", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "D5", type: "theory" },
                            { time: "14:00-16:00", subject: "Engg. Lab", room: "Campus-3", type: "lab", note: "Pre Mid-Sem: BEE Lab for even" }
                        ]
                    },
                    {
                        section: "A23", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C21", type: "theory" },
                            { time: "11:00-12:00", subject: "CHEM", room: "C21", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A24", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C23", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "C23", type: "theory" },
                            { time: "14:00-16:00", subject: "Workshop", room: "School of Mechanical Engineering, Campus-8", type: "lab" }
                        ]
                    },
                    {
                        section: "A25", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D1", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "D1", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D1", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A26", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D2", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D2", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D2", type: "theory" },
                            { time: "14:00-16:00", subject: "Comm. Lab", room: "Respective Classroom", type: "lab" }
                        ]
                    },
                    {
                        section: "A27", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D3", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "D3", type: "theory" },
                            { time: "11:00-12:00", subject: "ENG", room: "D3", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A28", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D4", type: "theory" },
                            { time: "10:00-11:00", subject: "BEE", room: "D4", type: "theory" },
                            { time: "11:00-12:00", subject: "BEE", room: "D4", type: "theory" },
                            { time: "14:00-16:00", subject: "SY", room: "Biju Pattnaik Multipurpose Indoor Stadium, Campus-13", type: "lab" }
                        ]
                    },
                    {
                        section: "A29", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "10:00-11:00", subject: "T&NM", room: "C20", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "C20", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    },
                    {
                        section: "A30", slots: [
                            { time: "9:00-10:00", subject: "T&NM", room: "D6", type: "theory" },
                            { time: "10:00-11:00", subject: "BETc", room: "D6", type: "theory" },
                            { time: "11:00-12:00", subject: "BETc", room: "D6", type: "theory" },
                            { time: "14:00-16:00", subject: "Chem. Lab", room: "Lab complex, School of Applied Sciences, Campus-3", type: "lab" }
                        ]
                    }
                ]
            }

        }
    ,


    // ==================== SCHEME B ====================
    schemeB: {
        name: "Scheme B",

        courseFullNames: {
            "T&NM": "Transform & Numerical Methods",
            "PHY": "Physics",
            "EVS": "Environmental Science",
            "ScLS": "Science of Living Systems"
        },

        labs: {
            "Phy. Lab": { name: "Physics Lab", location: "Lab complex, School of Applied Sciences, Campus-3" },
            "ED & Graphics": { name: "Engineering Drawing & Graphics", location: "Drawing Hall, Campus-3, Block-C" },
            "PL(T) & Programming Lab": { name: "Tutorial & Programming Lab", location: "Campus-15A: LAB-101,102 | Campus-15B: WL-101,102,103,104" }
        },

        electiveCourses: {
            "Nano": "Nano science",
            "SM": "Smart Materials",
            "MD": "Molecular Diagnostics",
            "SPH": "Science of Public Health",
            "OT": "Optimization Techniques",
            "IQT": "Introduction to Quantum Technology",
            "BCE": "Basic Civil Engineering",
            "BME": "Basic Mechanical Engineering",
            "BioM": "Biomedical Engineering",
            "BI": "Basic Instrumentation",
            "EML": "Elements of Machine learning"
        },

        theoryClassLocations: [
            "Campus-17: Rooms 401-407, 501-503",
            "Campus-15A: LT-201 to LT-203",
            "Campus-15B: B201-B206, B301-B306, B401-B406"
        ],

        sections: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18", "B19", "B20", "B21", "B22", "B23", "B24", "B25", "B26", "B27", "B28", "B29", "B30", "B31"],

        sectionRooms: {
            "B1": "B-201", "B2": "B-202", "B3": "B-203", "B4": "B-204", "B5": "B-205", "B6": "B-206",
            "B7": "B-301", "B8": "B-302", "B9": "B-303", "B10": "B-304",
            "B11": "B-305", "B12": "B-306", "B13": "B-401", "B14": "B-402", "B15": "B-403",
            "B16": "B-404", "B17": "B-405", "B18": "B-406", "B19": "LT-201", "B20": "LT-202",
            "B21": "LT-203", "B22": "401", "B23": "402", "B24": "403", "B25": "404",
            "B26": "405", "B27": "406", "B28": "407", "B29": "501", "B30": "502", "B31": "503"
        },

        importantNote: "For Sections B1 to B10: Theory classes after Phy Lab and ED & Graphics Lab start from 10:20am instead of 10am",

        electiveSections: {
            "BCE-1": { room: "401", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BCE-2": { room: "402", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BCE-3": { room: "403", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BME-1": { room: "404", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BME-2": { room: "405", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BI-1": { room: "406", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BI-2": { room: "407", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BioM-1": { room: "501", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BioM-2": { room: "502", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BioM-3": { room: "503", sessions: ["MONDAY 9:00-10:00", "WEDNESDAY 9:00-10:00"] },
            "BCE-4": { room: "401", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BCE-5": { room: "402", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BCE-6": { room: "403", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BME-3": { room: "404", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BME-4": { room: "405", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BI-3": { room: "406", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BI-4": { room: "407", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BioM-4": { room: "501", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BioM-5": { room: "502", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "BioM-6": { room: "503", sessions: ["TUESDAY 9:00-10:00", "THURSDAY 9:00-10:00"] },
            "SPH-1": { room: "401", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "SPH-2": { room: "402", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "OT-1": { room: "403", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "OT-2": { room: "404", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "Nano-1": { room: "405", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "Nano-2": { room: "406", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "IQT-1": { room: "407", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "MD-1": { room: "501", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "SM-1": { room: "502", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "SM-2": { room: "503", sessions: ["WEDNESDAY 9:00-10:00", "FRIDAY 9:00-10:00"] },
            "SPH-3": { room: "401", sessions: ["THURSDAY 9:00-10:00"] },
            "SPH-4": { room: "402", sessions: ["THURSDAY 9:00-10:00"] },
            "OT-3": { room: "403", sessions: ["THURSDAY 9:00-10:00"] },
            "OT-4": { room: "404", sessions: ["THURSDAY 9:00-10:00"] },
            "Nano-3": { room: "405", sessions: ["THURSDAY 9:00-10:00"] },
            "Nano-4": { room: "406", sessions: ["THURSDAY 9:00-10:00"] },
            "IQT-2": { room: "407", sessions: ["THURSDAY 9:00-10:00"] },
            "MD-2": { room: "501", sessions: ["THURSDAY 9:00-10:00"] },
            "SM-3": { room: "502", sessions: ["THURSDAY 9:00-10:00"] },
            "SM-4": { room: "503", sessions: ["THURSDAY 9:00-10:00"] },
            "BCE-7": { room: "401", sessions: ["FRIDAY 9:00-10:00"] },
            "BCE-8": { room: "402", sessions: ["FRIDAY 9:00-10:00"] },
            "BCE-9": { room: "403", sessions: ["FRIDAY 9:00-10:00"] },
            "BME-5": { room: "404", sessions: ["FRIDAY 9:00-10:00"] },
            "BME-6": { room: "405", sessions: ["FRIDAY 9:00-10:00"] },
            "BI-5": { room: "406", sessions: ["FRIDAY 9:00-10:00"] },
            "BI-6": { room: "407", sessions: ["FRIDAY 9:00-10:00"] },
            "BioM-7": { room: "501", sessions: ["FRIDAY 9:00-10:00"] },
            "BioM-8": { room: "502", sessions: ["FRIDAY 9:00-10:00"] },
            "BioM-9": { room: "503", sessions: ["FRIDAY 9:00-10:00"] },
            "BME-7": { room: "401", sessions: ["FRIDAY 9:00-10:00"] },
            "SPH-5": { room: "402", sessions: ["FRIDAY 9:00-10:00"] },
            "SPH-6": { room: "403", sessions: ["FRIDAY 9:00-10:00"] },
            "OT-5": { room: "404", sessions: ["FRIDAY 9:00-10:00"] },
            "OT-6": { room: "405", sessions: ["FRIDAY 9:00-10:00"] },
            "Nano-5": { room: "406", sessions: ["FRIDAY 9:00-10:00"] },
            "Nano-6": { room: "407", sessions: ["FRIDAY 9:00-10:00"] },
            "IQT-3": { room: "501", sessions: ["FRIDAY 9:00-10:00"] },
            "MD-3": { room: "502", sessions: ["FRIDAY 9:00-10:00"] },
            "SM-5": { room: "503", sessions: ["FRIDAY 9:00-10:00"] },
            "SM-6": { room: "401", sessions: ["FRIDAY 9:00-10:00"] },
            "SM-7": { room: "402", sessions: ["FRIDAY 9:00-10:00"] }
        },

        timetable: {
            MONDAY: [
                {
                    section: "B1", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "C15-A-LAB-101", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-201", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-201", type: "theory" }
                    ]
                },
                {
                    section: "B2", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "C15-A-LAB-102", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-202", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-202", type: "theory" }
                    ]
                },
                {
                    section: "B3", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "C15-B-WL-101", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-203", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-203", type: "theory" }
                    ]
                },
                {
                    section: "B4", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "C15-B-WL-102", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-204", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-204", type: "theory" }
                    ]
                },
                {
                    section: "B5", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "C15-B-WL-103", type: "theory" },
                        { time: "10:00-11:00", subject: "Phy Lab", room: "C15-B-WL-103", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-205", type: "theory" },
                        { time: "12:30-13:30", subject: "PHY", room: "B-205", type: "theory" }
                    ]
                },
                {
                    section: "B6", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "C15-B-WL-104", type: "theory" },
                        { time: "10:00-11:00", subject: "Phy Lab", room: "C15-B-WL-104", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-206", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-206", type: "theory" }
                    ]
                },
                {
                    section: "B7", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "C15-A-LAB-101", type: "theory" },
                        { time: "10:00-11:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-301", type: "theory" },
                        { time: "12:30-13:30", subject: "T&NM", room: "B-301", type: "theory" }
                    ]
                },
                {
                    section: "B8", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "C15-A-LAB-102", type: "theory" },
                        { time: "10:00-11:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-302", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-302", type: "theory" }
                    ]
                },
                {
                    section: "B9", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "C15-B-WL-101", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-303", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-303", type: "theory" }
                    ]
                },
                {
                    section: "B10", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "C15-B-WL-102", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-304", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-304", type: "theory" }
                    ]
                },
                {
                    section: "B11", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-305", type: "lab" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-305", type: "theory" },
                        { time: "12:30-13:30", subject: "T&NM", room: "B-305", type: "theory" }
                    ]
                },
                {
                    section: "B12", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-306", type: "lab" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-306", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-306", type: "theory" }
                    ]
                },
                {
                    section: "B13", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-401", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-401", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-401", type: "theory" },
                        { time: "12:30-13:30", subject: "PHY", room: "B-401", type: "theory" }
                    ]
                },
                {
                    section: "B14", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-402", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-402", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "12:30-13:30", subject: "EVS", room: "B-402", type: "theory" }
                    ]
                },
                {
                    section: "B15", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-403", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-403", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-403", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-403", type: "theory" }
                    ]
                },
                {
                    section: "B16", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-404", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-404", type: "lab" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "12:30-13:30", subject: "ScLS", room: "B-404", type: "theory" }
                    ]
                },
                {
                    section: "B17", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-405", type: "theory" },
                        { time: "10:00-11:00", subject: "PL(T) & Programming Lab", room: "B-405", type: "lab" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-405", type: "theory" },
                        { time: "12:30-13:30", subject: "PHY", room: "B-405", type: "theory" }
                    ]
                },
            ],
            TUESDAY: [
                {
                    section: "B1", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-201", type: " theory" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-201", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-201", type: " theory" },
                        { time: "12:30-1:30", subject: "SPH", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B2", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-202", type: " theory" },
                        { time: "10:00-11:00", subject: "PHY", room: "B-202", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-202", type: " theory" },
                        { time: "12:30-1:30", subject: "SPH", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B3", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "C15-A-LAB-101", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-203", type: " theory" },
                        { time: "12:30-1:30", subject: "OT", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B4", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "C15-A-LAB-101", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-204", type: " theory" },
                        { time: "12:30-1:30", subject: "OT", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B5", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "C15-B-WL-103", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-205", type: " theory" },
                        { time: "12:30-1:30", subject: "Nano", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B6", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "C15-B-WL-101", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-206", type: " theory" },
                        { time: "12:30-1:30", subject: "Nano", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B7", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "C15-A-LAB-102", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "C15-A-LAB-102", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-301", type: " theory" },
                        { time: "12:30-1:30", subject: "IQT", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B8", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "C15-B-WL-102", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "C15-B-WL-102", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-302", type: " theory" },
                        { time: "12:30-1:30", subject: "MD", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B9", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "C15-B-WL-103", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "C15-B-WL-103", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-303", type: " theory" },
                        { time: "12:30-1:30", subject: "SM", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B10", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "C15-A-LAB-101", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-304", type: " theory" },
                        { time: "12:30-1:30", subject: "SM", room: "Campus-17", type: " theory" }
                    ]
                },
                {
                    section: "B11", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "SPH", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-305", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B12", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "SPH", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-306", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-306", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B13", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "OT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-401", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-401", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" }
                    ]
                },
                {
                    section: "B14", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "EV S", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "OT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-402", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-402", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B15", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "Nano", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-403", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B16", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "Nano", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-404", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-404", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B17", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "IQT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-405", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-405", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B18", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "MD", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-406", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-406", type: " theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B19", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "SM", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "LT-201", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "LT-201", type: " theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B20", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "SM", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-202", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-202", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                },
                {
                    section: "B21", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "9:00-10:00", subject: "BCE", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-305", type: " theory" },
                        { time: "3:00-4:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B22", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-306", type: " theory" },
                        { time: "9:00-10:00", subject: "BCE", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-306", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-306", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B23", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-401", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-401", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-401", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B24", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-402", type: " theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-402", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-402", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B25", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-403", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B26", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-404", type: " theory" },
                        { time: "9:00-10:00", subject: "BI", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-404", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-404", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B27", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-405", type: " theory" },
                        { time: "9:00-10:00", subject: "BI", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-405", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-405", type: " theory" },
                        { time: "3:00-4:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B28", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-406", type: " theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-406", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-406", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" }
                    ]
                },
                {
                    section: "B29", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "LT-201", type: " theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "LT-201", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-201", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B30", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "LT-202", type: " theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-202", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-202", type: " theory" },
                        { time: "3:00-4:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B31", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "LT-203", type: " theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "LT-203", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-203", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
            ],

            WEDNESDAY: [
                {
                    section: "B1", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-201", type: " theory" },
                        { time: "12:30-1:30", subject: "BCE", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B2", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-202", type: " theory" },
                        { time: "12:30-1:30", subject: "BCE", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B3", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-203", type: " theory" },
                        { time: "12:30-1:30", subject: "BCE", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B4", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-204", type: " theory" },
                        { time: "12:30-1:30", subject: "BME", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B5", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "C15-A-LAB-101", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-205", type: " theory" },
                        { time: "12:30-1:30", subject: "BME", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B6", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "C15-B-WL-101", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-206", type: " theory" },
                        { time: "12:30-1:30", subject: "BI", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B7", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "C15-B-WL-104", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-301", type: " theory" },
                        { time: "12:30-1:30", subject: "BI", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B8", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "C15-A-LAB-102", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-302", type: " theory" },
                        { time: "12:30-1:30", subject: "BioM", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B9", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-303", type: " theory" },
                        { time: "12:30-1:30", subject: "BioM", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B10", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-304", type: " theory" },
                        { time: "12:30-1:30", subject: "BioM", room: "CAMPUS-3", type: " theory" }
                    ]
                },
                {
                    section: "B11", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BCE", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-305", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B12", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BCE", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-306", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-306", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B13", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BCE", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-401", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-401", type: " theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B14", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BME", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-402", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-402", type: " theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B15", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BME", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-403", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" }
                    ]
                },
                {
                    section: "B16", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BI", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-404", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-404", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B17", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BI", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-405", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-405", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B18", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-406", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-406", type: " theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B19", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-201", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-201", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B20", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "", type: " theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "", type: " theory" },
                        { time: "10:00-11:00", subject: "BioM", room: "CAMPUS-3", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-202", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-202", type: " theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B21", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "9:00-10:00", subject: "SPH", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-305", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-305", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B22", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-306", type: " theory" },
                        { time: "9:00-10:00", subject: "SPH", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-306", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-306", type: " theory" },
                        { time: "3:00-4:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B23", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-401", type: " theory" },
                        { time: "9:00-10:00", subject: "OT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-401", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-401", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B24", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-402", type: " theory" },
                        { time: "9:00-10:00", subject: "OT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-402", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-402", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B25", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "9:00-10:00", subject: "Nano", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-403", type: " theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-403", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                },
                {
                    section: "B26", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-404", type: " theory" },
                        { time: "9:00-10:00", subject: "Nano", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-404", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-404", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B27", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-405", type: " theory" },
                        { time: "9:00-10:00", subject: "IQT", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-405", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-405", type: " theory" },
                        { time: "3:00-4:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B28", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-406", type: " theory" },
                        { time: "9:00-10:00", subject: "MD", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-406", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-406", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" }
                    ]
                },
                {
                    section: "B29", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "LT-201", type: " theory" },
                        { time: "9:00-10:00", subject: "SM", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "LT-201", type: " theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-201", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B30", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "LT-202", type: " theory" },
                        { time: "9:00-10:00", subject: "SM", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-202", type: " theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "LT-202", type: " theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B31", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "LT-203", type: " theory" },
                        { time: "9:00-10:00", subject: "SM", room: "Campus-17", type: " theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-203", type: " theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-203", type: " theory" },
                        { time: "3:00-4:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
            ],

            THURSDAY: [
                {
                    section: "B1", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-201", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-201", type: "theory" },
                        { time: "12:30-1:30", subject: "SPH-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B2", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "B-202", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-202", type: "theory" },
                        { time: "12:30-1:30", subject: "SPH-2", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B3", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-203", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-203", type: "theory" },
                        { time: "12:30-1:30", subject: "OT-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B4", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-204", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-204", type: "theory" },
                        { time: "12:30-1:30", subject: "OT-2", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B5", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "B-205", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-205", type: "theory" },
                        { time: "12:30-1:30", subject: "Nano-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B6", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-206", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-206", type: "theory" },
                        { time: "12:30-1:30", subject: "Nano-2", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B7", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "B-301", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-301", type: "theory" },
                        { time: "12:30-1:30", subject: "IQT-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B8", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "B-302", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-302", type: "theory" },
                        { time: "12:30-1:30", subject: "MD-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B9", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-303", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-303", type: "theory" },
                        { time: "12:30-1:30", subject: "SM-1", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B10", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-304", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-304", type: "theory" },
                        { time: "12:30-1:30", subject: "SM-2", room: "CAMPUS-3 (401-503)", type: "theory" }
                    ]
                },
                {
                    section: "B11", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SPH-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-305", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B12", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-306", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SPH-4", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-306", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                },
                {
                    section: "B13", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-401", type: "theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "OT-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-401", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-401", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B14", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-402", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "OT-4", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-402", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B15", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-403", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "Nano-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-403", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-403", type: "theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B16", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "Nano-4", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-404", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B17", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-405", type: "theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "IQT-2", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-405", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-405", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B18", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-406", type: "theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "MD-2", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-406", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-406", type: "theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B19", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "LT-201", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SM-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "LT-201", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-201", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B20", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "LT-202", type: "theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SM-4", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-202", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "LT-202", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-104", type: "lab" }
                    ]
                },
                {
                    section: "B21", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "9:00-10:00", subject: "BCE-7", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-305", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-305", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B22", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-306", type: "theory" },
                        { time: "9:00-10:00", subject: "BCE-8", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-306", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B23", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-401", type: "theory" },
                        { time: "9:00-10:00", subject: "BCE-9", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-401", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-401", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B24", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "9:00-10:00", subject: "BME-5", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-402", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-402", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B25", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-403", type: "theory" },
                        { time: "9:00-10:00", subject: "BME-6", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-403", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-403", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B26", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-404", type: "theory" },
                        { time: "9:00-10:00", subject: "BI-5", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-404", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B27", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-405", type: "theory" },
                        { time: "9:00-10:00", subject: "BI-6", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-405", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-405", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B28", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-406", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM-7", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-406", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-406", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B29", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "LT-201", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM-8", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-201", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-201", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B30", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "LT-202", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM-9", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "LT-202", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "LT-202", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B31", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "LT-203", type: "theory" },
                        { time: "9:00-10:00", subject: "BME-7", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-203", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "LT-203", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                }
            ],

            FRIDAY: [
                {
                    section: "B1", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "B-201", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-201", type: "theory" },
                        { time: "12:30-1:30", subject: "ScLS", room: "B-201", type: "theory" }
                    ]
                },
                {
                    section: "B2", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "B-202", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-202", type: "theory" },
                        { time: "12:30-1:30", subject: "T&NM", room: "B-202", type: "theory" }
                    ]
                },
                {
                    section: "B3", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" },
                        { time: "10:00-11:00", subject: "PHY", room: "B-203", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-203", type: "theory" },
                        { time: "12:30-1:30", subject: "EVS", room: "B-203", type: "theory" }
                    ]
                },
                {
                    section: "B4", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-204", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-204", type: "theory" },
                        { time: "12:30-1:30", subject: "T&NM", room: "B-204", type: "theory" }
                    ]
                },
                {
                    section: "B5", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-205", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-205", type: "theory" },
                        { time: "12:30-1:30", subject: "ScLS", room: "B-205", type: "theory" }
                    ]
                },
                {
                    section: "B6", slots: [
                        { time: "8:00-9:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "B-206", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-206", type: "theory" },
                        { time: "12:30-1:30", subject: "PHY", room: "B-206", type: "theory" }
                    ]
                },
                {
                    section: "B7", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" },
                        { time: "10:00-11:00", subject: "ScLS", room: "B-301", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-301", type: "theory" },
                        { time: "12:30-1:30", subject: "PHY", room: "B-301", type: "theory" }
                    ]
                },
                {
                    section: "B8", slots: [
                        { time: "8:00-9:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" },
                        { time: "10:00-11:00", subject: "T&NM", room: "B-302", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-302", type: "theory" },
                        { time: "12:30-1:30", subject: "EVS", room: "B-302", type: "theory" }
                    ]
                },
                {
                    section: "B9", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-303", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-303", type: "theory" },
                        { time: "12:30-1:30", subject: "PHY", room: "B-303", type: "theory" }
                    ]
                },
                {
                    section: "B10", slots: [
                        { time: "8:00-9:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" },
                        { time: "10:00-11:00", subject: "EVS", room: "B-304", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-304", type: "theory" },
                        { time: "12:30-1:30", subject: "T&NM", room: "B-304", type: "theory" }
                    ]
                },
                {
                    section: "B11", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-305", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SPH-5", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-305", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B12", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SPH-6", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-306", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B13", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-401", type: "theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "OT-5", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-401", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-401", type: "theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B14", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "OT-6", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-402", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B15", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-403", type: "theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "Nano-5", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-403", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-403", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B16", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "9:00-10:00", subject: "ScLS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "Nano-6", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-404", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-404", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B17", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-405", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "IQT-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-405", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-405", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                },
                {
                    section: "B18", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-406", type: "theory" },
                        { time: "9:00-10:00", subject: "PHY", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "MD-3", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-406", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-406", type: "theory" },
                        { time: "1:20-2:20", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B19", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "LT-201", type: "theory" },
                        { time: "9:00-10:00", subject: "EVS", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SM-5", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "LT-201", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-201", type: "theory" },
                        { time: "1:20-2:20", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B20", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "LT-202", type: "theory" },
                        { time: "9:00-10:00", subject: "T&NM", room: "401-503", type: "theory" },
                        { time: "10:00-11:00", subject: "SM-6", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-202", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "LT-202", type: "theory" },
                        { time: "1:20-2:20", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B21", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "9:00-10:00", subject: "SM-7", room: "CAMPUS-3 (401-503)", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-305", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-305", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B22", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-306", type: "theory" },
                        { time: "9:00-10:00", subject: "BCE", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-306", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-306", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-101", type: "lab" }
                    ]
                },
                {
                    section: "B23", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-401", type: "theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-401", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-401", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B24", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "9:00-10:00", subject: "BI", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-402", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-402", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B25", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "B-403", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "B-403", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "B-403", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-101", type: "lab" }
                    ]
                },
                {
                    section: "B26", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "B-404", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "B-404", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "B-404", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B27", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "B-405", type: "theory" },
                        { time: "9:00-10:00", subject: "BioM", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "B-405", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "B-405", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-102", type: "lab" }
                    ]
                },
                {
                    section: "B28", slots: [
                        { time: "8:00-9:00", subject: "EVS", room: "B-406", type: "theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "EVS", room: "B-406", type: "theory" },
                        { time: "12:20-1:20", subject: "ScLS", room: "B-406", type: "theory" },
                        { time: "3:00-5:00", subject: "ED & Graphics", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B29", slots: [
                        { time: "8:00-9:00", subject: "PHY", room: "LT-201", type: "theory" },
                        { time: "9:00-10:00", subject: "BCE", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "PHY", room: "LT-201", type: "theory" },
                        { time: "12:20-1:20", subject: "T&NM", room: "LT-201", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-A-LAB-102", type: "lab" }
                    ]
                },
                {
                    section: "B30", slots: [
                        { time: "8:00-9:00", subject: "T&NM", room: "LT-202", type: "theory" },
                        { time: "9:00-10:00", subject: "BME", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "T&NM", room: "LT-202", type: "theory" },
                        { time: "12:20-1:20", subject: "EVS", room: "LT-202", type: "theory" },
                        { time: "3:00-5:00", subject: "Phy Lab", room: "CAMPUS-3", type: "lab" }
                    ]
                },
                {
                    section: "B31", slots: [
                        { time: "8:00-9:00", subject: "ScLS", room: "LT-203", type: "theory" },
                        { time: "9:00-10:00", subject: "BI", room: "CAMPUS-3", type: "theory" },
                        { time: "11:20-12:20", subject: "ScLS", room: "LT-203", type: "theory" },
                        { time: "12:20-1:20", subject: "PHY", room: "LT-203", type: "theory" },
                        { time: "3:00-5:00", subject: "PL(T) & Programming Lab", room: "C15-B-WL-103", type: "lab" }
                    ]
                }
            ]
        }
    }
}
}
// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KIIT_TIMETABLE_DATA;
}

// Helper functions for accessing data
const TimetableHelper = {
    // Get timetable for specific section
    getSectionTimetable: (scheme, section) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
        const result = {};

        days.forEach(day => {
            const daySchedule = KIIT_TIMETABLE_DATA.schemes[schemeKey].timetable[day];
            const sectionData = daySchedule.find(s => s.section === section);
            if (sectionData) {
                result[day] = sectionData.slots;
            }
        });

        return result;
    },

    // Get all sections for a scheme
    getSections: (scheme) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        return KIIT_TIMETABLE_DATA.schemes[schemeKey].sections;
    },

    // Get room for a section
    getRoom: (scheme, section) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        return KIIT_TIMETABLE_DATA.schemes[schemeKey].sectionRooms[section];
    },

    // Get course full name
    getCourseName: (scheme, courseCode) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        return KIIT_TIMETABLE_DATA.schemes[schemeKey].courseFullNames[courseCode] || courseCode;
    },

    // Get lab information
    getLabInfo: (scheme, labName) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        return KIIT_TIMETABLE_DATA.schemes[schemeKey].labs[labName];
    },

    // Get classes for specific day
    getDaySchedule: (scheme, section, day) => {
        const schemeKey = scheme === 'A' ? 'schemeA' : 'schemeB';
        const daySchedule = KIIT_TIMETABLE_DATA.schemes[schemeKey].timetable[day];
        const sectionData = daySchedule.find(s => s.section === section);
        return sectionData ? sectionData.slots : [];
    }
};

export default KIIT_TIMETABLE_DATA;
