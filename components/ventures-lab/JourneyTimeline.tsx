
import React from 'react';
import { VENTURES_LAB_JOURNEY } from '../../constants';
import { Search, CheckSquare, Hammer, Settings, Presentation, Rocket } from 'lucide-react';

const icons = [Search, CheckSquare, Hammer, Settings, Presentation, Rocket];

const JourneyTimeline: React.FC = () => {
  return (
    <div className="w-full">
      <div className="hidden md:flex items-start justify-between relative">
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 z-0" />
        <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark z-0" />
        {VENTURES_LAB_JOURNEY.map((stage, index) => {
          const Icon = icons[index];
          return (
            <div key={stage.week} className="relative z-10 flex flex-col items-center text-center flex-1 px-2">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-primary mt-2 uppercase tracking-wider">Week {stage.week}</span>
              <h4 className="text-base font-bold text-text-headings mt-1">{stage.name}</h4>
              <p className="text-sm text-text-main mt-1">{stage.description}</p>
            </div>
          );
        })}
      </div>

      <div className="md:hidden space-y-6">
        {VENTURES_LAB_JOURNEY.map((stage, index) => {
          const Icon = icons[index];
          return (
            <div key={stage.week} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                {index < VENTURES_LAB_JOURNEY.length - 1 && (
                  <div className="w-0.5 h-8 bg-primary mt-1" />
                )}
              </div>
              <div className="pt-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Week {stage.week}</span>
                <h4 className="text-base font-bold text-text-headings">{stage.name}</h4>
                <p className="text-sm text-text-main">{stage.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;
