'use client';

import { motion } from 'framer-motion';
import { Shield, Users, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from '@/components/StatCard';
import DonutChart from '@/components/DonutChart';
import AnimatedBarChart from '@/components/AnimatedBarChart';
import AnimatedLineChart from '@/components/AnimatedLineChart';

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

interface DashboardPageProps {
  data: DashboardData;
}

export default function DashboardPage({ data }: DashboardPageProps) {
  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-2">
          <Shield className="w-10 h-10 text-primary-400" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 bg-clip-text text-transparent">
              Credit Risk Analytics
            </h1>
            <p className="text-gray-400 mt-1">Comprehensive overview of credit applications and risk metrics</p>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <StatCard
          title="Total Applications"
          value={data.overview.totalApplications}
          icon="activity"
          color="blue"
          format="number"
          delay={0}
        />
        <StatCard
          title="Default Rate"
          value={data.overview.defaultRate}
          icon="down"
          color="red"
          format="percentage"
          delay={0.1}
        />
        <StatCard
          title="Approval Rate"
          value={data.overview.approvalRate}
          icon="up"
          color="green"
          format="percentage"
          delay={0.2}
        />
        <StatCard
          title="Avg Credit"
          value={data.overview.avgCreditAmount}
          icon="activity"
          color="purple"
          format="currency"
          delay={0.3}
        />
        <StatCard
          title="Avg Income"
          value={data.overview.avgIncome}
          icon="activity"
          color="blue"
          format="currency"
          delay={0.4}
        />
        <StatCard
          title="Total Volume"
          value={data.overview.totalCreditVolume}
          icon="up"
          color="green"
          format="compact-currency"
          delay={0.5}
        />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <DonutChart
          title="Risk Distribution"
          data={data.riskDistribution}
          height={350}
        />
        <DonutChart
          title="Gender Distribution"
          data={data.genderDistribution}
          height={350}
        />
        <DonutChart
          title="Contract Type"
          data={data.contractTypeDistribution}
          height={350}
        />
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <AnimatedBarChart
          title="Income Type Distribution"
          data={data.incomeTypeDistribution}
          dataKey="value"
          categoryKey="name"
          height={350}
          color="#8b5cf6"
        />
        <AnimatedBarChart
          title="Default Rate by Income Type"
          data={data.defaultRateByIncome}
          dataKey="rate"
          categoryKey="category"
          height={350}
          color="#ef4444"
        />
      </div>

      {/* Time Series */}
      <div className="grid grid-cols-1 mb-8">
        <AnimatedLineChart
          title="Monthly Application Trends"
          data={data.monthlyApplications.slice(0, 24)}
          dataKeys={['applications']}
          categoryKey="month"
          height={350}
          gradient={true}
        />
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <DonutChart
          title="Education Level"
          data={data.educationDistribution}
          height={350}
        />
        <DonutChart
          title="Family Status"
          data={data.familyStatusDistribution}
          height={350}
        />
        <DonutChart
          title="Housing Type"
          data={data.housingTypeDistribution}
          height={350}
        />
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AnimatedBarChart
          title="Credit Amount Distribution"
          data={data.creditAmountDistribution}
          dataKey="count"
          categoryKey="range"
          height={350}
          color="#0ea5e9"
        />
        <AnimatedBarChart
          title="Age Distribution"
          data={data.ageDistribution}
          dataKey="count"
          categoryKey="ageGroup"
          height={350}
          color="#ec4899"
        />
      </div>
    </div>
  );
}
