import React from "react";

// Dummy data for demo
const weekDates = [
  {
    day: "Mon",
    date: 25,
    appointments: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }],
  },
  {
    day: "Tue",
    date: 26,
    appointments: [
      { time: "08:00" },
      { time: "09:00", color: "bg-pink-100 text-pink-700" },
      { time: "10:00" },
    ],
  },
  {
    day: "Wed",
    date: 27,
    appointments: [{ time: "12:00" }, { time: "-----" }, { time: "13:00" }],
  },
  {
    day: "Thu",
    date: 28,
    appointments: [
      { time: "10:00" },
      { time: "11:00", color: "bg-pink-100 text-pink-700" },
      { time: "----" },
    ],
  },
  {
    day: "Fri",
    date: 29,
    appointments: [{ time: "14:00" }, { time: "16:00" }, { time: "----" }],
  },
  {
    day: "Sat",
    date: 30,
    appointments: [
      { time: "12:00", color: "bg-indigo-100 text-indigo-700" },
      { time: "14:00" },
      { time: "15:00" },
    ],
  },
  {
    day: "Sun",
    date: 31,
    appointments: [
      { time: "09:00" },
      { time: "12:00" },
      { time: "01:00", color: "bg-green-100 text-green-700" },
    ],
  },
];

export default function CalendarView() {
  return (
    <div className="bg-[#f4f7ff] rounded-2xl shadow-lg p-6 w-full">
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#1e2a45]">October 2021</h3>
        <div className="flex space-x-2">
          <button className="text-xl px-2 text-gray-500 hover:text-blue-600">
            ◀
          </button>
          <button className="text-xl px-2 text-gray-500 hover:text-blue-600">
            ▶
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
        {weekDates.map(({ day }) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      
      <div className="grid grid-cols-7 gap-3">
        {weekDates.map(({ day, date, appointments }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border p-2 h-28 relative overflow-hidden"
          >
            
            <div className="text-sm font-bold text-gray-800 mb-3 flex justify-center">{date}</div>


            
            <div className="flex flex-col items-center gap-1 absolute top-8 left-0 right-0">

              {appointments.map((appt, idx) => (
                <div
                  key={idx}
                  className={`text-xs px-2 py-1 rounded-xl w-fit ${
                    appt.color || "bg-indigo-100 text-indigo-700"
                  }`}
                >
                  {appt.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
