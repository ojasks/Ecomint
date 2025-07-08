import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const carbonSavingsData = [
  { date: 'Jul 1', savings: 0.6 },
  { date: 'Jul 2', savings: 1.2 },
  { date: 'Jul 3', savings: 1.8 },
  { date: 'Jul 4', savings: 2.3 },
  { date: 'Jul 5', savings: 0.9 },
  { date: 'Jul 6', savings: 1.4 },
  { date: 'Jul 7', savings: 2.0 },
]

const CarbonSG = () => {
  return (
<div className="bg-white p-6 rounded-xl shadow-md w-full h-72">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Carbon Savings Over Time
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={carbonSavingsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CarbonSG