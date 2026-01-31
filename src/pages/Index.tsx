import { useState } from 'react';
import InputCard from '../components/InputCard.js';
import TimetableCard from '../components/TimetableCard.js';
import { getFullWeekTimetable, getTodayTimetable } from '../utils/parseExcel.js';
import { getTimetableByIdentifier } from '@/utils/parse1stCse.ts';
import { toast } from 'sonner';
// import { Footer } from '@/components/Footer.js';
import { NavLink } from '@/components/NavLink.tsx';
import { Calendar, Clock } from 'lucide-react';


const TimetableSaathi = () => {
  const [loading, setLoading] = useState(false);
  const [timetableData, setTimetableData] = useState<any | null>(null);
  const [view, setView] = useState<'today' | 'week'>('today');

  const handleRollNumberSubmit = async (rollNumber: string, viewType: 'today' | 'week') => {
    setView(viewType);

    setLoading(true);

    try {
      // Check if it's a 1st year identifier (format: "1st|A|A5" or "1st|B|B10")
      const is1stYear = rollNumber.startsWith('1st|');

      if (is1stYear) {
        // Use parse1stCse for 1st year students
        const result = getTimetableByIdentifier(rollNumber, 'week');
        const todayResult = getTimetableByIdentifier(rollNumber, 'today');
        
        // Transform to match expected format
        const fullData = {
          section: result.section,
          fullTimetable: result.timetable.reduce((acc, day) => {
            acc[day.day.charAt(0) + day.day.slice(1).toLowerCase()] = day.slots.map(slot => ({
              time: slot.time,
              subject: slot.subject,
              room: slot.room,
              faculty: '-'
            }));
            return acc;
          }, {} as Record<string, any[]>)
        };

        const todayData = {
          day: todayResult.timetable[0]?.day.charAt(0) + todayResult.timetable[0]?.day.slice(1).toLowerCase() || 'Monday',
          section: todayResult.section,
          timetable: todayResult.timetable[0]?.slots.map(slot => ({
            time: slot.time,
            subject: slot.subject,
            room: slot.room,
            faculty: '-'
          })) || []
        };

        setTimetableData({ ...fullData, today: todayData });

        if (todayData.timetable.length === 0) {
          toast.success("No classes today! 🎉");
        } else {
          toast.success(`Timetable loaded for ${fullData.section}!`);
        }
      } else {
        // Use parseExcel for 2nd/3rd/4th year and other branches
        const fullData = await getFullWeekTimetable(rollNumber);
        const todayData = await getTodayTimetable(rollNumber);
        setTimetableData({ ...fullData, today: todayData });

        if (todayData.timetable.length === 0) {
          toast.success("No classes today! 🎉");
        } else {
          toast.success(`Timetable loaded for ${fullData.section}!`);
        }
      }
    } catch (error: any) {
      console.error("Error fetching timetable:", error);
      toast.error(error?.message || "Roll number not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setTimetableData(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden bg-black">
      {/* Decorative Background Elements */}
      {/* <NavLinks /> */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Calendar Icon Shape */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-3xl opacity-60 blur-2xl"></div>
        
        {/* Bottom Right - Clock Icon Shape */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-kiit-green/20 rounded-full opacity-50 blur-3xl" style={{ animationDelay: '1s' }}></div>
        
        {/* Center - Accent Element */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        
        {/* Bottom Left - Secondary Accent */}
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-200/25 rounded-full opacity-35 blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {loading ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl border border-slate-100">
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-kiit-green border-r-blue-500 rounded-full animate-spin"></div>
              </div>
            </div>
            <p className="text-foreground text-lg font-semibold">Loading your timetable...</p>
            <p className="text-slate-500 text-sm mt-2">Please wait a moment</p>
          </div>
        ) : timetableData ? (
          <TimetableCard
            data={timetableData}
            view={view}
            onViewChange={setView}
            onBack={handleBack}
          />
        ) : (
          <InputCard onSubmit={handleRollNumberSubmit} />
        )}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default TimetableSaathi;
