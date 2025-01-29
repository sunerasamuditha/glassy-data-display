import { Bar } from "recharts";
import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DistrictChartProps {
  data: {
    district: string;
    count: number;
  }[];
}

export function DistrictChart({ data }: DistrictChartProps) {
  return (
    <div className="glass-card h-[400px]">
      <h3 className="text-lg font-semibold mb-4">District-wise Seminars</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
          <XAxis
            dataKey="district"
            angle={-45}
            textAnchor="end"
            height={60}
            interval={0}
            stroke="#6b7280"
          />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}