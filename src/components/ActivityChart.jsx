
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { name: "Mon", appointments: 2 },
  { name: "Tue", appointments: 3 },
  { name: "Wed", appointments: 4 },
  { name: "Thu", appointments: 2 },
  { name: "Fri", appointments: 5 },
  { name: "Sat", appointments: 3 },
  { name: "Sun", appointments: 1 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <p className="text-sm text-gray-500 mb-2">3 appointments this week</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={25}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="appointments" fill="#5A67D8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
