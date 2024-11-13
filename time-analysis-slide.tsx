import React from 'react';
import { Clock, FileText, DollarSign, Users, LineChart } from 'lucide-react';

const TimeAnalysisSlide = () => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-100">
          Current Schedule Preparation Burden
        </h1>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          Traditional bankruptcy schedule preparation requires significant manual effort and professional time
        </p>
      </div>

      {/* Time Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Hours Analysis */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-green-100" />
            Professional Time Investment
          </h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Data Collection & Organization</span>
                <span className="font-bold">40-60 Hours</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Schedule Review & Validation</span>
                <span className="font-bold">20-30 Hours</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>SOFA Preparation</span>
                <span className="font-bold">15-25 Hours</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-200 mb-2">
                <span>Final Review & Filing</span>
                <span className="font-bold">10-15 Hours</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Impact */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-100 mb-6 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-100" />
            Resource Impact
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Team Involvement</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>2-3 Financial advisors</li>
                  <li>1-2 Senior reviewers</li>
                  <li>Multiple client touchpoints</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Common Challenges</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Data inconsistencies</li>
                  <li>Manual data entry errors</li>
                  <li>Time-consuming revisions</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                <LineChart className="w-5 h-5 text-green-100" />
              </div>
              <div>
                <div className="text-lg font-semibold text-green-100">Opportunity Cost</div>
                <ul className="text-gray-200 list-disc ml-4 mt-2">
                  <li>Reduced strategic analysis time</li>
                  <li>Delayed client responses</li>
                  <li>Limited bandwidth for other cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-green-400">
          <div className="text-3xl font-bold text-green-100 mb-2">85-130</div>
          <div className="text-lg text-gray-200">Total Hours Per Case</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-blue-400">
          <div className="text-3xl font-bold text-green-100 mb-2">60%</div>
          <div className="text-lg text-gray-200">Time on Manual Tasks</div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border-t-4 border-purple-400">
          <div className="text-3xl font-bold text-green-100 mb-2">3-5</div>
          <div className="text-lg text-gray-200">Team Members Required</div>
        </div>
      </div>
    </div>
  );
};

export default TimeAnalysisSlide;