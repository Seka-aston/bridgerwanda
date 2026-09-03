
import React, { useState } from 'react';
import { VenturesLabApplication } from '../../types';
import FormProgress from '../../components/ventures-lab/FormProgress';
import SectionPersonal from '../../components/ventures-lab/form/SectionPersonal';
import SectionEducation from '../../components/ventures-lab/form/SectionEducation';
import SectionTechnical from '../../components/ventures-lab/form/SectionTechnical';
import SectionVenture from '../../components/ventures-lab/form/SectionVenture';
import SectionMotivation from '../../components/ventures-lab/form/SectionMotivation';
import SectionCommitment from '../../components/ventures-lab/form/SectionCommitment';
import SectionReview from '../../components/ventures-lab/form/SectionReview';
import Button from '../../components/ui/Button';
import { submitVenturesLabApplication } from '../../src/lib/submitApplication';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const STEPS = ['Personal', 'Education', 'Technical', 'Venture', 'Motivation', 'Commitment', 'Review'];
const TOTAL_STEPS = STEPS.length;

const VenturesLabApply: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<VenturesLabApplication>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    age: '',
    gender: '',
    parentContact: '',
    tvetInstitution: '',
    tradeProgram: '',
    level: '',
    graduationYear: '',
    otherCertifications: '',
    technicalSkills: '',
    areasOfExpertise: '',
    relevantExperience: '',
    ideaName: '',
    problemSolving: '',
    whoExperiencesProblem: '',
    solution: '',
    whyImportant: '',
    whatMakesDifferent: '',
    currentStage: '',
    whatAlreadyDone: '',
    whyJoin: '',
    whySelectYou: '',
    sixWeekGoals: '',
    educationInterests: '',
    futureVision: '',
    canAttendFullProgram: false,
    hasLaptop: false,
    willingToPayFee: false,
    willingToParticipate: false,
  });

  const updateData = (data: Partial<VenturesLabApplication>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
  const prevStep = () => setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitVenturesLabApplication(formData);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitError(error.message || 'There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
            <CheckCircle className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-3xl font-bold mt-6 text-text-headings">Application Submitted!</h2>
            <p className="mt-4 text-text-main text-lg">
              Thank you for applying to Bridge Ventures Lab 2026. Your application has been received and will be reviewed by the Bridge team. We will communicate the next steps to you soon.
            </p>
            <Button to="/" className="mt-8">Back to Home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Before You Apply Section */}
      {!showForm && (
        <div>
          <section className="bg-surface py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-headings mb-4">Before You Apply</h1>
                <p className="text-lg text-text-main">
                  Please review the following to ensure you are ready to apply to Bridge Ventures Lab 2026.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                  <h3 className="text-xl font-bold text-text-headings mb-6">Readiness Checklist</h3>
                  <div className="space-y-4">
                    {[
                      { text: 'I am a TVET graduate or current advanced-level TVET student.' },
                      { text: 'I can commit to the full six-week, in-person program.' },
                      { text: 'The program is in-person — I can attend in Kigali for the full duration.' },
                      { text: 'I have access to a personal laptop for the duration of the program.' },
                      {
                        text: 'I understand the 50,000 Frw program fee and what it covers.',
                        note: 'The fee is collected only after selection to confirm participation and contribute toward learning materials, program resources, and operational costs. It does not determine selection.'
                      },
                      { text: 'I understand that submitting an application does not guarantee selection.' },
                      { text: 'I understand that approximately 100 applicants may be shortlisted and only 60 will be selected.' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-text-main font-medium">{item.text}</p>
                          {item.note && <p className="text-sm text-gray-500 mt-1">{item.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <Button onClick={() => setShowForm(true)} className="text-lg">
                      Ready to Apply? Start Your Application
                    </Button>
                    <p className="mt-4">
                      <a href="#/ventures-lab" className="text-primary hover:underline font-medium">
                        Not sure yet? Learn more about the program
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Registration Form */}
      {showForm && (
        <div className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
              <h1 className="text-3xl font-bold text-center mb-2 text-text-headings">
                Bridge Ventures Lab 2026
              </h1>
              <p className="text-center text-text-main mb-8">Registration Form</p>

              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    This is a draft registration form. Final field labels and requirements will be confirmed by Bridge.
                  </p>
                </div>
              </div>

              <FormProgress currentStep={currentStep} steps={STEPS} />

              {submitError && (
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p className="font-bold">Error</p>
                  <p>{submitError}</p>
                </div>
              )}

              <div className="mt-10">
                {currentStep === 1 && <SectionPersonal data={formData} updateData={updateData} />}
                {currentStep === 2 && <SectionEducation data={formData} updateData={updateData} />}
                {currentStep === 3 && <SectionTechnical data={formData} updateData={updateData} />}
                {currentStep === 4 && <SectionVenture data={formData} updateData={updateData} />}
                {currentStep === 5 && <SectionMotivation data={formData} updateData={updateData} />}
                {currentStep === 6 && <SectionCommitment data={formData} updateData={updateData} />}
                {currentStep === 7 && <SectionReview data={formData} />}
              </div>

              <div className="flex justify-between mt-12">
                <Button
                  onClick={currentStep === 1 ? () => setShowForm(false) : prevStep}
                  disabled={isSubmitting}
                  variant="secondary"
                >
                  {currentStep === 1 ? 'Back to Checklist' : 'Back'}
                </Button>
                {currentStep < TOTAL_STEPS ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenturesLabApply;
