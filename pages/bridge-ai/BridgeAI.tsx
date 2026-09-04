
import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Select from '../../components/ui/Select';
import SectionHeader from '../../components/ui/SectionHeader';
import { VolunteerApplication } from '../../types';
import { submitVolunteerApplication } from '../../src/lib/submitApplication';
import { Database, TestTube, FileSearch, CheckCircle, Mail, Phone } from 'lucide-react';

const BridgeAI: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState<VolunteerApplication>({
    fullName: '',
    phone: '',
    email: '',
    educationBackground: '',
    technicalArea: '',
    whyVolunteer: '',
    availability: '',
    relevantSkills: '',
  });

  const updateField = (field: keyof VolunteerApplication, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitVolunteerApplication(formData);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitError(error.message || 'There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const volunteerBenefits = [
    { icon: <Database className="w-7 h-7 text-primary" />, title: 'Data Contribution', description: 'Help curate and validate training data that makes Bridge AI smarter and more relevant.' },
    { icon: <TestTube className="w-7 h-7 text-primary" />, title: 'Testing & Feedback', description: 'Test features, report issues, and share feedback that shapes the user experience.' },
    { icon: <FileSearch className="w-7 h-7 text-primary" />, title: 'Content Review', description: 'Review and improve AI-generated content to ensure accuracy and usefulness.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-bold text-green-300 uppercase tracking-wider mb-4">Volunteer Opportunity</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Help Us Train Bridge AI
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            We are building Bridge AI, an AI-powered platform designed to support technical students and graduates throughout their learning, career, and entrepreneurship journeys.
          </p>
          <button
            onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 bg-primary text-white hover:bg-primary-dark text-lg shadow-md cursor-pointer"
          >
            Reserve Your Volunteer Spot
          </button>
        </div>
      </section>

      {/* What is Bridge AI */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="About Bridge AI"
              title="What is Bridge AI?"
              description="Bridge AI is an AI-powered platform designed to support technical students and graduates throughout their learning, career, and entrepreneurship journeys."
            />
            <div className="bg-surface rounded-xl p-8 text-center">
              <p className="text-lg text-text-main">
                We are looking for students and young technical talents who are interested in volunteering in the training, testing, feedback, and development process of Bridge AI. Your contributions will directly shape how the platform serves the next generation of skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get Involved"
            title="How You Can Help"
            description="There are multiple ways to contribute to the development of Bridge AI."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {volunteerBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-surface mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-text-headings mb-2">{benefit.title}</h4>
                <p className="text-text-main">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text-headings mb-6">Contact the Bridge AI Team</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:bridgerwanda77@gmail.com" className="flex items-center justify-center gap-2 text-text-main hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>bridgerwanda77@gmail.com</span>
              </a>
              <a href="tel:+250788434778" className="flex items-center justify-center gap-2 text-text-main hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+250 788 434 778</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              subtitle="Sign Up"
              title="Reserve Your Volunteer Spot"
            />

            {isSubmitted ? (
              <div className="bg-white rounded-xl shadow-lg p-10 text-center">
                <CheckCircle className="w-16 h-16 mx-auto text-primary" />
                <h3 className="text-2xl font-bold mt-6 text-text-headings">Thank You!</h3>
                <p className="mt-4 text-text-main text-lg">
                  Your volunteer interest has been recorded. The Bridge AI team will reach out to you with next steps.
                </p>
                <Button to="/" className="mt-8">Back to Home</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
                {submitError && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    <p className="font-bold">Error</p>
                    <p>{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="volunteerFullName"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    required
                  />
                  <Input
                    label="Phone"
                    name="volunteerPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    required
                  />
                  <Input
                    label="Email"
                    name="volunteerEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                  />
                  <Input
                    label="Education/Background"
                    name="educationBackground"
                    value={formData.educationBackground}
                    onChange={(e) => updateField('educationBackground', e.target.value)}
                    required
                  />
                </div>

                <Input
                  label="Technical Area"
                  name="technicalArea"
                  value={formData.technicalArea}
                  onChange={(e) => updateField('technicalArea', e.target.value)}
                  required
                />

                <Textarea
                  label="Why do you want to volunteer?"
                  name="whyVolunteer"
                  value={formData.whyVolunteer}
                  onChange={(e) => updateField('whyVolunteer', e.target.value)}
                  required
                />

                <Select
                  label="Availability"
                  name="availability"
                  value={formData.availability}
                  onChange={(e) => updateField('availability', e.target.value)}
                  placeholder="Select your availability"
                  options={[
                    { value: 'full-time', label: 'Full-time' },
                    { value: 'part-time', label: 'Part-time' },
                    { value: 'weekends', label: 'Weekends only' },
                    { value: 'flexible', label: 'Flexible' },
                  ]}
                  required
                />

                <Textarea
                  label="Relevant Skills"
                  name="relevantSkills"
                  value={formData.relevantSkills}
                  onChange={(e) => updateField('relevantSkills', e.target.value)}
                  hint="Describe any skills that could be valuable for this role"
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Reserve Your Spot'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BridgeAI;
