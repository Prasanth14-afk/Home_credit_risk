'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { cn, formatCurrency, formatCompactCurrency, formatNumber, formatPercentage } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: 'up' | 'down' | 'activity';
  color?: 'blue' | 'green' | 'red' | 'purple';
  delay?: number;
  format?: 'currency' | 'compact-currency' | 'number' | 'percentage' | 'none';
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  color = 'blue',
  delay = 0,
  format = 'none',
}: StatCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'string') return val;
    
    switch (format) {
      case 'currency':
        return formatCurrency(val);
      case 'compact-currency':
        return formatCompactCurrency(val);
      case 'number':
        return formatNumber(val);
      case 'percentage':
        return formatPercentage(val);
      default:
        return val;
    }
  };

  const colorClasses = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-400/50',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-400/50',
    red: 'from-red-500/20 to-pink-500/20 border-red-500/30 hover:border-red-400/50',
    purple: 'from-purple-500/20 to-fuchsia-500/20 border-purple-500/30 hover:border-purple-400/50',
  };

  const iconColorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    red: 'text-red-400',
    purple: 'text-purple-400',
  };

  const IconComponent = icon === 'up' ? TrendingUp : icon === 'down' ? TrendingDown : Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border-2 transition-all duration-300 shadow-xl',
        'bg-gradient-to-br',
        colorClasses[color]
      )}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-16 -mt-16" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">{title}</p>
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {formatValue(value)}
            </motion.h3>
          </div>
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            className={cn('p-3 rounded-xl bg-white/10', iconColorClasses[color])}
          >
            <IconComponent className="w-6 h-6" />
          </motion.div>
        </div>
        
        {change !== undefined && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
            className="flex items-center gap-2"
          >
            {change >= 0 ? (
              <TrendingUp className="w-4 h-4 text-green-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400" />
            )}
            <span className={cn(
              'text-sm font-semibold',
              change >= 0 ? 'text-green-400' : 'text-red-400'
            )}>
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-400">vs last period</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
