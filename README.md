# KIIT Saathi - Your Smart Timetable Companion

## 📖 Project Overview

KIIT Saathi is a modern, user-friendly web application designed specifically for KIIT University students. It provides instant access to personalized class schedules by simply entering a roll number. The application parses timetable data from Excel files and presents it in an elegant, responsive interface.

### Key Features
- 🎯 **Instant Timetable Access** - Get your schedule in seconds
- 📅 **Dual View Modes** - View today's schedule or full weekly timetable
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Beautiful glass-morphism design with smooth animations
- ⚡ **Fast & Efficient** - Client-side processing with caching for optimal performance

---

## 🏗️ System Architecture

### Architecture Type: Frontend-Only Single Page Application (SPA)

KIIT Saathi is built as a **pure frontend application** with no backend server. All data processing happens in the browser, making it fast, secure, and easy to deploy as a static site.

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                        │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           React Application (SPA)                   │    │
│  │                                                     │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────┐ │    │
│  │  │   UI Layer   │  │  Data Layer  │  │ Router  │ │    │
│  │  │              │  │              │  │         │ │    │
│  │  │ - InputCard  │  │ - parseExcel │  │ - /     │ │    │
│  │  │ - Timetable  │  │ - getTimetable│  │ - /*   │ │    │
│  │  │   Card       │  │ - Caching    │  │         │ │    │
│  │  └──────────────┘  └──────────────┘  └─────────┘ │    │
│  │                                                     │    │
│  └────────────────────────────────────────────────────┘    │
│                           ↓                                  │
│                   ┌───────────────┐                         │
│                   │  Static Files │                         │
│                   │  - Excel Data │                         │
│                   │  - Assets     │                         │
│                   └───────────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
src/
├── pages/
│   └── Index.tsx          # Main page orchestrating the flow
├── components/
│   ├── InputCard.jsx      # Roll number input and view selection
│   ├── TimetableCard.jsx  # Timetable display (today/weekly)
│   └── ui/                # Reusable UI components (shadcn/ui)
├── utils/
│   └── parseExcel.js      # Excel parsing and data processing
└── App.tsx                # Root component with routing
```

---

## 🔄 Workflow & User Journey

### User Workflow Diagram

```
┌─────────────┐
│   START     │
│  User lands │
│  on site    │
└──────┬──────┘
       │
       ↓
┌─────────────────────────┐
│  Landing Page           │
│  - InputCard displayed  │
│  - Select view mode:    │
│    • Today ⏰           │
│    • Weekly 📅          │
└──────┬──────────────────┘
       │
       ↓
┌─────────────────────────┐
│  User enters roll no.   │
│  - Validates format     │
│  - 6-8 digit number     │
└──────┬──────────────────┘
       │
       ↓
┌─────────────────────────┐
│  Submit Button Clicked  │
│  - Loading state shown  │
└──────┬──────────────────┘
       │
       ↓
┌─────────────────────────┐
│  Data Processing        │
│  1. Fetch Excel file    │
│  2. Parse timetable     │
│  3. Parse sections      │
│  4. Find student section│
│  5. Extract schedule    │
└──────┬──────────────────┘
       │
       ├──── Success ─────┐
       │                  │
       │                  ↓
       │         ┌────────────────────┐
       │         │  Display Timetable │
       │         │  - Today's view OR │
       │         │  - Weekly view     │
       │         │  - Section info    │
       │         │  - Statistics      │
       │         └────────┬───────────┘
       │                  │
       │                  ↓
       │         ┌────────────────────┐
       │         │  User Actions:     │
       │         │  - Switch views    │
       │         │  - Go back to home │
       │         └────────────────────┘
       │
       └──── Error ────────┐
                           │
                           ↓
                  ┌────────────────┐
                  │  Show Error    │
                  │  - Toast msg   │
                  │  - Stay on page│
                  └────────────────┘
```

### Detailed Step-by-Step Flow

#### 1. **Initial Load**
- User navigates to the application
- React app loads with routing configured
- InputCard component renders with two view options

#### 2. **User Input**
- User selects view mode (Today or Weekly)
- User enters their 6-8 digit roll number
- Client-side validation checks format
- Submit button triggers data fetch

#### 3. **Data Fetching & Processing**
```javascript
// Flow in parseExcel.js
parseExcelFiles()
  → Fetch Excel from /public/data/
  → Read workbook using XLSX library
  → Parse timetable sheet (periods, subjects, rooms)
  → Parse sections sheet (roll → section mapping)
  → Cache results for future requests
  → Return { sections, timetable }
```

#### 4. **Section Lookup**
- Normalize roll number (remove non-digits)
- Search in sections mapping
- Normalize section name (e.g., CSCE-0 → CSE-)
- Retrieve section's timetable

#### 5. **Data Presentation**
- **Today View**: Show current day's schedule
  - Display periods with time, subject, room
  - Show statistics (total classes, labs, etc.)
  - Handle "no classes" scenario
- **Weekly View**: Show all 7 days
  - Expandable day-wise schedule
  - Mark days with no classes

#### 6. **User Interactions**
- Switch between Today ⏰ and Weekly 📅 views
- Go back to input screen
- Responsive UI adapts to screen size

---

## 📊 Data Flow & Processing

### Data Source
```
Excel File Structure:
├── Sheet 1: Time-Table
│   ├── Columns: Day | Section | [Time slots with subjects & rooms]
│   └── Rows: Schedule for each section per day
└── Sheet 2: Section Detail
    ├── Column 1: Roll Number
    └── Column 2: Section Name
```

### Processing Pipeline

```
┌──────────────────┐
│   Excel File     │
│   (*.xlsx)       │
└────────┬─────────┘
         │
         ↓
┌──────────────────────────────────┐
│   parseExcelFiles()              │
│   - Fetch from /data/            │
│   - Read using XLSX.read()       │
│   - Convert sheets to JSON       │
└────────┬────────────┬────────────┘
         │            │
         ↓            ↓
┌──────────────┐  ┌─────────────────┐
│ parseTimetable│  │ parseSections   │
│ - Loop days   │  │ - Map roll → sec│
│ - Parse slots │  │ - Normalize IDs │
└────────┬──────┘  └────────┬────────┘
         │                  │
         └────────┬─────────┘
                  │
                  ↓
         ┌────────────────┐
         │  Cache Result  │
         │  (in memory)   │
         └────────┬───────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
    ↓                           ↓
┌────────────────┐    ┌──────────────────┐
│getTodayTimetable│    │getFullWeekTimetable│
│- Get current day│    │- Get all 7 days   │
│- Filter periods │    │- Return full week │
└────────┬───────┘    └─────────┬─────────┘
         │                      │
         └──────────┬───────────┘
                    │
                    ↓
            ┌───────────────┐
            │  Render UI    │
            └───────────────┘
```

### Time Slot Mapping
The application maps Excel columns to time slots:
```javascript
const slots = [
  { time: "8:00-9:00",   subject: col 3,  room: col 2 },
  { time: "9:00-10:00",  subject: col 5,  room: col 4 },
  { time: "10:00-11:00", subject: col 6,  room: col 4 },
  // ... and so on for all periods
];
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.3.1
- **Language**: TypeScript + JavaScript
- **Build Tool**: Vite 5.4
- **Routing**: React Router DOM 6.30
- **State Management**: React Hooks (useState)
- **UI Library**: 
  - Radix UI (headless components)
  - shadcn/ui (styled components)
  - Tailwind CSS (utility-first styling)
- **Data Processing**: 
  - XLSX (SheetJS) for Excel parsing
  - TanStack Query for data fetching
- **Animations**: 
  - Tailwind Animate
  - Custom CSS transitions

### Key Libraries
```json
{
  "xlsx": "^0.18.5",           // Excel file parsing
  "react-router-dom": "^6.30.1", // Client-side routing
  "@tanstack/react-query": "^5.83.0", // Data fetching
  "sonner": "^1.7.4",          // Toast notifications
  "tailwindcss": "^3.4.17",    // Styling
  "lucide-react": "^0.462.0"   // Icons
}
```

### Development Tools
- **Linting**: ESLint 9.32
- **Package Manager**: npm / bun
- **Version Control**: Git

---

## 📁 Project Structure

```
kiit-timetable/
├── public/
│   ├── data/
│   │   └── 6th_sem_Time-Table_and_Section_Detail.xlsx  # Timetable data
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── InputCard.jsx          # Roll number input form
│   │   ├── TimetableCard.jsx      # Schedule display
│   │   └── ui/                    # shadcn/ui components
│   │
│   ├── pages/
│   │   ├── Index.tsx              # Main page
│   │   └── NotFound.tsx           # 404 page
│   │
│   ├── utils/
│   │   └── parseExcel.js          # Excel parsing logic
│   │
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
│
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/KrishnaMohanty08/kiit-timetable.git
cd kiit-timetable
```

2. **Install dependencies**
```bash
npm install
# or
bun install
```

3. **Start development server**
```bash
npm run dev
# or
bun dev
```

4. **Access the application**
   - Open browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# Output will be in the `dist/` directory

npm run preview  # Preview production build locally
```

---

## 🎯 Key Design Decisions

### 1. **Frontend-Only Architecture**
   - **Why**: No sensitive data, no user authentication required
   - **Benefits**: 
     - Zero server costs
     - Easy deployment (static hosting)
     - Fast performance (no network latency)
     - Simple maintenance

### 2. **Client-Side Excel Parsing**
   - **Why**: Small dataset, infrequent updates
   - **Benefits**: 
     - No API required
     - Works offline after initial load
     - Instant updates by replacing Excel file

### 3. **In-Memory Caching**
   - **Why**: Same Excel file used for all requests
   - **Benefits**: 
     - Parse once, use many times
     - Reduced processing time
     - Better user experience

### 4. **Responsive Design First**
   - **Why**: Students access from various devices
   - **Benefits**: 
     - Mobile-optimized layouts
     - Touch-friendly interactions
     - Adaptive content display

---

## 🔒 Security Considerations

- No backend = No server vulnerabilities
- No user data collection or storage
- No authentication required
- All processing happens client-side
- Static files only (HTML, CSS, JS, Excel)
- HTTPS recommended for production deployment

---

## 📈 Future Enhancements

- [ ] Multiple semester support
- [ ] Calendar view integration
- [ ] Export to PDF/ICS
- [ ] Push notifications for class reminders
- [ ] Dark/Light theme toggle
- [ ] Class location maps
- [ ] Faculty contact information
- [ ] Attendance tracking

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is created for educational purposes for KIIT University students.

---

## 👨‍💻 Author

**Krishna Mohanty**

Made with 💚 for KIIT Students
