

export default function HealthCard({ icon, title, date, progress, color }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2 w-full">
      <div className="flex items-center gap-2">
        <img src={icon} alt={title} className="w-6 h-6" />
        <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
      </div>
      <p className="text-xs text-gray-400">Date: {date}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full`}
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}
