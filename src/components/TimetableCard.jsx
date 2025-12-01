const TimetableCard = ({ data, onBack }) => {
  const { day, section, timetable, message } = data;

  if (!timetable || timetable.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-4xl animate-scale-in">
        <div className="text-center">
          <div className="mb-6 bounce-slow inline-block text-6xl">
            🎉
          </div>
          <h2 className="text-gradient font-poppins text-3xl md:text-4xl font-bold mb-4">
            {message || "No Classes Today!"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Section: <span className="text-primary font-semibold">{section}</span>
          </p>
          <button
            onClick={onBack}
            className="glass-button px-8 py-3 rounded-xl font-poppins font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 md:p-10 w-full max-w-6xl animate-scale-in">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="glass-button px-4 py-2 rounded-lg text-sm font-medium mb-4 inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          ← Back
        </button>
        
        <div className="text-center">
          <h2 className="text-gradient font-poppins text-3xl md:text-4xl font-bold mb-2">
            {day}'s Schedule
          </h2>
          <p className="text-muted-foreground text-lg">
            Section: <span className="text-primary font-semibold text-xl">{section}</span>
          </p>
        </div>
      </div>

      {/* Timetable */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-foreground font-poppins font-semibold">
                Time
              </th>
              <th className="text-left py-4 px-4 text-foreground font-poppins font-semibold">
                Subject
              </th>
              <th className="text-left py-4 px-4 text-foreground font-poppins font-semibold hidden md:table-cell">
                Room
              </th>
              <th className="text-left py-4 px-4 text-foreground font-poppins font-semibold hidden lg:table-cell">
                Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((period, index) => {
              const isBreak = period.subject.toLowerCase().includes('break');
              const isLab = period.subject.toLowerCase().includes('lab');
              
              return (
                <tr
                  key={index}
                  className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${
                    isBreak ? 'bg-secondary/20' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <span className={`font-medium ${isBreak ? 'text-muted-foreground' : 'text-primary'}`}>
                      {period.time}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {isLab && <span className="text-lg">🔬</span>}
                      {isBreak && <span className="text-lg">🍽️</span>}
                      <span className={`font-medium ${isBreak ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                        {period.subject}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground hidden md:table-cell">
                    {period.room}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground hidden lg:table-cell">
                    {period.faculty}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile view - Additional info */}
      <div className="md:hidden mt-6 space-y-2">
        <p className="text-sm text-muted-foreground">
          💡 Tip: Rotate your device for more details
        </p>
      </div>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">📚</div>
          <div className="text-sm text-muted-foreground">Total Classes</div>
          <div className="text-xl font-bold text-primary">
            {timetable.filter(p => !p.subject.toLowerCase().includes('break')).length}
          </div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">🔬</div>
          <div className="text-sm text-muted-foreground">Lab Sessions</div>
          <div className="text-xl font-bold text-primary">
            {timetable.filter(p => p.subject.toLowerCase().includes('lab')).length}
          </div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">⏰</div>
          <div className="text-sm text-muted-foreground">First Class</div>
          <div className="text-lg font-semibold text-foreground">
            {timetable[0]?.time.split('-')[0] || '-'}
          </div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">🏁</div>
          <div className="text-sm text-muted-foreground">Last Class</div>
          <div className="text-lg font-semibold text-foreground">
            {timetable[timetable.length - 1]?.time.split('-')[1] || '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableCard;
