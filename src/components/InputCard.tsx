import { useState } from "react";

interface InputCardProps {
  onSubmit: (rollNumber: string, view: "today" | "week") => void;
}

const InputCard: React.FC<InputCardProps> = ({ onSubmit }) => {
  const [rollNumber, setRollNumber] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState<"today" | "week">("today");
  const [year, setYear] = useState("");
  const [scheme, setScheme] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rollTrim = rollNumber.trim();
    const yearTrim = year.trim();
    const schemeTrim = scheme.trim();
    const sectionTrim = section.trim();

    // Check if roll number is provided
    if (rollTrim) {
      if (!/^\d{6,10}$/.test(rollTrim)) {
        setError("Please enter a valid 6-10 digit roll number");
        return;
      }
      setError("");
      onSubmit(rollTrim, view);
      return;
    }

    // For 1st year: Check if year + scheme + section is provided
    if (yearTrim === "1st") {
      if (!schemeTrim) {
        setError("Please select a scheme");
        return;
      }
      if (!sectionTrim) {
        setError("Please select a section");
        return;
      }
      setError("");
      // Format: "1st|A|A1" or "1st|B|B5"
      onSubmit(`${yearTrim}|${schemeTrim}|${sectionTrim.toUpperCase()}`, view);
      return;
    }

    // For other years: Check if year + section is provided
    if (yearTrim && sectionTrim) {
      setError("");
      // Format: "2nd|CSE-A" or "3rd|IT-1"
      onSubmit(`${yearTrim}|${sectionTrim.toUpperCase()}`, view);
      return;
    }

    // Validation messages
    if (yearTrim && !sectionTrim) {
      setError("Please enter a section");
      return;
    }

    // Neither option provided
    setError("Please enter either roll number OR select year and section");
  };

  // Get sections based on selected scheme
  const getSections = () => {
    if (!scheme) return [];
    
    if (scheme === "A") {
      return Array.from({ length: 30 }, (_, i) => `A${i + 1}`);
    } else if (scheme === "B") {
      return Array.from({ length: 31 }, (_, i) => `B${i + 1}`);
    }
    return [];
  };

  const sections = getSections();

  return (
    <div className="glass-card rounded-3xl mt-5 p-8 md:p-12 w-full max-w-2xl float">
      <div className="text-center mb-8">
        <h1 className="text-gradient font-poppins text-4xl md:text-5xl font-bold mb-4">
          Time Table 
        </h1>

      </div>

      {/* VIEW SELECTOR */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setView("today")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            view === "today"
              ? "glass-button scale-105"
              : "bg-secondary/40 hover:bg-secondary/60"
          }`}
        >
          Today
        </button>

        <button
          type="button"
          onClick={() => setView("week")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            view === "week"
              ? "glass-button scale-105"
              : "bg-secondary/40 hover:bg-secondary/60"
          }`}
        >
          Weekly
        </button>
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
            onChange={(e) => {
              setRollNumber(e.target.value);
              // Clear year, scheme and section when roll number is entered
              if (e.target.value.trim()) {
                setYear("");
                setScheme("");
                setSection("");
              }
            }}
            placeholder="e.g., 2305070 or 22051001"
            maxLength={10}
            className="w-full px-6 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-lg"
          />
        </div>
        <span className=" text-red-500  ">* Roll number does not work for 1st year students</span>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-4 text-muted-foreground">OR</span>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4">
            {/* Year Selection */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setScheme("");
                  setSection("");
                  // Clear roll number when year is selected
                  if (e.target.value) {
                    setRollNumber("");
                  }
                }}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-base"
              >
                <option value="">Select year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
              </select>
            </div>

            {/* Scheme Selection (only for 1st year) */}
            {year === "1st" && (
              <div>
                <label
                  htmlFor="scheme"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Scheme
                </label>
                <select
                  id="scheme"
                  value={scheme}
                  onChange={(e) => {
                    setScheme(e.target.value);
                    setSection(""); // Reset section when scheme changes
                    if (e.target.value) {
                      setRollNumber("");
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-base"
                >
                  <option value="">Select scheme</option>
                  <option value="A">Scheme A</option>
                  <option value="B">Scheme B</option>
                </select>
              </div>
            )}

            {/* Section Selection */}
            {year === "1st" && scheme ? (
              <div>
                <label
                  htmlFor="section"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Section
                </label>
                <select
                  id="section"
                  value={section}
                  onChange={(e) => {
                    setSection(e.target.value);
                    if (e.target.value) {
                      setRollNumber("");
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-base"
                >
                  <option value="">Select section</option>
                  {sections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              year && year !== "1st" && (
                <div>
                  <label
                    htmlFor="section"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Section
                  </label>
                  <input
                    id="section"
                    type="text"
                    value={section}
                    onChange={(e) => {
                      setSection(e.target.value);
                      if (e.target.value.trim()) {
                        setRollNumber("");
                      }
                    }}
                    placeholder="e.g., CSE-A, IT-1, M1, CE"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-base"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {error && (
          <p className="text-destructive text-sm mt-2 animate-fade-in">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="glass-button w-full py-4 rounded-xl font-poppins font-semibold text-lg text-foreground glow-green hover:scale-101 hover:bg-gray-200 transition-transform bg-gray-300"
        >
          Get Timetable 
        </button>
      </form>

      
    </div>
  );
};

export default InputCard;