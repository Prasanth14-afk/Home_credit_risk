'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import DashboardPage from '@/components/DashboardPage';
import PredictionPage from '@/components/PredictionPage';

interface DashboardData {
  overview: {
    totalApplications: number;
    defaultRate: number;
    approvalRate: number;
    avgCreditAmount: number;
    avgIncome: number;
    totalCreditVolume: number;
  };
  riskDistribution: Array<{ name: string; value: number; color: string }>;
  genderDistribution: Array<{ name: string; value: number; color: string }>;
  incomeTypeDistribution: Array<{ name: string; value: number }>;
  contractTypeDistribution: Array<{ name: string; value: number }>;
  educationDistribution: Array<{ name: string; value: number }>;
  creditAmountDistribution: Array<{ range: string; count: number }>;
  ageDistribution: Array<{ ageGroup: string; count: number }>;
  defaultRateByIncome: Array<{ category: string; rate: number; count: number }>;
  monthlyApplications: Array<{ month: string; applications: number }>;
  familyStatusDistribution: Array<{ name: string; value: number }>;
  housingTypeDistribution: Array<{ name: string; value: number }>;
  avgCreditByEducation: Array<{ education: string; avgCredit: number }>;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'prediction'>('dashboard');

  useEffect(() => {
    // Load dashboard data
    fetch('/dashboard-data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-xl text-white">Loading Dashboard...</p>
        </motion.div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <p className="text-xl text-red-400">Error loading dashboard data</p>
          <p className="text-sm text-gray-400 mt-2">Please ensure dashboard-data.json is available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sidebar */}
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content */}
      <div className="flex-1 relative z-10 overflow-auto">
        <div className="container mx-auto max-w-[2000px]">
          {currentPage === 'dashboard' ? (
            <DashboardPage data={data} />
          ) : (
            <PredictionPage />
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 pb-8 text-center text-gray-500 text-sm"
          >
            <p>© 2025 Home Credit Risk Analytics | Built with Next.js, TypeScript & Recharts</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
