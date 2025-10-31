'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  LayoutDashboard,
  Brain,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Shield,
  Settings,
  FileText,
  BarChart3,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPage: 'dashboard' | 'prediction';
  onPageChange: (page: 'dashboard' | 'prediction') => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Overview & Analytics',
    },
    {
      id: 'prediction',
      label: 'Prediction',
      icon: Brain,
      description: 'Risk Assessment',
    },
  ];

  const bottomItems = [
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0, width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-white/10 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <motion.div
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          className="flex items-center gap-3"
        >
          <Shield className="w-8 h-8 text-primary-400" />
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-white">Home Credit</h2>
              <p className="text-xs text-gray-400">Risk Analytics</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id as 'dashboard' | 'prediction')}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300',
                  'relative overflow-hidden group',
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-4 w-full">
                  <Icon className={cn('w-5 h-5', isActive && 'animate-pulse')} />
                  
                  {!isCollapsed && (
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-xs opacity-70">{item.description}</p>
                    </div>
                  )}

                  {!isCollapsed && isActive && (
                    <TrendingUp className="w-4 h-4 animate-bounce" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="my-6 mx-6 border-t border-white/10" />

        {/* Bottom Navigation */}
        <nav className="space-y-2 px-3">
          {bottomItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300',
                  'text-gray-400 hover:text-white hover:bg-white/5'
                )}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Stats Panel (when expanded) */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-3 mb-4 p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-300">System Status</span>
          </div>
          <p className="text-sm font-semibold text-white mb-1">All Systems Operational</p>
          <p className="text-xs text-gray-400">Last updated: Just now</p>
        </motion.div>
      )}

      {/* Collapse Button */}
      <motion.button
        onClick={() => setIsCollapsed(!isCollapsed)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -right-4 top-24 w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 
                   flex items-center justify-center text-white shadow-lg hover:shadow-primary-500/50 transition-shadow"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </motion.button>
    </motion.div>
  );
}
