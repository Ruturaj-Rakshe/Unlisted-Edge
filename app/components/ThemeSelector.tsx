"use client";
import { useState } from "react";

export default function ThemeSelector({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleThemeChange = (selectedAge: string, selectedGender: string) => {
    if (selectedAge && selectedGender) {
      const ageFormat = selectedAge === "40+" ? "40plus" : selectedAge;
      const theme = `theme-${ageFormat}-${selectedGender}`;
      setTheme(theme);
      console.log("Theme set to:", theme);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-xl hover:scale-105 transition z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
        </button>
      )}

      {/* Theme Selector */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-xl border-2 border-gray-200 z-50 p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-black">Choose Your Theme</h2>
            <button 
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
          </div>

          {/* Age Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-black">Age Group:</label>
            <select
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                handleThemeChange(e.target.value, gender);
              }}
              className="w-full p-2 border rounded-md text-black"
            >
              <option value="">Select Age</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="40+">40+</option>
            </select>
          </div>

          {/* Gender Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-black">Gender:</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                handleThemeChange(age, e.target.value);
              }}
              className="w-full p-2 border rounded-md text-black"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Current Theme Display */}
          {age && gender && (
            <div className="text-center text-sm text-green-600 font-medium">
              ✅ Theme Applied: {age} {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </div>
          )}
        </div>
      )}
    </>
  );
}