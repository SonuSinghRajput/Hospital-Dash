

const SimpleAppointmentCard = ({ title, time, doctor, icon, bgColor = 'bg-indigo-100', textColor = 'text-indigo-700' }) => {
  return (
    <div className={`p-4 rounded-xl shadow-sm ${bgColor} ${textColor} w-full`}>
      
      <div className="flex items-center justify-between font-semibold text-sm">
        <span>{title}</span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>

     
      <div className="text-xs mt-2">
        {time}<br />
        {doctor}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
