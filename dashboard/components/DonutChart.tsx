'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  title: string;
  height?: number;
}

const COLORS = ['#0ea5e9', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

export default function DonutChart({ data, title, height = 300 }: DonutChartProps) {
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || COLORS[index % COLORS.length],
  }));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const percentage = ((payload[0].value / total) * 100).toFixed(1);
      return (
        <div className="glass-effect-dark rounded-lg p-3 shadow-xl border border-white/20">
          <p className="text-white font-semibold">{payload[0].name}</p>
          <p className="text-primary-300">
            Value: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-accent-300">
            {percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy }: any) => {
    return (
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-white"
      >
        <tspan x={cx} dy="-0.5em" className="text-2xl font-bold">
          {total.toLocaleString()}
        </tspan>
        <tspan x={cx} dy="1.5em" className="text-sm opacity-70">
          Total
        </tspan>
      </text>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={800}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="hover:opacity-80 transition-opacity cursor-pointer"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value, entry: any) => (
              <span className="text-gray-300 text-sm">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
