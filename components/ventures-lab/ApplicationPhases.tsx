
import React from 'react';
import { VENTURES_LAB_APPLICATION_PHASES } from '../../constants';

const ApplicationPhases: React.FC = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VENTURES_LAB_APPLICATION_PHASES.map((phase) => (
          <div key={phase.phase} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-4">
              {phase.phase}
            </div>
            <h4 className="text-lg font-bold text-text-headings mb-2">{phase.name}</h4>
            <p className="text-sm text-text-main">{phase.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-surface border-l-4 border-primary rounded-r-lg p-6">
        <p className="text-text-headings font-bold mb-2">Important Note About the Program Fee</p>
        <p className="text-text-main">
          The 50,000 Frw program fee does <strong>not</strong> determine your selection. Selection is based purely on the quality and potential of the applicant and their idea. The fee is only collected <strong>after</strong> selection, to confirm participation and contribute toward learning materials, program resources, and operational costs.
        </p>
      </div>
    </div>
  );
};

export default ApplicationPhases;
