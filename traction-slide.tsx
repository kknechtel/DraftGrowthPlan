import React from 'react';
import { Search, Twitter, TrendingUp, Target, Users, Share2 } from 'lucide-react';

const TractionSlide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-100">
          Early Traction & Growth Opportunity
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          Established market presence with significant growth potential
        </p>
      </div>

      {/* Current Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-100" />
            Current Traction
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">High Search Rankings</div>
                <p className="text-gray-200 mt-2">
                  Top Google rankings for bankruptcy filings and analysis, demonstrating market authority
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Twitter className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Growing Social Presence</div>
                <p className="text-gray-200 mt-2">
                  Expanding Twitter following with engaged bankruptcy and restructuring audience
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Market Recognition</div>
                <p className="text-gray-200 mt-2">
                  Established reputation as an AI-forward financial advisory firm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-green-100" />
            Growth Opportunities
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Share2 className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Advertising Potential</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Targeted professional services advertising</li>
                  <li>Industry-specific campaign opportunities</li>
                  <li>Content marketing and thought leadership</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Market Expansion</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Law firm partnerships</li>
                  <li>Financial institution integrations</li>
                  <li>Professional service provider network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-green-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Search</div>
          <div className="text-lg text-gray-200">Leading Rankings in Bankruptcy Space</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-blue-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Social</div>
          <div className="text-lg text-gray-200">Expanding Industry Following</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-purple-400">
          <div className="text-3xl font-bold text-green-100 mb-2">Network</div>
          <div className="text-lg text-gray-200">Growing Professional Network</div>
        </div>
      </div>
    </div>
  );
};

export default TractionSlide;