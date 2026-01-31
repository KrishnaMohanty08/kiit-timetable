# KIIT Timetable - Workflow Documentation

## Overview
KIIT Timetable (KIIT Saathi) is a web-based timetable management system designed for KIIT University students. It allows students to view their daily and weekly class schedules by entering their roll numbers.

## Project Workflow

### 1. User Journey

```
┌─────────────┐
│   Student   │
│  Arrives    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────┐
│  Landing Page           │
│  (InputCard Component)  │
│  - Enter Roll Number    │
│  - Select View Type     │
│    (Today/Weekly)       │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│  Validate Input         │
│  - Check format         │
│  - 6-8 digit number     │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│  Fetch Data             │
│  - Load Excel file      │
│  - Parse timetable      │
│  - Map roll to section  │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│  Display Results        │
│  (TimetableCard)        │
│  - Show schedule        │
│  - Display statistics   │
│  - Allow view toggle    │
└─────────────────────────┘
```

### 2. Data Flow Workflow

```
Excel File (Public/Data)
        ↓
    Fetch Request
        ↓
    XLSX Parser
        ↓
    ┌──────────────────┐
    │  Data Processing │
    └────┬─────────┬───┘
         │         │
         ↓         ↓
    Sections   Timetable
    Mapping     Data
         │         │
         └────┬────┘
              ↓
         Cached Data
              ↓
         User Query
              ↓
    Section Identification
              ↓
    Schedule Extraction
              ↓
    Render to UI
```

## Development Workflow

### 3. Development Process

#### A. Setup Phase
1. Clone repository
2. Install dependencies: `npm install`
3. Verify data files in `public/data/`
4. Start development server: `npm run dev`

#### B. Feature Development
1. Create/modify components in `src/components/`
2. Update utility functions in `src/utils/`
3. Test locally on dev server
4. Build for production: `npm run build`
5. Preview build: `npm preview`

#### C. Data Update Workflow
1. Obtain new semester Excel files
2. Place in `public/data/` directory
3. Update file references in `parseExcel.js`
4. Test data parsing with sample roll numbers
5. Deploy updated version

### 4. Code Review Workflow

```
Developer
    ↓
Write Code
    ↓
Local Testing
    ↓
Commit Changes
    ↓
Push to Branch
    ↓
Create Pull Request
    ↓
Code Review
    ↓
Address Feedback
    ↓
Merge to Main
    ↓
Deploy to Production
```

## Component Workflow

### 5. Component Interaction Flow

```
App.tsx (Root)
    ↓
    ├── BrowserRouter
    │   └── Routes
    │       ├── Index (Home Page)
    │       │   ├── InputCard
    │       │   │   └── Form Submission
    │       │   └── TimetableCard
    │       │       └── Schedule Display
    │       └── NotFound (404)
    │
    ├── QueryClientProvider (Data Cache)
    ├── TooltipProvider (UI)
    └── Toast Notifications
```

### 6. State Management Workflow

```
Initial State
    ↓
User Input (Roll Number)
    ↓
Set Loading State
    ↓
Fetch & Parse Data
    ↓
    ├── Success
    │   ├── Cache Data
    │   ├── Set Timetable State
    │   └── Show Success Toast
    │
    └── Error
        ├── Clear Loading
        ├── Show Error Toast
        └── Keep Input Form
```

## API/Data Access Workflow

### 7. Excel Data Parsing Flow

```
parseExcelFiles()
    ↓
Check Cache
    ├── If Cached: Return Cached Data
    │
    └── If Not Cached:
        ↓
    Fetch Excel File
        ↓
    Read with XLSX Library
        ↓
    Extract Sheets
        ├── Sheet 1: Timetable Data
        └── Sheet 2: Section Details
        ↓
    Parse Timetable
        ├── Identify Days (MON-FRI)
        ├── Extract Sections
        ├── Parse Time Slots
        └── Extract Subject/Room Info
        ↓
    Parse Sections
        ├── Map Roll Numbers
        └── Link to Sections
        ↓
    Store in Cache
        ↓
    Return Data Object
```

### 8. Query Processing Workflow

```
getTodayTimetable(rollNumber)
    ↓
    ├── Normalize Roll Number
    │   ├── Extract digits
    │   └── Clean format
    │
    ├── Load Parsed Data
    │
    ├── Find Section
    │   ├── Lookup by raw roll
    │   └── Lookup by digits
    │
    ├── Normalize Section Name
    │   └── Handle format variations
    │
    ├── Get Day's Schedule
    │   ├── Determine current day
    │   └── Extract day's periods
    │
    └── Return Schedule Object
        ├── Day name
        ├── Section
        ├── Timetable array
        └── Message (if no classes)
```

## Deployment Workflow

### 9. Build and Deploy Process

```
Development
    ↓
npm run build
    ↓
Generate Static Files
    ├── HTML
    ├── CSS
    ├── JavaScript bundles
    └── Assets
    ↓
Deploy to Hosting
    ├── Netlify/Vercel
    ├── GitHub Pages
    └── Custom Server
    ↓
Production Environment
```

### 10. Testing Workflow

```
Component Testing
    ├── Input Validation
    ├── Form Submission
    └── Data Display
    ↓
Integration Testing
    ├── Excel Parsing
    ├── Roll Number Lookup
    └── Schedule Generation
    ↓
UI/UX Testing
    ├── Responsive Design
    ├── Animations
    └── Error Handling
    ↓
Performance Testing
    ├── Load Times
    ├── Cache Efficiency
    └── Bundle Size
```

## Maintenance Workflow

### 11. Regular Maintenance Tasks

1. **Semester Updates**
   - Upload new Excel files
   - Update file references
   - Test with sample roll numbers
   - Deploy updates

2. **Bug Fixes**
   - Identify issue
   - Reproduce locally
   - Fix and test
   - Deploy patch

3. **Feature Enhancements**
   - Gather requirements
   - Design solution
   - Implement changes
   - Test thoroughly
   - Deploy to production

## Error Handling Workflow

### 12. Error Recovery Process

```
User Action
    ↓
Validation Check
    ├── Valid → Continue
    │
    └── Invalid → Show Error
        ├── Display error message
        ├── Keep input form
        └── Allow retry
        ↓
Data Fetch
    ├── Success → Process Data
    │
    └── Failure → Handle Error
        ├── Network error
        ├── Parse error
        └── Data not found
        ↓
Display Result
    ├── Success → Show timetable
    └── Error → Show error UI
```

## Key Workflows Summary

1. **User Input Flow**: Roll number → Validation → Data fetch → Display
2. **Data Processing Flow**: Excel file → Parse → Cache → Query → Render
3. **Development Flow**: Code → Test → Build → Deploy
4. **Update Flow**: New data → Upload → Test → Deploy
5. **Error Flow**: Error detected → Handle → Inform user → Allow retry

## Best Practices

1. **Always validate user input** before processing
2. **Cache parsed Excel data** to improve performance
3. **Handle errors gracefully** with user-friendly messages
4. **Test with multiple roll numbers** from different sections
5. **Keep documentation updated** with code changes
6. **Use semantic versioning** for releases
7. **Monitor performance** and optimize as needed
