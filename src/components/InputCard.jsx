import { useState } from 'react';

const InputCard = ({ onSubmit }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!rollNumber.trim()) {
      setError('Please enter your roll number');
      return;
    }
    
    if (!/^\d{7,8}$/.test(rollNumber.trim())) {
      setError('Please enter a valid 7-8 digit roll number');
      return;
    }
    
    setError('');
    onSubmit(rollNumber.trim());
  };

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-2xl float">
      <div className="text-center mb-8">
        <h1 className="text-gradient font-poppins text-4xl md:text-5xl font-bold mb-4">
          KIIT Saathi
        </h1>
        <p className="text-muted-foreground text-lg">
          Your Smart Timetable Companion
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="rollNumber" 
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Enter Your Roll Number
          </label>
          <input
            id="rollNumber"
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="e.g., 2305070 or 23051001"
            maxLength={8}
            className="w-full px-6 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-lg"
          />
          {error && (
            <p className="text-destructive text-sm mt-2 animate-fade-in">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="glass-button w-full py-4 rounded-xl font-poppins font-semibold text-lg text-foreground glow-green"
        >
          Get Today's Timetable 📚
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Try roll numbers like: 2305070, 23051001, or 2306001
        </p>
      </div>
    </div>
  );
};

export default InputCard;
