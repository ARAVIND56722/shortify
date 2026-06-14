import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TrendChart = ({
  data,
}) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="_id" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="clicks"
          stroke="#6366F1"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrendChart;