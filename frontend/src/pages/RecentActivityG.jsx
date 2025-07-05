import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const ecoActionData = [
{ date: 'Jul 1', actions: 1 },
{ date: 'Jul 2', actions: 3 },
{ date: 'Jul 3', actions: 2 },
{ date: 'Jul 4', actions: 4 },
{ date: 'Jul 5', actions: 2 },
{ date: 'Jul 6', actions: 3 },
{ date: 'Jul 7', actions: 5 },
];

const RecentActivityG = () => {
  return (
<div className="bg-white p-6 rounded-xl shadow-md w-full h-72">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Eco Actions Per Day
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ecoActionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="actions"
            stroke="#0ea5e9"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RecentActivityG