"use client"

import React from 'react';

const CalendarFilters = ({ currentDate, setCurrentDate }) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setCurrentDate(new Date(currentDate.getFullYear(), newMonth, 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
  };

  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      <select
        value={currentDate.getMonth()}
        onChange={handleMonthChange}
        className="bg-gray-800 border-gray-700 text-white rounded-md p-2"
      >
        {monthNames.map((name, index) => (
          <option key={name} value={index}>
            {name}
          </option>
        ))}
      </select>
      <select
        value={currentDate.getFullYear()}
        onChange={handleYearChange}
        className="bg-gray-800 border-gray-700 text-white rounded-md p-2"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalendarFilters;
