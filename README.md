# KIIT Timetable (KIIT Saathi) 📚

A smart, modern web application for KIIT University students to view their class schedules. Simply enter your roll number to get your personalized timetable.

![KIIT Timetable](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## ✨ Features

- 🔍 **Quick Lookup**: Enter your roll number to instantly view your timetable
- 📅 **Multiple Views**: Switch between today's schedule and full weekly view
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Client-side processing with smart caching
- 🌙 **Theme Support**: Ready for dark/light mode theming
- 📊 **Statistics**: View class counts, lab sessions, and timing info

## �� Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/KrishnaMohanty08/kiit-timetable.git

# Navigate to project directory
cd kiit-timetable

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📖 Documentation

Comprehensive documentation is available in the following files:

### 📋 [WORKFLOW.md](./WORKFLOW.md)
Complete workflow documentation covering:
- User journey and data flow
- Development and deployment processes
- Component interaction workflows
- Error handling procedures
- Best practices

### 🏗️ [SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md)
Detailed system architecture including:
- Component hierarchy and architecture diagrams
- Data models and flow
- Technology stack details
- Security and performance architecture
- Scalability considerations

### 🔧 [BACKEND_PROCEDURES.md](./BACKEND_PROCEDURES.md)
Backend data processing documentation:
- Excel file parsing procedures
- Data transformation algorithms
- Caching mechanisms
- Query processing
- Data update procedures

### 🎨 [FRONTEND_PROCEDURES.md](./FRONTEND_PROCEDURES.md)
Frontend development guide:
- Component architecture and state management
- User interaction flows
- Styling and animation systems
- Responsive design procedures
- Performance optimization

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI framework
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Data fetching and caching
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Data Processing
- **XLSX 0.18.5** - Excel file parsing
- **Client-side caching** - Performance optimization

## 📁 Project Structure

```
kiit-timetable/
├── public/
│   ├── data/                          # Excel timetable files
│   │   └── 6th_sem_Time-Table_and_Section_Detail.xlsx
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── InputCard.jsx              # Roll number input
│   │   ├── TimetableCard.jsx          # Schedule display
│   │   └── ui/                        # Reusable UI components
│   ├── pages/
│   │   ├── Index.tsx                  # Main page
│   │   └── NotFound.tsx               # 404 page
│   ├── utils/
│   │   ├── parseExcel.js              # Excel parsing logic
│   │   └── generateJsonFromExcel.js   # Data generation
│   ├── App.tsx                        # Root component
│   └── main.tsx                       # Entry point
├── WORKFLOW.md                        # Workflow documentation
├── SYSTEM_DESIGN.md                   # Architecture documentation
├── BACKEND_PROCEDURES.md              # Backend guide
├── FRONTEND_PROCEDURES.md             # Frontend guide
└── README.md                          # This file
```

## 📝 Usage

1. **Open the Application**: Navigate to the app in your browser
2. **Select View**: Choose between "Today" or "Weekly" view
3. **Enter Roll Number**: Input your 6-8 digit roll number (e.g., 2305070)
4. **View Timetable**: Your personalized schedule will be displayed
5. **Navigate**: Toggle between today and weekly views, or go back to search again

## 🔄 Data Update Process

To update timetable data for a new semester:

1. Place new Excel file in `public/data/`
2. Update file reference in `src/utils/parseExcel.js`
3. Test with sample roll numbers
4. Build and deploy

See [BACKEND_PROCEDURES.md](./BACKEND_PROCEDURES.md) for detailed instructions.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in the dist/ folder
# Deploy the dist/ folder to your hosting platform
```

### Recommended Hosting Platforms
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 👥 Authors

- **Krishna Mohanty** - [KrishnaMohanty08](https://github.com/KrishnaMohanty08)

## 🙏 Acknowledgments

- KIIT University for the timetable data structure
- All contributors and users of this application
- Open source community for amazing tools and libraries

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the maintainer

## 🗺️ Roadmap

- [ ] Offline support with Service Worker
- [ ] Dark mode toggle
- [ ] Export to calendar (iCal)
- [ ] Class reminders and notifications
- [ ] Multiple semester support
- [ ] Faculty view
- [ ] Room availability checker
- [ ] Backend API integration

## 📊 System Overview

### Architecture
```
User Interface (React)
        ↓
State Management (React Query)
        ↓
Data Processing (XLSX Parser)
        ↓
Static Data (Excel Files)
```

### Key Features
- **Client-side processing**: All data parsing happens in the browser
- **Smart caching**: Parse Excel only once per session
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Type safety**: TypeScript for better development experience
- **Modern tooling**: Vite for lightning-fast builds

## 🔒 Security

- No user data collection
- No backend server required
- Client-side only processing
- Static file hosting
- XSS protection through React

## 📈 Performance

- **First Load**: ~200-700ms (including Excel parse)
- **Cached Load**: <5ms (instant)
- **Bundle Size**: Optimized with code splitting
- **Lighthouse Score**: 90+ on all metrics

---

Made with 💚 for KIIT Students
