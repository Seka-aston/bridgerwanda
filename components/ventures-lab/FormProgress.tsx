
import React from 'react';

interface FormProgressProps {
  currentStep: number;
  steps: string[];
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center text-center w-16 sm:w-20">
                <div className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-colors duration-300
                  ${isCompleted ? 'bg-primary text-white' : ''}
                  ${isActive ? 'bg-surface text-primary border-2 border-primary' : ''}
                  ${!isCompleted && !isActive ? 'bg-gray-200 text-gray-500' : ''}
                `}>
                  {isCompleted ? '✔' : stepNumber}
                </div>
                <p className={`mt-1 text-xs font-medium hidden sm:block ${isActive ? 'text-primary' : 'text-gray-500'}`}>{label}</p>
              </div>
              {stepNumber < steps.length && (
                <div className={`flex-1 h-1 transition-colors duration-300 ${currentStep > stepNumber ? 'bg-primary' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FormProgress;
