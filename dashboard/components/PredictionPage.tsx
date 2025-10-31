'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  User,
  DollarSign,
  Home,
  Briefcase,
  GraduationCap,
  Users,
  Calendar,
  Car,
} from 'lucide-react';
import { cn, formatCurrency, formatPercentage } from '@/lib/utils';

interface PredictionResult {
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  recommendation: string;
  confidence: number;
  factors: Array<{ name: string; impact: number }>;
}

export default function PredictionPage() {
  const [formData, setFormData] = useState({
    gender: 'M',
    ownCar: 'N',
    ownRealty: 'Y',
    income: '',
    creditAmount: '',
    annuity: '',
    children: '0',
    familyStatus: 'Married',
    housingType: 'House / apartment',
    education: 'Higher education',
    occupation: 'Laborers',
    age: '',
    employmentDays: '',
  });

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRisk = () => {
    setIsCalculating(true);

    // Simulate API call delay
    setTimeout(() => {
      // Simple risk calculation logic (in production, this would call your ML model)
      const income = parseFloat(formData.income) || 0;
      const credit = parseFloat(formData.creditAmount) || 0;
      const age = parseFloat(formData.age) || 0;
      
      let riskScore = 0;
      
      // Income to credit ratio
      let ratio = 0;
      if (income > 0 && credit > 0) {
        ratio = credit / income;
        if (ratio > 3) riskScore += 30;
        else if (ratio > 2) riskScore += 20;
        else if (ratio > 1) riskScore += 10;
      }
      
      // Age factor
      if (age < 25) riskScore += 15;
      else if (age < 30) riskScore += 10;
      else if (age > 60) riskScore += 5;
      
      // Education
      if (formData.education === 'Secondary / secondary special') riskScore += 10;
      else if (formData.education === 'Lower secondary') riskScore += 15;
      
      // Employment
      const employment = parseFloat(formData.employmentDays) || 0;
      if (employment < 365) riskScore += 15;
      else if (employment < 730) riskScore += 10;
      
      // Owns car/realty
      if (formData.ownCar === 'N') riskScore += 5;
      if (formData.ownRealty === 'N') riskScore += 5;
      
      // Children
      const children = parseInt(formData.children) || 0;
      if (children > 2) riskScore += 10;
      
      // Cap at 100
      riskScore = Math.min(riskScore, 100);
      
      // Determine risk level
      let riskLevel: 'Low' | 'Medium' | 'High';
      let recommendation: string;
      
      if (riskScore < 30) {
        riskLevel = 'Low';
        recommendation = 'Approve loan with standard terms. Applicant shows strong creditworthiness.';
      } else if (riskScore < 60) {
        riskLevel = 'Medium';
        recommendation = 'Approve with caution. Consider higher interest rate or additional collateral.';
      } else {
        riskLevel = 'High';
        recommendation = 'Decline or require significant collateral. High probability of default.';
      }
      
      const result: PredictionResult = {
        riskScore,
        riskLevel,
        recommendation,
        confidence: 85 + Math.random() * 10,
        factors: [
          { name: 'Income/Credit Ratio', impact: ratio > 0 ? Math.min((credit / income) * 15, 30) : 0 },
          { name: 'Age', impact: age < 30 ? 15 : 5 },
          { name: 'Employment History', impact: employment < 730 ? 15 : 5 },
          { name: 'Education Level', impact: formData.education === 'Higher education' ? 5 : 15 },
          { name: 'Assets Ownership', impact: formData.ownCar === 'N' || formData.ownRealty === 'N' ? 10 : 0 },
        ].sort((a, b) => b.impact - a.impact),
      };
      
      setPrediction(result);
      setIsCalculating(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRisk();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-2">
          <Calculator className="w-10 h-10 text-accent-400" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-400 via-primary-400 to-purple-400 bg-clip-text text-transparent">
              Credit Risk Prediction
            </h1>
            <p className="text-gray-400 mt-1">Enter applicant details to assess credit risk</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-6 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-400" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Age (years)</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="35"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Number of Children</label>
                  <input
                    type="number"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Family Status</label>
                  <select
                    value={formData.familyStatus}
                    onChange={(e) => setFormData({ ...formData, familyStatus: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option>Married</option>
                    <option>Single / not married</option>
                    <option>Civil marriage</option>
                    <option>Separated</option>
                    <option>Widow</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Financial Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Annual Income ($)</label>
                  <input
                    type="number"
                    value={formData.income}
                    onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="50000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Credit Amount ($)</label>
                  <input
                    type="number"
                    value={formData.creditAmount}
                    onChange={(e) => setFormData({ ...formData, creditAmount: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="100000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Loan Annuity ($)</label>
                  <input
                    type="number"
                    value={formData.annuity}
                    onChange={(e) => setFormData({ ...formData, annuity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="5000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Employment Days</label>
                  <input
                    type="number"
                    value={formData.employmentDays}
                    onChange={(e) => setFormData({ ...formData, employmentDays: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="1825"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-accent-400" />
                Additional Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Own Car</label>
                  <select
                    value={formData.ownCar}
                    onChange={(e) => setFormData({ ...formData, ownCar: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Own Realty</label>
                  <select
                    value={formData.ownRealty}
                    onChange={(e) => setFormData({ ...formData, ownRealty: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Housing Type</label>
                  <select
                    value={formData.housingType}
                    onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option>House / apartment</option>
                    <option>With parents</option>
                    <option>Municipal apartment</option>
                    <option>Rented apartment</option>
                    <option>Office apartment</option>
                    <option>Co-op apartment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Education</label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option>Higher education</option>
                    <option>Secondary / secondary special</option>
                    <option>Incomplete higher</option>
                    <option>Lower secondary</option>
                    <option>Academic degree</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Occupation</label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option>Laborers</option>
                    <option>Core staff</option>
                    <option>Sales staff</option>
                    <option>Managers</option>
                    <option>Drivers</option>
                    <option>High skill tech staff</option>
                    <option>Accountants</option>
                    <option>Medicine staff</option>
                    <option>Security staff</option>
                    <option>Cooking staff</option>
                    <option>Cleaning staff</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isCalculating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg 
                         shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center gap-3"
            >
              {isCalculating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Calculating Risk...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  Calculate Risk Score
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {prediction ? (
            <>
              {/* Risk Score Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Risk Assessment</h3>
                
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke={
                        prediction.riskLevel === 'Low'
                          ? '#10b981'
                          : prediction.riskLevel === 'Medium'
                          ? '#f59e0b'
                          : '#ef4444'
                      }
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 440' }}
                      animate={{ strokeDasharray: `${(prediction.riskScore / 100) * 440} 440` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">{prediction.riskScore}</span>
                    <span className="text-sm text-gray-400">Risk Score</span>
                  </div>
                </div>

                <div
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold',
                    prediction.riskLevel === 'Low' && 'bg-green-500/20 text-green-400',
                    prediction.riskLevel === 'Medium' && 'bg-yellow-500/20 text-yellow-400',
                    prediction.riskLevel === 'High' && 'bg-red-500/20 text-red-400'
                  )}
                >
                  {prediction.riskLevel === 'Low' && <CheckCircle className="w-5 h-5" />}
                  {prediction.riskLevel === 'Medium' && <AlertCircle className="w-5 h-5" />}
                  {prediction.riskLevel === 'High' && <AlertCircle className="w-5 h-5" />}
                  {prediction.riskLevel} Risk
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Confidence Level</p>
                  <p className="text-2xl font-bold text-white">{prediction.confidence.toFixed(1)}%</p>
                </div>
              </motion.div>

              {/* Recommendation */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent-400" />
                  Recommendation
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{prediction.recommendation}</p>
              </motion.div>

              {/* Risk Factors */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Key Risk Factors</h3>
                <div className="space-y-3">
                  {prediction.factors.map((factor, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{factor.name}</span>
                        <span className="text-white font-semibold">{factor.impact.toFixed(0)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${factor.impact}%` }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className={cn(
                            'h-full rounded-full',
                            factor.impact > 20 ? 'bg-red-500' : factor.impact > 10 ? 'bg-yellow-500' : 'bg-green-500'
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Fill out the form and click "Calculate Risk Score" to see the prediction results</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
