import React from 'react';
import { FileText, Database, BarChart2, Upload, Shield, GitBranch } from 'lucide-react';

const Phase2Slide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-100">
          Phase 2: Intelligent Document Processing
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          Automated petition processing, financial analysis, and comprehensive data repository
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Document Processing */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-green-100" />
            Automated Document Processing
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Upload className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Secure Document Portal</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Drag-and-drop document uploads</li>
                  <li>Automatic OCR and text extraction</li>
                  <li>Real-time processing status</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Intelligent Processing</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Auto-population of schedules</li>
                  <li>Smart document categorization</li>
                  <li>Multi-debtor tracking</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Quality Assurance</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Automated completeness checks</li>
                  <li>Financial statement validation</li>
                  <li>Error flagging and review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Platform */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <Database className="w-8 h-8 text-green-100" />
            Comprehensive Analytics
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <BarChart2 className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Advanced Analysis</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>DIP financing comparisons</li>
                  <li>Plan and disclosure analysis</li>
                  <li>Claims analysis and tracking</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Data Repository</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Comprehensive case database</li>
                  <li>Historical precedent tracking</li>
                  <li>Industry trend analysis</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Automated Reporting</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Custom report generation</li>
                  <li>Real-time statistics</li>
                  <li>Quickbooks integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-green-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Automated</div>
          <div className="text-lg text-gray-200">Parallel processing of multiple documents</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-blue-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Intelligent</div>
          <div className="text-lg text-gray-200">AI-powered analysis and insights</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-purple-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Integrated</div>
          <div className="text-lg text-gray-200">Seamless workflow connections</div>
        </div>
      </div>
    </div>
  );
};

export default Phase2Slide;