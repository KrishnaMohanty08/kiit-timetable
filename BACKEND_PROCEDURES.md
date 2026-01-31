# Backend Procedures - KIIT Timetable

## Overview

While KIIT Timetable is primarily a frontend application, the "backend" consists of data processing utilities that handle Excel file parsing and data transformation. This document outlines all backend-related procedures.

## Table of Contents
1. [Data Processing Pipeline](#data-processing-pipeline)
2. [Excel File Parsing](#excel-file-parsing)
3. [Data Transformation](#data-transformation)
4. [Caching Mechanism](#caching-mechanism)
5. [Data Query Procedures](#data-query-procedures)
6. [Error Handling](#error-handling)
7. [Data Update Procedures](#data-update-procedures)

---

## Data Processing Pipeline

### Overview
The backend processing occurs entirely in the browser through JavaScript utilities that parse Excel files and transform them into usable data structures.

### Pipeline Flow

```
┌──────────────────────────────────────────────────────────┐
│                 Data Processing Pipeline                  │
└──────────────────────────────────────────────────────────┘

Step 1: File Loading
    ↓
┌──────────────────────────────────────┐
│  Fetch Excel from /public/data       │
│  - 6th_sem_Time-Table_and_Section... │
└──────────────────────────────────────┘
    ↓
Step 2: File Reading
    ↓
┌──────────────────────────────────────┐
│  Convert to ArrayBuffer               │
│  - Response.arrayBuffer()             │
└──────────────────────────────────────┘
    ↓
Step 3: XLSX Parsing
    ↓
┌──────────────────────────────────────┐
│  XLSX.read(buffer)                    │
│  - Extract Workbook                   │
│  - Identify Sheets                    │
└──────────────────────────────────────┘
    ↓
Step 4: Data Extraction
    ↓
┌──────────────────────────────────────┐
│  Sheet Processing                     │
│  - Sheet 1: Timetable Data            │
│  - Sheet 2: Section Details           │
└──────────────────────────────────────┘
    ↓
Step 5: Data Transformation
    ↓
┌──────────────────────────────────────┐
│  Parse & Structure                    │
│  - parseTimetable()                   │
│  - parseSections()                    │
└──────────────────────────────────────┘
    ↓
Step 6: Caching
    ↓
┌──────────────────────────────────────┐
│  Store in Memory Cache                │
│  - cachedData = {sections, timetable} │
└──────────────────────────────────────┘
    ↓
Step 7: Ready for Queries
    ↓
┌──────────────────────────────────────┐
│  Available Functions:                 │
│  - getTodayTimetable()                │
│  - getFullWeekTimetable()             │
└──────────────────────────────────────┘
```

---

## Excel File Parsing

### File Structure Requirements

**Expected Excel Structure:**

**Sheet 1: Time-Table**
```
| Day | Section | Room1 | 8-9    | Room2 | 9-10   | 10-11  | Room3 | 11-12  | ... |
|-----|---------|-------|--------|-------|--------|--------|-------|--------|-----|
| MON | CSE-1   | 101   | DS     | 102   | DBMS   | DBMS   | 103   | OS     | ... |
| MON | CSE-2   | 201   | DBMS   | 202   | DS     | DS     | 203   | OS     | ... |
```

**Sheet 2: Section Detail**
```
| Roll Number | Section |
|-------------|---------|
| 2305070     | CSE-1   |
| 2305071     | CSE-1   |
| 2305072     | CSE-2   |
```

### Parsing Procedure

#### Function: `parseExcelFiles()`

**Purpose:** Main entry point for Excel data parsing with caching

**Algorithm:**
```javascript
async function parseExcelFiles() {
  // Step 1: Check cache
  if (cachedData exists) {
    return cachedData;
  }

  try {
    // Step 2: Fetch Excel file
    response = await fetch('/data/6th_sem_Time-Table_and_Section_Detail.xlsx');
    
    if (!response.ok) {
      throw Error with status;
    }

    // Step 3: Convert to buffer
    buffer = await response.arrayBuffer();

    // Step 4: Parse with XLSX
    workbook = XLSX.read(buffer, { type: 'array' });

    // Step 5: Extract sheets
    ttSheet = workbook.Sheets[SheetNames[0]];  // Timetable
    sectionSheet = workbook.Sheets[SheetNames[1]];  // Sections

    // Step 6: Convert to JSON
    ttData = XLSX.utils.sheet_to_json(ttSheet, {
      header: 1,
      defval: ''
    });
    
    sectionData = XLSX.utils.sheet_to_json(sectionSheet, {
      header: 1,
      defval: ''
    });

    // Step 7: Parse data
    timetable = parseTimetable(ttData);
    sections = parseSections(sectionData);

    // Step 8: Cache results
    cachedData = { sections, timetable };
    
    return cachedData;
  } catch (error) {
    console.error('Parsing error:', error);
    return { sections: {}, timetable: {} };
  }
}
```

**Error Handling:**
- Network errors → Return empty data structure
- Parse errors → Log error, return empty data
- Invalid format → Skip invalid rows, continue parsing

---

## Data Transformation

### Timetable Parsing

#### Function: `parseTimetable(data)`

**Purpose:** Transform raw Excel data into structured timetable object

**Input:** 2D array from Excel sheet
**Output:** Nested object: `{ section: { day: [periods] } }`

**Procedure:**

```javascript
function parseTimetable(data) {
  // Initialize
  timetable = {};
  days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  // Iterate through rows
  for each row in data:
    // Identify day rows
    if (row[0] is in days):
      day = row[0];
      section = row[1].trim();

      // Skip header rows
      if (section == 'Section'):
        continue;

      // Initialize section if needed
      if (section not in timetable):
        timetable[section] = {};

      // Map day name
      fullDay = mapDayName(day);  // MON → Monday

      // Parse periods for this day
      periods = parsePeriods(row);
      
      // Store in timetable
      timetable[section][fullDay] = periods;

  // Add weekend days (no classes)
  for each section in timetable:
    timetable[section]['Saturday'] = [];
    timetable[section]['Sunday'] = [];

  return timetable;
}
```

**Day Mapping:**
```javascript
const dayMap = {
  'MON': 'Monday',
  'TUE': 'Tuesday',
  'WED': 'Wednesday',
  'THU': 'Thursday',
  'FRI': 'Friday'
};
```

### Period Parsing

#### Function: `parsePeriods(row)`

**Purpose:** Extract individual class periods from a timetable row

**Time Slot Configuration:**
```javascript
const slots = [
  { time: "8:00-9:00",   subject: 3,  room: 2 },
  { time: "9:00-10:00",  subject: 5,  room: 4 },
  { time: "10:00-11:00", subject: 6,  room: 4 },
  { time: "11:00-12:00", subject: 8,  room: 7 },
  { time: "12:00-1:00",  subject: 10, room: 9 },
  { time: "1:00-2:00",   subject: 11, room: 9 },
  { time: "2:00-3:00",   subject: 13, room: 12 },
  { time: "3:15-4:15",   subject: 15, room: 14 },
  { time: "4:15-5:15",   subject: 17, room: 16 },
  { time: "5:15-6:15",   subject: 18, room: 16 }
];
```

**Algorithm:**
```javascript
function parsePeriods(row) {
  periods = [];

  for each slot in slots:
    subject = row[slot.subject].trim();
    room = row[slot.room].trim();

    // Skip empty cells
    if (subject is empty or "---"):
      continue;

    // Handle free periods
    if (subject == "X"):
      periods.push({
        time: slot.time,
        subject: "Free Period",
        room: room || "-",
        faculty: "-"
      });
      continue;

    // Regular class
    periods.push({
      time: slot.time,
      subject: subject,
      room: room || "-",
      faculty: "-"
    });

  return periods;
}
```

### Section Mapping

#### Function: `parseSections(data)`

**Purpose:** Create roll number to section mapping

**Procedure:**
```javascript
function parseSections(data) {
  sections = {};

  for each row in data:
    if (row[0] and row[1]):
      rawRoll = row[0].toString().trim();
      section = row[1].toString().trim();

      // Normalize roll number
      { raw, digits } = normalizeRoll(rawRoll);

      // Validate format (6-8 digits)
      if (raw matches /^\d{6,8}$/ and section):
        sections[raw] = section;
        
        // Store both formats
        if (digits != raw):
          sections[digits] = section;

  return sections;
}
```

**Roll Number Normalization:**
```javascript
function normalizeRoll(rollNumber) {
  raw = rollNumber.toString().trim();
  digits = raw.replace(/\D+/g, '');  // Remove non-digits
  
  return { raw, digits };
}
```

---

## Caching Mechanism

### In-Memory Cache

**Implementation:**
```javascript
let cachedData = null;

export const parseExcelFiles = async () => {
  // Cache check
  if (cachedData) {
    return cachedData;
  }

  // Parse and cache
  const { sections, timetable } = await parseData();
  cachedData = { sections, timetable };
  
  return cachedData;
};
```

**Cache Characteristics:**
- **Type:** In-memory (runtime)
- **Scope:** Module-level
- **Duration:** Until page refresh
- **Size:** ~1-5 MB (typical)
- **Invalidation:** Page reload

**Cache Benefits:**
1. **Performance:** Instant subsequent queries
2. **Efficiency:** Parse Excel only once
3. **Bandwidth:** No repeated network requests
4. **UX:** Fast response times

**Cache Limitations:**
1. Lost on page refresh
2. Not shared across tabs
3. No persistence
4. Memory-resident

---

## Data Query Procedures

### Today's Timetable Query

#### Function: `getTodayTimetable(rollNumber)`

**Purpose:** Retrieve today's schedule for a student

**Input:** Roll number (string)
**Output:** Today's timetable object

**Procedure:**
```javascript
async function getTodayTimetable(rollNumber) {
  // Step 1: Load parsed data
  { sections, timetable } = await parseExcelFiles();

  // Step 2: Normalize roll number
  { raw, digits } = normalizeRoll(rollNumber);

  // Step 3: Find section
  section = sections[raw] || sections[digits];
  
  if (!section):
    throw Error("Roll number not found");

  // Step 4: Normalize section name
  normalizedSection = normalizeSection(section);
  // CSCE-01 → CSE-1, IT-05 → IT-5

  // Step 5: Get section's timetable
  sectionTimetable = timetable[normalizedSection] || {};

  // Step 6: Determine today
  days = ["Sunday", "Monday", ..., "Saturday"];
  today = days[new Date().getDay()];

  // Step 7: Extract today's schedule
  todaySchedule = sectionTimetable[today] || [];

  // Step 8: Handle no classes
  if (todaySchedule is empty):
    return {
      day: today,
      section: normalizedSection,
      timetable: [],
      message: "No classes today. Enjoy your break! 🎉"
    };

  // Step 9: Return schedule
  return {
    day: today,
    section: normalizedSection,
    timetable: todaySchedule
  };
}
```

**Section Name Normalization:**
```javascript
function normalizeSection(section) {
  return section
    .replace('CSCE-0', 'CSE-')
    .replace('CSSE-0', 'CSE-')
    .replace('IT-0', 'IT-');
}
```

### Weekly Timetable Query

#### Function: `getFullWeekTimetable(rollNumber)`

**Purpose:** Retrieve entire week's schedule

**Procedure:**
```javascript
async function getFullWeekTimetable(rollNumber) {
  // Step 1: Load data
  { sections, timetable } = await parseExcelFiles();

  // Step 2: Normalize and find section
  { raw, digits } = normalizeRoll(rollNumber);
  section = sections[raw] || sections[digits];

  if (!section):
    throw Error("Roll number not found");

  // Step 3: Normalize section name
  normalizedSection = normalizeSection(section);

  // Step 4: Get full week timetable
  fullTimetable = timetable[normalizedSection] || {};

  // Step 5: Return complete data
  return {
    section: normalizedSection,
    fullTimetable: fullTimetable
  };
}
```

---

## Error Handling

### Error Types and Handling

#### 1. Network Errors
```javascript
// Scenario: Excel file fetch fails
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
} catch (error) {
  console.error('Network error:', error);
  return { sections: {}, timetable: {} };
}
```

#### 2. Parse Errors
```javascript
// Scenario: Invalid Excel format
try {
  const workbook = XLSX.read(buffer);
} catch (error) {
  console.error('Parse error:', error);
  return { sections: {}, timetable: {} };
}
```

#### 3. Data Errors
```javascript
// Scenario: Roll number not found
const section = sections[rollNumber];
if (!section) {
  throw new Error("Roll number not found");
}
```

#### 4. Invalid Input
```javascript
// Scenario: Invalid roll number format
if (!/^\d{6,8}$/.test(rollNumber)) {
  throw new Error("Invalid roll number format");
}
```

### Error Recovery Strategy

```
Error Detected
    ↓
Log to Console
    ↓
Check Error Type
    ├── Network → Return empty data
    ├── Parse → Return empty data
    ├── Not Found → Throw error with message
    └── Invalid Input → Throw validation error
    ↓
Frontend Handles
    ├── Display error message
    ├── Allow retry
    └── Maintain UI state
```

---

## Data Update Procedures

### Semester Update Process

#### Step 1: Prepare New Data
```bash
# Obtain new semester Excel files
- 7th_sem_Time-Table_and_Section_Detail.xlsx
```

#### Step 2: Validate Format
```
✓ Check sheet names
✓ Verify column structure
✓ Test sample roll numbers
✓ Validate time slots
```

#### Step 3: Update Code
```javascript
// In parseExcel.js
const response = await fetch(
  '/data/7th_sem_Time-Table_and_Section_Detail.xlsx'  // Update filename
);
```

#### Step 4: Upload Files
```bash
# Place new file in public/data/
cp 7th_sem_Time-Table_and_Section_Detail.xlsx public/data/
```

#### Step 5: Clear Cache
```javascript
// Clear existing cache
cachedData = null;
```

#### Step 6: Test
```bash
# Test with sample roll numbers
npm run dev
# Manual testing in browser
```

#### Step 7: Deploy
```bash
npm run build
# Deploy to hosting platform
```

### Data Verification Checklist

- [ ] Excel file readable
- [ ] Sheets accessible
- [ ] Day columns correct
- [ ] Section format consistent
- [ ] Roll numbers valid
- [ ] Time slots accurate
- [ ] Room numbers present
- [ ] No corrupt data
- [ ] Sample queries work
- [ ] All sections covered

---

## Performance Optimization

### Optimization Techniques

#### 1. Lazy Loading
```javascript
// Parse only when needed
const data = await parseExcelFiles();
```

#### 2. Caching
```javascript
// Parse once, use many times
if (cachedData) return cachedData;
```

#### 3. Efficient Parsing
```javascript
// Skip unnecessary rows
if (section === 'Section') continue;
```

#### 4. Data Structure
```javascript
// O(1) lookup by roll number
const section = sections[rollNumber];
```

### Performance Metrics

| Operation | Time | Optimization |
|-----------|------|--------------|
| Excel Fetch | ~100-500ms | CDN hosting |
| Excel Parse | ~50-200ms | Caching |
| Roll Lookup | <1ms | Hash map |
| Schedule Extract | <1ms | Direct access |
| Total (first load) | ~200-700ms | One-time only |
| Total (cached) | <5ms | Instant |

---

## API Reference

### Core Functions

#### parseExcelFiles()
```javascript
/**
 * Main parser function
 * @returns {Promise<Object>} { sections, timetable }
 */
async function parseExcelFiles()
```

#### getTodayTimetable(rollNumber)
```javascript
/**
 * Get today's schedule
 * @param {string} rollNumber - Student roll number
 * @returns {Promise<Object>} Today's timetable
 * @throws {Error} If roll number not found
 */
async function getTodayTimetable(rollNumber)
```

#### getFullWeekTimetable(rollNumber)
```javascript
/**
 * Get full week schedule
 * @param {string} rollNumber - Student roll number
 * @returns {Promise<Object>} Weekly timetable
 * @throws {Error} If roll number not found
 */
async function getFullWeekTimetable(rollNumber)
```

---

## Testing Procedures

### Unit Testing Approach

```javascript
// Test parseSections
test('parseSections returns correct mapping', () => {
  const data = [
    ['2305070', 'CSE-1'],
    ['2305071', 'CSE-1']
  ];
  const result = parseSections(data);
  expect(result['2305070']).toBe('CSE-1');
});

// Test normalizeRoll
test('normalizeRoll handles various formats', () => {
  expect(normalizeRoll('2305070').digits).toBe('2305070');
  expect(normalizeRoll(' 2305070 ').raw).toBe('2305070');
});

// Test parsePeriods
test('parsePeriods skips empty cells', () => {
  const row = ['MON', 'CSE-1', '101', 'DS', '102', '---'];
  const periods = parsePeriods(row);
  expect(periods.length).toBe(1);  // Only DS, not ---
});
```

### Integration Testing

```javascript
// Test full pipeline
test('Complete data flow', async () => {
  const data = await parseExcelFiles();
  expect(data.sections).toBeDefined();
  expect(data.timetable).toBeDefined();
  
  const today = await getTodayTimetable('2305070');
  expect(today.section).toBeDefined();
  expect(today.timetable).toBeArray();
});
```

---

## Best Practices

### Code Quality
1. **Error Handling:** Always wrap async operations in try-catch
2. **Validation:** Validate all inputs before processing
3. **Type Safety:** Use TypeScript for type checking
4. **Documentation:** Comment complex logic
5. **Consistency:** Follow naming conventions

### Data Integrity
1. **Validation:** Verify Excel structure before parsing
2. **Sanitization:** Clean user inputs
3. **Normalization:** Standardize data formats
4. **Fallbacks:** Provide default values

### Performance
1. **Cache:** Implement caching for expensive operations
2. **Lazy Load:** Parse data only when needed
3. **Optimize:** Use efficient data structures
4. **Monitor:** Track parsing performance

---

## Conclusion

The backend procedures of KIIT Timetable efficiently handle data processing through client-side parsing, caching, and querying mechanisms. This design ensures fast performance, minimal server requirements, and easy maintenance.
