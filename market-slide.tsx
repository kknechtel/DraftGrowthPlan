import React from 'react';
import { DollarSign, Users, Clock, FileText } from 'lucide-react';

const MarketSlide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-100">
          Market Opportunity
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          A $10B+ annual market ready for technological disruption, with significant inefficiencies in document processing and data analysis
        </p>
      </div>

      {/* Key Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <DollarSign className="w-12 h-12 text-green-100 mx-auto mb-4" />
          <div className="text-3xl font-bold text-green-100 mb-2">$10B+</div>
          <div className="text-lg text-gray-200">Annual Professional Fees</div>
          <div className="text-sm text-gray-300">in major Chapter 11 cases</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <Users className="w-12 h-12 text-green-100 mx-auto mb-4" />
          <div className="text-3xl font-bold text-green-100 mb-2">400K+</div>
          <div className="text-lg text-gray-200">Annual Filings</div>
          <div className="text-sm text-gray-300">across all chapters</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <DollarSign className="w-12 h-12 text-green-100 mx-auto mb-4" />
          <div className="text-3xl font-bold text-green-100 mb-2">$1.2M</div>
          <div className="text-lg text-gray-200">Average Case Cost</div>
          <div className="text-sm text-gray-300">for Chapter 11 proceedings</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <Clock className="w-12 h-12 text-green-100 mx-auto mb-4" />
          <div className="text-3xl font-bold text-green-100 mb-2">65%</div>
          <div className="text-lg text-gray-200">Manual Work</div>
          <div className="text-sm text-gray-300">in document processing</div>
        </div>
      </div>

      {/* Opportunity Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Fee Structure */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-100 mb-6">Professional Fee Breakdown</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Document Review & Analysis</span>
                <span className="font-bold">35%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Claims & Financial Analysis</span>
                <span className="font-bold">28%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '28%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Processing & Management</span>
                <span className="font-bold">22%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '22%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Potential */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-100 mb-6">Automation Opportunity</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">40% Cost Reduction</div>
                <div className="text-gray-200">In document processing and analysis</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">75% Faster Processing</div>
                <div className="text-gray-200">For claims and financial analysis</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">90% Accuracy Improvement</div>
                <div className="text-gray-200">In data extraction and validation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSlide;