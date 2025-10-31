'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface AnimatedBarChartProps {
  data: Array<{
    name?: string;
    value?: number;
    [key: string]: any;
  }>;
  title: string;
  dataKey: string;
  categoryKey: string;
  height?: number;
  color?: string;
}

export default function AnimatedBarChart({
  data,
  title,
  dataKey,
  categoryKey,
  height = 300,
  color = '#0ea5e9',
}: AnimatedBarChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-effect-dark rounded-lg p-3 shadow-xl border border-white/20">
          <p className="text-white font-semibold">{payload[0].payload[categoryKey]}</p>
          <p className="text-primary-300">
            {typeof payload[0].value === 'number' && payload[0].value < 1
              ? `${(payload[0].value * 100).toFixed(1)}%`
              : payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 shadow-2xl hover:shadow-accent-500/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey={categoryKey}
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar
            dataKey={dataKey}
            fill={color}
            radius={[8, 8, 0, 0]}
            animationBegin={0}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={color}
                className="hover:opacity-80 transition-opacity"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
