'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface AnimatedLineChartProps {
  data: Array<{
    [key: string]: any;
  }>;
  title: string;
  dataKeys: string[];
  categoryKey: string;
  height?: number;
  colors?: string[];
  gradient?: boolean;
}

export default function AnimatedLineChart({
  data,
  title,
  dataKeys,
  categoryKey,
  height = 300,
  colors = ['#0ea5e9', '#8b5cf6', '#ec4899'],
  gradient = false,
}: AnimatedLineChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-effect-dark rounded-lg p-3 shadow-xl border border-white/20">
          <p className="text-white font-semibold mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        {gradient ? (
          <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <defs>
              {dataKeys.map((key, index) => (
                <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey={categoryKey}
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            {dataKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                fill={`url(#gradient-${key})`}
                strokeWidth={2}
                animationBegin={0}
                animationDuration={1000}
              />
            ))}
          </AreaChart>
        ) : (
          <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey={categoryKey}
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            {dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                dot={{ fill: colors[index % colors.length], r: 4 }}
                activeDot={{ r: 6 }}
                animationBegin={0}
                animationDuration={1000}
              />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  );
}
