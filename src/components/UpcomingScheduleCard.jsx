

const UpcomingScheduleCard = ({ title, time, icon }) => {
  return (
    <div className="bg-indigo-100 text-indigo-700 p-4 rounded-xl shadow-sm text-sm font-medium">
      <div className="flex items-center justify-between">
        <span>{title}</span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <div className="text-xs text-indigo-600 mt-2">{time}</div>
    </div>
  );
};

export default UpcomingScheduleCard;
