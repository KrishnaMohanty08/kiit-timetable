# KIIT Timetable - System Design & Architecture

## System Overview

KIIT Timetable is a client-side web application built with React and Vite that provides students with their class schedules. The system parses Excel files containing timetable and section information, then presents it through an intuitive user interface.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    KIIT Timetable System                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  InputCard   │  │ TimetableCard│  │   NotFound   │      │
│  │  Component   │  │  Component   │  │     Page     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                          │                                  │
└──────────────────────────┼──────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────┐
│                     Application Layer                        │
│                          │                                   │
│  ┌───────────────────────┴──────────────────────┐           │
│  │              Index Page (Main)                │           │
│  │  - State Management                           │           │
│  │  - Event Handling                             │           │
│  │  - Component Orchestration                    │           │
│  └───────────────────────┬──────────────────────┘           │
│                          │                                   │
└──────────────────────────┼──────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────┐
│                      Business Logic Layer                    │
│                          │                                   │
│  ┌──────────────────────┴───────────────────────┐           │
│  │         Data Processing Utilities             │           │
│  │                                               │           │
│  │  ┌─────────────────┐  ┌─────────────────┐   │           │
│  │  │  parseExcel.js  │  │ generateJson... │   │           │
│  │  │                 │  │      .js        │   │           │
│  │  │ - Excel Parser  │  │ - JSON Gen      │   │           │
│  │  │ - Data Cache    │  │ - Converter     │   │           │
│  │  │ - Roll Lookup   │  │                 │   │           │
│  │  └─────────────────┘  └─────────────────┘   │           │
│  └──────────────────────────────────────────────┘           │
│                          │                                   │
└──────────────────────────┼──────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────┐
│                       Data Layer                             │
│                          │                                   │
│  ┌───────────────────────┴──────────────────────┐           │
│  │            Static Data Files                  │           │
│  │                                               │           │
│  │  📁 public/data/                              │           │
│  │  ├── 6th_sem_Time-Table_and_Section_Detail...│           │
│  │  └── 6th_semester_TT.xlsx                    │           │
│  └───────────────────────────────────────────────┘           │
│                                                               │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│                    External Libraries                         │
│  - React (UI Framework)                                       │
│  - React Router (Navigation)                                  │
│  - XLSX (Excel Parser)                                        │
│  - TanStack Query (Data Caching)                              │
│  - Radix UI (Component Library)                               │
│  - Tailwind CSS (Styling)                                     │
└───────────────────────────────────────────────────────────────┘
```

## System Components

### 1. Frontend Architecture

#### A. Component Hierarchy

```
App (Root Component)
│
├── QueryClientProvider
│   └── Data Caching & State Management
│
├── TooltipProvider
│   └── UI Enhancements
│
├── Toast Notifications
│   ├── Toaster (Standard)
│   └── Sonner (Enhanced)
│
└── BrowserRouter
    └── Routes
        ├── "/" → Index Page
        │   ├── InputCard Component
        │   │   ├── Roll Number Input
        │   │   ├── View Selector (Today/Weekly)
        │   │   └── Form Validation
        │   │
        │   └── TimetableCard Component
        │       ├── Schedule Table
        │       ├── View Toggle
        │       ├── Day Navigation
        │       └── Statistics Dashboard
        │
        └── "*" → NotFound Page
            └── 404 Error Handler
```

#### B. Component Responsibilities

**InputCard Component**
- Accepts roll number input
- Validates input format (6-8 digits)
- Provides view selection (Today/Weekly)
- Triggers data fetch on submission
- Displays validation errors

**TimetableCard Component**
- Displays fetched schedule data
- Toggles between daily and weekly views
- Renders timetable in tabular format
- Shows class statistics
- Handles "no classes" scenarios
- Provides navigation controls

**Index Page (Main Controller)**
- Manages application state
- Handles data fetching
- Coordinates component rendering
- Manages loading states
- Handles error scenarios

### 2. Data Architecture

#### A. Data Models

```typescript
// Section Mapping
interface Sections {
  [rollNumber: string]: string;  // "2305070" -> "CSE-1"
}

// Timetable Structure
interface Timetable {
  [section: string]: {
    [day: string]: Period[];
  };
}

// Period Structure
interface Period {
  time: string;      // "9:00-10:00"
  subject: string;   // "Data Structures"
  room: string;      // "101" or "-"
  faculty: string;   // "Dr. Smith" or "-"
}

// API Response
interface TodayTimetableResponse {
  day: string;
  section: string;
  timetable: Period[];
  message?: string;
}

interface WeekTimetableResponse {
  section: string;
  fullTimetable: {
    [day: string]: Period[];
  };
}
```

#### B. Data Flow

```
Excel Files (Static)
      ↓
  Fetch API
      ↓
  ArrayBuffer
      ↓
  XLSX Parser
      ↓
  Raw Data Array
      ↓
┌─────┴─────┐
│           │
↓           ↓
Parse       Parse
Timetable   Sections
│           │
↓           ↓
Section     Roll-to-
Schedule    Section
Mapping     Mapping
│           │
└─────┬─────┘
      ↓
  Cached Object
      ↓
  User Query
      ↓
  Filtered Data
      ↓
  React State
      ↓
  UI Render
```

### 3. Technology Stack

#### Frontend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.3.1 |
| TypeScript | Type Safety | 5.8.3 |
| Vite | Build Tool | 5.4.19 |
| React Router | Navigation | 6.30.1 |
| TanStack Query | Data Management | 5.83.0 |
| Tailwind CSS | Styling | 3.4.17 |
| XLSX | Excel Parsing | 0.18.5 |
| Radix UI | Component Library | Various |
| Lucide React | Icons | 0.462.0 |

#### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code Linting |
| PostCSS | CSS Processing |
| Autoprefixer | CSS Compatibility |
| SWC | Fast Compilation |

### 4. Database/Storage Design

**Storage Strategy: Client-Side Caching**

```
Browser Memory Cache
├── Parsed Excel Data (Runtime)
│   ├── Sections Map
│   └── Timetable Object
│
└── TanStack Query Cache
    └── Query Results

No Backend Database
└── All data stored in static Excel files
```

#### Data Storage Characteristics

- **Type**: Static file-based storage
- **Location**: `public/data/` directory
- **Format**: Excel (.xlsx)
- **Access**: HTTP fetch
- **Caching**: In-memory during session
- **Persistence**: None (reloads on refresh)

### 5. Security Architecture

#### Security Measures

**Input Validation**
```javascript
// Roll number validation
- Format: 6-8 digits only
- Pattern: /^\d{6,8}$/
- Sanitization: Trim whitespace
- Type checking: String validation
```

**Data Security**
- No user data collection
- No authentication required
- No server-side storage
- Client-side only processing
- Static data files (read-only)

**XSS Prevention**
- React's built-in XSS protection
- No dangerouslySetInnerHTML usage
- Input sanitization
- Content Security Policy ready

### 6. Performance Architecture

#### Optimization Strategies

**1. Data Caching**
```javascript
// In-memory cache for parsed Excel data
let cachedData = null;

export const parseExcelFiles = async () => {
  if (cachedData) return cachedData;
  // Parse only once per session
  cachedData = { sections, timetable };
  return cachedData;
};
```

**2. Code Splitting**
- Route-based lazy loading
- Component-level splitting
- Dynamic imports for heavy components

**3. Bundle Optimization**
- Vite's tree-shaking
- SWC for fast compilation
- Minification in production
- Asset optimization

**4. Render Optimization**
- React memoization
- Conditional rendering
- Virtual scrolling ready
- Optimized re-renders

### 7. Scalability Design

#### Current Limitations & Solutions

| Limitation | Current State | Scale Solution |
|------------|---------------|----------------|
| Data Size | Single semester | Implement data splitting |
| Users | Unlimited (static) | CDN distribution |
| Storage | Browser memory | IndexedDB for offline |
| Updates | Manual deployment | CI/CD automation |

#### Future Scalability

```
Current: Static Site
      ↓
Phase 1: Add Service Worker
      ├── Offline capability
      └── Background sync
      ↓
Phase 2: Backend API
      ├── Database integration
      ├── Real-time updates
      └── User accounts
      ↓
Phase 3: Microservices
      ├── Separate data service
      ├── Notification service
      └── Analytics service
```

### 8. Error Handling Architecture

#### Error Layers

```
User Input Layer
├── Validation Errors
│   ├── Empty input
│   ├── Invalid format
│   └── Out of range
│
Data Processing Layer
├── Fetch Errors
│   ├── Network failure
│   ├── File not found
│   └── CORS issues
│
├── Parse Errors
│   ├── Invalid Excel format
│   ├── Missing sheets
│   └── Corrupt data
│
Application Layer
├── State Errors
│   ├── Invalid state transition
│   └── Null reference
│
└── Render Errors
    ├── Component errors
    └── React error boundaries
```

#### Error Recovery Strategies

1. **Graceful Degradation**
   - Show partial data if available
   - Fallback to cached data
   - Display helpful error messages

2. **User Feedback**
   - Toast notifications for errors
   - Inline validation messages
   - Loading states during operations

3. **Retry Mechanisms**
   - Allow manual retry
   - Keep user input on error
   - Clear error state on retry

### 9. UI/UX Architecture

#### Design System

**Color System**
- Primary: Dynamic theme support
- Secondary: Muted backgrounds
- Accent: Interactive elements
- Semantic: Success, error, warning

**Typography**
- Headings: Poppins font
- Body: System font stack
- Monospace: Code snippets

**Layout System**
```
Mobile First Approach
├── Base: 320px+
├── SM: 640px+
├── MD: 768px+
├── LG: 1024px+
└── XL: 1280px+
```

**Animation System**
- Fade in/out transitions
- Scale animations
- Pulse effects
- Smooth scrolling

### 10. Deployment Architecture

#### Build Process

```
Source Code
    ↓
npm run build
    ↓
Vite Build
    ├── Tree shake
    ├── Minify
    ├── Bundle
    └── Optimize
    ↓
dist/ folder
    ├── index.html
    ├── assets/
    │   ├── *.js (hashed)
    │   ├── *.css (hashed)
    │   └── *.ico
    └── data/
        └── *.xlsx
    ↓
Deploy to Host
    ├── Vercel
    ├── Netlify
    └── GitHub Pages
```

#### Hosting Architecture

**Recommended: Static Hosting**
- Vercel / Netlify (Preferred)
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

**Configuration Requirements**
- SPA routing support
- HTTPS enabled
- CDN distribution
- Asset caching

### 11. Monitoring & Logging

#### Metrics to Track

**Performance Metrics**
- Page load time
- Excel parse time
- Component render time
- Bundle size

**Usage Metrics**
- Daily active users
- Roll number searches
- View preferences (today vs weekly)
- Error rates

**Logging Strategy**
```javascript
console.log() - Development
console.error() - Production errors
// Future: Add analytics service
```

## System Constraints

### Technical Constraints
1. **Browser Dependency**: Requires modern browser with ES6+ support
2. **Excel Format**: Must maintain specific Excel structure
3. **Static Data**: No dynamic data updates without redeployment
4. **Client-Side**: All processing done in browser

### Business Constraints
1. **Semester-Specific**: Requires updates each semester
2. **Section-Based**: Only supports predefined sections
3. **KIIT-Specific**: Designed for KIIT University format

### Performance Constraints
1. **Excel File Size**: Limited by browser memory
2. **Parsing Time**: Initial load depends on file size
3. **Cache Duration**: Lost on page refresh

## System Requirements

### Minimum Requirements
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **JavaScript**: Enabled
- **Network**: Required for initial load
- **Storage**: ~5MB browser memory

### Recommended Requirements
- **Browser**: Latest version of major browsers
- **Network**: Broadband for optimal performance
- **Device**: Desktop or mobile with 2GB+ RAM

## Future Enhancements

### Phase 1: Enhanced Features
- [ ] Offline support with Service Worker
- [ ] Dark/Light theme toggle
- [ ] Export schedule to calendar
- [ ] Notifications for upcoming classes

### Phase 2: Backend Integration
- [ ] Database for dynamic data
- [ ] Admin panel for data management
- [ ] User authentication
- [ ] Real-time timetable updates

### Phase 3: Advanced Features
- [ ] Multiple semester support
- [ ] Faculty view
- [ ] Room availability
- [ ] Class reminders
- [ ] Analytics dashboard

## Conclusion

The KIIT Timetable system is designed as a lightweight, client-side application that efficiently serves student timetable needs. Its architecture prioritizes simplicity, performance, and maintainability while providing room for future enhancements and scalability.
