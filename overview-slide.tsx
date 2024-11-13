import React from 'react';
import { Brain, Database, Lock, Scroll } from 'lucide-react';

const OverviewSlide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-green-100">
          Revolutionizing Restructuring with AI
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-12">
          Building a next-generation restructuring firm powered by AI technology, unlocking bankruptcy data, and automating manual processes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-green-100" />
            </div>
            <h2 className="text-xl font-semibold text-green-100 mb-3">
              Intelligent Document Processing
            </h2>
            <p className="text-gray-200">
              Automated analysis of petitions, SOFA/SOAL, and complex financial documents with AI-powered insights
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Database className="w-12 h-12 text-green-100" />
            </div>
            <h2 className="text-xl font-semibold text-green-100 mb-3">
              Comprehensive Data Platform
            </h2>
            <p className="text-gray-200">
              Best-in-class repository for DIP comparisons, plan analysis, and case tracking
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Scroll className="w-12 h-12 text-green-100" />
            </div>
            <h2 className="text-xl font-semibold text-green-100 mb-3">
              Real-Time Case Intelligence
            </h2>
            <p className="text-gray-200">
              Advanced filing notifications, automated summaries, and customizable tracking systems
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-green-100" />
            </div>
            <h2 className="text-xl font-semibold text-green-100 mb-3">
              Secure Enterprise Platform
            </h2>
            <p className="text-gray-200">
              On-premises or secure cloud deployment with robust document management
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-100 mb-2">3</div>
            <div className="text-gray-200">Development Phases</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-100 mb-2">100%</div>
            <div className="text-gray-200">AI-Powered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-100 mb-2">24/7</div>
            <div className="text-gray-200">Automated Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSlide;