import React from 'react';
import { Globe, Search, Brain, Shield, Link, Calendar, Download, Box } from 'lucide-react';

const Phase3Slide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-100">
          Phase 3: Next-Generation Court Access Platform
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          Modern replacement for PACER with integrated AI-powered litigation support
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Modern Court Access */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-green-100" />
            Modern Document Access
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Intuitive Interface</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Modern user-friendly design</li>
                  <li>Advanced search capabilities</li>
                  <li>One-swipe document saving</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">AI-Powered Features</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Automatic filing summaries</li>
                  <li>Smart document categorization</li>
                  <li>Predictive document suggestions</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Link className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Seamless Integration</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Clio calendar integration</li>
                  <li>Case management systems</li>
                  <li>Document management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Litigation Platform */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <Box className="w-8 h-8 text-green-100" />
            Litigation Support Platform
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Document Management</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Automated Bates stamping</li>
                  <li>Advanced document classification</li>
                  <li>Bulk document processing</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Custom LLM Integration</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Secure on-premises deployment</li>
                  <li>Domain-specific training</li>
                  <li>Automated document analysis</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Case Management</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Automated deadline tracking</li>
                  <li>Team collaboration tools</li>
                  <li>Client portal access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-green-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Modern UI</div>
          <div className="text-lg text-gray-200">Intuitive access to court documents</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-blue-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Secure</div>
          <div className="text-lg text-gray-200">Enterprise-grade protection</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-purple-400">
          <div className="text-3xl font-bold text-green-100 mb-2">AI-Powered</div>
          <div className="text-lg text-gray-200">Intelligent document processing</div>
        </div>
      </div>
    </div>
  );
};

export default Phase3Slide;