# Frontend Procedures - KIIT Timetable

## Overview

This document details all frontend procedures, component interactions, state management, and UI/UX implementation for the KIIT Timetable application.

## Table of Contents
1. [Component Architecture](#component-architecture)
2. [State Management](#state-management)
3. [Routing and Navigation](#routing-and-navigation)
4. [UI Components](#ui-components)
5. [User Interactions](#user-interactions)
6. [Styling System](#styling-system)
7. [Animation and Effects](#animation-and-effects)
8. [Responsive Design](#responsive-design)
9. [Error Handling](#error-handling)
10. [Performance Optimization](#performance-optimization)

---

## Component Architecture

### Application Structure

```
src/
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
├── pages/
│   ├── Index.tsx              # Main page controller
│   └── NotFound.tsx           # 404 page
├── components/
│   ├── InputCard.jsx          # Roll number input
│   ├── TimetableCard.jsx      # Schedule display
│   ├── NavLink.tsx            # Navigation helper
│   └── ui/                    # Reusable UI components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       └── ... (40+ components)
├── utils/
│   ├── parseExcel.js          # Data parsing
│   └── generateJsonFromExcel.js
├── lib/
│   └── utils.ts               # Helper functions
└── hooks/
    └── use-toast.ts           # Toast notifications
```

---

## State Management

### 1. Index Page State

#### State Variables
```typescript
const Index = () => {
  // Loading state - shows spinner during data fetch
  const [loading, setLoading] = useState<boolean>(false);
  
  // Timetable data - stores fetched schedule
  const [timetableData, setTimetableData] = useState<TimetableData | null>(null);
  
  // View mode - 'today' or 'week'
  const [view, setView] = useState<'today' | 'week'>('today');
  
  // ...component logic
};
```

#### State Flow

```
Initial State
├── loading: false
├── timetableData: null
└── view: 'today'
    ↓
User Submits Roll Number
    ↓
State Update
├── loading: true
├── timetableData: null (unchanged)
└── view: user's selection
    ↓
Data Fetch Completes
    ↓
Success State
├── loading: false
├── timetableData: { section, fullTimetable, today }
└── view: user's selection
    ↓
User Clicks Back
    ↓
Reset State
├── loading: false
├── timetableData: null
└── view: 'today'
```

### 2. InputCard State

```typescript
const InputCard = ({ onSubmit }) => {
  // Roll number input
  const [rollNumber, setRollNumber] = useState<string>('');
  
  // Validation error message
  const [error, setError] = useState<string>('');
  
  // View preference
  const [view, setView] = useState<'today' | 'week'>('today');
};
```

**State Transitions:**
```
Empty Input
    ↓
User Types → setRollNumber()
    ↓
Validation Error → setError('message')
    ↓
Valid Input → setError('')
    ↓
Submit → onSubmit(rollNumber, view)
```

### 3. Global State (React Query)

```typescript
// In App.tsx
const queryClient = new QueryClient();

// Configuration
{
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000  // 5 minutes
    }
  }
}
```

---

## Routing and Navigation

### Route Configuration

```typescript
// App.tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Navigation Flow

```
Browser URL
    ↓
BrowserRouter
    ↓
Route Matcher
    ├── "/" → Index Page
    │   ├── Initial: InputCard
    │   └── After Submit: TimetableCard
    │
    └── "*" → NotFound Page
        └── 404 Display
```

### Navigation Procedures

#### Procedure: Initial Load
```
1. User navigates to application
2. BrowserRouter initializes
3. Route matcher checks path
4. Index component mounts
5. InputCard renders
6. Background animation starts
```

#### Procedure: Form Submission
```
1. User enters roll number
2. User selects view type
3. User clicks submit
4. Validation runs
5. If valid:
   - State updates (loading: true)
   - TimetableCard replaces InputCard
   - Data fetch begins
6. If invalid:
   - Error message displays
   - InputCard remains
```

#### Procedure: Back Navigation
```
1. User clicks "Back" button
2. handleBack() executes
3. setTimetableData(null)
4. TimetableCard unmounts
5. InputCard remounts
6. State resets
```

---

## UI Components

### 1. InputCard Component

**Location:** `src/components/InputCard.jsx`

**Purpose:** Accept user input and trigger data fetch

**Visual Structure:**
```
┌─────────────────────────────────────┐
│          Glass Card Container        │
│  ┌─────────────────────────────┐    │
│  │     KIIT Saathi (Title)      │    │
│  │  Your Smart Timetable Companion  │
│  └─────────────────────────────┘    │
│                                      │
│  ┌───────────┐  ┌───────────┐       │
│  │Today ⏰   │  │Weekly 📅  │       │
│  └───────────┘  └───────────┘       │
│                                      │
│  ┌─────────────────────────────┐    │
│  │ Enter Your Roll Number      │    │
│  ├─────────────────────────────┤    │
│  │ [Input: e.g., 2305070]      │    │
│  └─────────────────────────────┘    │
│                                      │
│  ┌─────────────────────────────┐    │
│  │  Get Today's Timetable 📚   │    │
│  └─────────────────────────────┘    │
│                                      │
│  Try roll numbers like: 2305070...  │
└─────────────────────────────────────┘
```

**Event Handlers:**
```typescript
// Roll number change
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setRollNumber(e.target.value);
  // Clear error on new input
  if (error) setError('');
};

// View toggle
const handleViewChange = (newView: 'today' | 'week') => {
  setView(newView);
};

// Form submission
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  
  // Validate empty
  if (!rollNumber.trim()) {
    setError('Please enter your roll number');
    return;
  }
  
  // Validate format
  if (!/^\d{6,8}$/.test(rollNumber.trim())) {
    setError('Please enter a valid 6-8 digit roll number');
    return;
  }
  
  // Clear error and submit
  setError('');
  onSubmit(rollNumber.trim(), view);
};
```

### 2. TimetableCard Component

**Location:** `src/components/TimetableCard.jsx`

**Purpose:** Display timetable data with multiple views

**Props Interface:**
```typescript
interface TimetableCardProps {
  data: {
    section: string;
    fullTimetable: {
      [day: string]: Period[];
    };
    today: {
      day: string;
      timetable: Period[];
      message?: string;
    };
  };
  onBack: () => void;
}
```

**Visual Structure (Today View):**
```
┌─────────────────────────────────────────────────────┐
│  [← Back]    Monday's Schedule    [Today][Weekly]   │
│            Section: CSE-1                            │
├─────────────────────────────────────────────────────┤
│  Time       │ Subject    │ Room   │ Faculty         │
├─────────────┼────────────┼────────┼─────────────────┤
│  8:00-9:00  │ DS         │ 101    │ -               │
│  9:00-10:00 │ DBMS       │ 102    │ -               │
│  ...        │ ...        │ ...    │ ...             │
├─────────────────────────────────────────────────────┤
│  [📚 Total: 6] [🔬 Labs: 2] [⏰ 8:00] [🏁 5:15]     │
└─────────────────────────────────────────────────────┘
```

**Visual Structure (Weekly View):**
```
┌─────────────────────────────────────────────────────┐
│  [← Back]    Weekly Schedule    [Today][Weekly]     │
│            Section: CSE-1                            │
├─────────────────────────────────────────────────────┤
│  Monday                                              │
│  ┌───────────────────────────────────────────────┐  │
│  │ Time | Subject | Room | Faculty               │  │
│  └───────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  Tuesday                                             │
│  ┌───────────────────────────────────────────────┐  │
│  │ Time | Subject | Room | Faculty               │  │
│  └───────────────────────────────────────────────┘  │
│  ...                                                 │
└─────────────────────────────────────────────────────┘
```

**Rendering Logic:**
```typescript
const TimetableCard = ({ data, onBack }) => {
  const { section, fullTimetable, today } = data;
  const [view, setView] = useState('today');
  
  // Render table for periods
  const renderTable = (schedule: Period[]) => (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Subject</th>
          <th>Room</th>
          <th>Faculty</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((period, index) => (
          <tr key={index}>
            <td>{period.time}</td>
            <td>{period.subject}</td>
            <td>{period.room}</td>
            <td>{period.faculty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  // Main render logic
  if (view === 'today') {
    if (today.timetable.length === 0) {
      return <NoClassesView />;
    }
    return renderTable(today.timetable);
  } else {
    return (
      <div>
        {['Monday', 'Tuesday', ...].map(day => (
          <div key={day}>
            <h3>{day}</h3>
            {renderTable(fullTimetable[day] || [])}
          </div>
        ))}
      </div>
    );
  }
};
```

### 3. NotFound Component

**Location:** `src/pages/NotFound.tsx`

**Purpose:** Handle 404 errors

**Structure:**
```
┌─────────────────────────────────┐
│        404 - Page Not Found      │
│   The page you're looking for    │
│         doesn't exist            │
│                                  │
│   [Go to Home]                   │
└─────────────────────────────────┘
```

---

## User Interactions

### Interaction Flow Diagram

```
User Opens App
    ↓
InputCard Displayed
    ↓
User Actions:
    ├── Select View (Today/Weekly)
    │   └── View button highlights
    │
    ├── Type Roll Number
    │   ├── Validation on change
    │   └── Error clears
    │
    └── Click Submit
        ↓
    Validation Check
        ├── Invalid → Show Error
        │   └── Stay on InputCard
        │
        └── Valid → Proceed
            ↓
        Loading State
            ├── Show Spinner
            └── Disable Input
            ↓
        Data Fetch
            ├── Success
            │   ├── Hide Loading
            │   ├── Show TimetableCard
            │   └── Toast Success
            │
            └── Error
                ├── Hide Loading
                ├── Show Error Toast
                └── Stay on InputCard
```

### Event Handling Procedures

#### Procedure: Roll Number Input
```javascript
Event: onChange
    ↓
1. Get input value
2. Update rollNumber state
3. Clear any existing error
4. Re-render component
```

#### Procedure: View Toggle
```javascript
Event: onClick (view button)
    ↓
1. Identify clicked view (today/week)
2. Update view state
3. Re-render with new selection
4. Update button styles
```

#### Procedure: Form Submit
```javascript
Event: onSubmit
    ↓
1. Prevent default form behavior
2. Validate input
    ├── Empty check
    └── Format check (/^\d{6,8}$/)
3. If invalid:
    - Set error message
    - Return early
4. If valid:
    - Clear error
    - Call onSubmit callback
    - Pass (rollNumber, view)
```

#### Procedure: Data Loading
```javascript
Event: handleRollNumberSubmit()
    ↓
1. Set view state from parameter
2. Set loading = true
3. Try:
    - Fetch full week data
    - Fetch today's data
    - Merge into timetableData
    - Check if empty
    - Show appropriate toast
4. Catch:
    - Log error
    - Show error toast
5. Finally:
    - Set loading = false
```

#### Procedure: View Change in TimetableCard
```javascript
Event: onClick (view toggle)
    ↓
1. Get clicked view
2. Update local view state
3. Re-render with new data
4. Scroll to top (optional)
```

#### Procedure: Back Navigation
```javascript
Event: onClick (back button)
    ↓
1. Call onBack callback
2. Parent clears timetableData
3. TimetableCard unmounts
4. InputCard mounts
5. State resets
```

---

## Styling System

### Tailwind CSS Configuration

**File:** `tailwind.config.ts`

**Custom Classes:**
```css
/* Glass morphism effect */
.glass-card {
  @apply bg-background/80 backdrop-blur-lg border border-border/50 shadow-xl;
}

/* Glass button */
.glass-button {
  @apply bg-primary/90 hover:bg-primary transition-all duration-300;
}

/* Text gradient */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60;
}

/* Glow effect */
.glow-green {
  @apply shadow-[0_0_20px_rgba(34,197,94,0.3)];
}
```

### Component Styling Procedures

#### Procedure: Responsive Layout
```typescript
// Mobile-first approach
<div className="
  p-4                    // Mobile: 16px padding
  md:p-8                 // Tablet: 32px padding
  lg:p-12                // Desktop: 48px padding
  max-w-2xl              // Max width constraint
  mx-auto                // Center horizontally
">
```

#### Procedure: Conditional Styling
```typescript
// Dynamic class based on state
<button
  className={`
    px-4 py-2 rounded-lg
    transition-all
    ${view === 'today'
      ? 'glass-button scale-105'
      : 'bg-secondary/40 hover:bg-secondary/60'
    }
  `}
>
```

#### Procedure: Animation Classes
```typescript
// Fade in animation
<div className="animate-fade-in">

// Scale animation
<div className="animate-scale-in">

// Pulse effect
<div className="animate-pulse">

// Bounce effect
<div className="bounce-slow">
```

---

## Animation and Effects

### 1. Background Animations

**Implementation:**
```tsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Animated orb 1 */}
  <div className="
    absolute top-20 left-10
    w-72 h-72
    bg-primary/10 rounded-full blur-3xl
    animate-pulse
  "/>
  
  {/* Animated orb 2 */}
  <div className="
    absolute bottom-20 right-10
    w-96 h-96
    bg-primary/10 rounded-full blur-3xl
    animate-pulse
  " style={{ animationDelay: '1s' }}/>
  
  {/* Center glow */}
  <div className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-96 h-96
    bg-primary/5 rounded-full blur-3xl
  "/>
</div>
```

### 2. Component Transitions

**Card Entry Animation:**
```tsx
// Scale and fade in
<div className="animate-scale-in">
  {/* Card content */}
</div>

// CSS (in index.css)
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 3. Loading State Animation

**Spinner:**
```tsx
<div className="
  animate-spin
  w-16 h-16
  border-4 border-primary border-t-transparent
  rounded-full
  mx-auto
"/>
```

### 4. Hover Effects

**Button Hover:**
```tsx
<button className="
  transition-all duration-300
  hover:scale-105
  hover:shadow-lg
  active:scale-95
">
```

**Table Row Hover:**
```tsx
<tr className="
  transition-colors
  hover:bg-secondary/30
">
```

### 5. Toast Animations

**Using Sonner:**
```typescript
import { toast } from 'sonner';

// Success toast
toast.success('Timetable loaded!', {
  duration: 3000,
  position: 'top-center'
});

// Error toast
toast.error('Roll number not found', {
  duration: 4000,
  position: 'top-center'
});
```

---

## Responsive Design

### Breakpoint System

```typescript
// Tailwind breakpoints
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Responsive Procedures

#### Procedure: Mobile Layout
```tsx
<div className="
  // Mobile (< 768px)
  p-4
  text-sm
  grid-cols-1
  
  // Tablet (≥ 768px)
  md:p-8
  md:text-base
  md:grid-cols-2
  
  // Desktop (≥ 1024px)
  lg:p-12
  lg:text-lg
  lg:grid-cols-3
">
```

#### Procedure: Hide/Show Elements
```tsx
{/* Hide on mobile, show on desktop */}
<div className="hidden lg:table-cell">
  Faculty column
</div>

{/* Show on mobile, hide on desktop */}
<div className="md:hidden">
  Mobile navigation
</div>
```

#### Procedure: Responsive Table
```tsx
<div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr>
        <th>Time</th>
        <th>Subject</th>
        <th className="hidden md:table-cell">Room</th>
        <th className="hidden lg:table-cell">Faculty</th>
      </tr>
    </thead>
  </table>
</div>
```

#### Procedure: Responsive Grid
```tsx
<div className="
  grid
  grid-cols-2        // 2 columns on mobile
  md:grid-cols-4     // 4 columns on tablet+
  gap-4
">
  {/* Statistics cards */}
</div>
```

### Mobile Optimization

**Viewport Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Touch-Friendly Targets:**
```tsx
// Minimum 44x44px touch targets
<button className="min-h-[44px] min-w-[44px]">
```

**Mobile Gestures:**
- Tap: Button clicks
- Scroll: View timetable
- Swipe: (Future: switch days)

---

## Error Handling

### Error Display Procedures

#### 1. Inline Validation Errors
```tsx
{error && (
  <p className="
    text-destructive
    text-sm
    mt-2
    animate-fade-in
  ">
    {error}
  </p>
)}
```

#### 2. Toast Notifications
```typescript
// Error toast
try {
  await fetchData();
} catch (error) {
  toast.error(error.message || 'An error occurred');
}
```

#### 3. Empty State
```tsx
if (todaySchedule.length === 0) {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h2>No Classes Today!</h2>
      <p>Enjoy your break!</p>
    </div>
  );
}
```

#### 4. Loading State
```tsx
{loading && (
  <div className="glass-card p-12 text-center">
    <div className="animate-spin ..."></div>
    <p>Loading your timetable...</p>
  </div>
)}
```

### Error Recovery Flow

```
Error Occurs
    ↓
Display Error
    ├── Inline (validation)
    ├── Toast (fetch errors)
    └── Empty state (no data)
    ↓
User Actions
    ├── Correct input
    ├── Retry submission
    └── Go back
    ↓
Clear Error
    ↓
Normal Flow Resumes
```

---

## Performance Optimization

### Optimization Techniques

#### 1. Code Splitting
```typescript
// Lazy load routes (if needed)
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
```

#### 2. Memoization
```typescript
// Memoize expensive calculations
const statistics = useMemo(() => {
  return {
    totalClasses: schedule.filter(p => !p.subject.includes('break')).length,
    labSessions: schedule.filter(p => p.subject.includes('lab')).length
  };
}, [schedule]);
```

#### 3. Debouncing (if needed)
```typescript
// Debounce search input
const debouncedSearch = useDebounce(searchTerm, 300);
```

#### 4. Virtual Scrolling (for large lists)
```typescript
// Use react-window for long weekly schedules
import { FixedSizeList } from 'react-window';
```

#### 5. Image Optimization
```tsx
// Lazy load images
<img loading="lazy" src="..." alt="..." />
```

### Performance Monitoring

**Metrics to Track:**
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Largest Contentful Paint (LCP)
- Component render time

**Tools:**
- React DevTools Profiler
- Chrome DevTools Performance
- Lighthouse audits

---

## Accessibility

### ARIA Labels
```tsx
<button
  aria-label="Get today's timetable"
  aria-disabled={loading}
>
  Submit
</button>
```

### Keyboard Navigation
```tsx
// Tab order
<input tabIndex={1} />
<button tabIndex={2} />

// Enter key submission
<form onSubmit={handleSubmit}>
```

### Screen Reader Support
```tsx
<div role="status" aria-live="polite">
  {loading && "Loading timetable..."}
</div>
```

### Color Contrast
- Ensure WCAG AA compliance
- Test with contrast checkers
- Use semantic colors

---

## Testing Procedures

### Component Testing

```typescript
// Test InputCard rendering
test('renders input card', () => {
  render(<InputCard onSubmit={mockSubmit} />);
  expect(screen.getByText('KIIT Saathi')).toBeInTheDocument();
});

// Test validation
test('shows error for invalid input', () => {
  render(<InputCard onSubmit={mockSubmit} />);
  fireEvent.submit(screen.getByRole('form'));
  expect(screen.getByText(/enter your roll number/i)).toBeInTheDocument();
});

// Test TimetableCard
test('displays timetable data', () => {
  const mockData = {
    section: 'CSE-1',
    today: { timetable: [...] }
  };
  render(<TimetableCard data={mockData} onBack={jest.fn()} />);
  expect(screen.getByText('CSE-1')).toBeInTheDocument();
});
```

### Integration Testing

```typescript
// Test full user flow
test('complete user journey', async () => {
  render(<App />);
  
  // Enter roll number
  const input = screen.getByPlaceholderText(/roll number/i);
  fireEvent.change(input, { target: { value: '2305070' } });
  
  // Submit
  fireEvent.click(screen.getByText(/get.*timetable/i));
  
  // Wait for data
  await waitFor(() => {
    expect(screen.getByText(/CSE-1/i)).toBeInTheDocument();
  });
});
```

---

## Build and Deployment

### Build Procedure

```bash
# Development build
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Build Output Structure
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
└── data/
    └── *.xlsx
```

### Environment Configuration

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false
  }
});
```

---

## Best Practices

### Code Quality
1. **Component Organization:** One component per file
2. **Props Validation:** Use TypeScript interfaces
3. **State Management:** Keep state close to usage
4. **Side Effects:** Use useEffect properly
5. **Event Handlers:** Name with 'handle' prefix

### UI/UX
1. **Loading States:** Always show feedback
2. **Error Messages:** Be specific and helpful
3. **Accessibility:** Support keyboard and screen readers
4. **Responsive:** Test on multiple devices
5. **Performance:** Optimize re-renders

### Styling
1. **Consistency:** Use design tokens
2. **Utility-First:** Leverage Tailwind
3. **Animations:** Use sparingly
4. **Responsive:** Mobile-first approach
5. **Dark Mode:** Support theme switching

---

## Troubleshooting

### Common Issues

**Issue: Component not re-rendering**
```typescript
// Solution: Ensure state is updated immutably
setData([...data, newItem]);  // Good
setData(data.push(newItem));  // Bad
```

**Issue: Infinite re-render loop**
```typescript
// Solution: Add dependency array
useEffect(() => {
  fetchData();
}, []);  // Runs once
```

**Issue: Styles not applying**
```typescript
// Solution: Check class order and specificity
className="hover:bg-primary bg-secondary"  // Works
className="bg-secondary hover:bg-primary"  // Better
```

---

## Conclusion

The frontend of KIIT Timetable is built with modern React practices, emphasizing user experience, performance, and maintainability. This modular architecture allows for easy updates and feature additions while maintaining code quality.
