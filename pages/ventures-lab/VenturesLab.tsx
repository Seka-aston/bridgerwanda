
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import JourneyTimeline from '../../components/ventures-lab/JourneyTimeline';
import ApplicationPhases from '../../components/ventures-lab/ApplicationPhases';
import { VENTURES_LAB_BENEFITS } from '../../constants';
import { Lightbulb, Users, Target, TrendingUp, Award, Presentation, Rocket, Shield } from 'lucide-react';

const benefitIcons = [Lightbulb, Rocket, TrendingUp, Users, Shield, Presentation, Target, Award];

const VenturesLab: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Applications Open</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Bridge Ventures Lab 2026
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-green-200 mb-2">
            Turning Builders into Founders.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A six-week, in-person venture-building experience for TVET graduates and young technical innovators ready to turn their skills into scalable ventures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/ventures-lab/apply" className="text-lg">Apply Now</Button>
            <a href="#about-program" className="inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 bg-white/10 text-white hover:bg-white/20 text-lg text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* A. Program Introduction */}
      <section id="about-program" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="About the Program"
            title="What is Bridge Ventures Lab?"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface rounded-xl p-8">
                <h4 className="text-lg font-bold text-text-headings mb-3">Why does Bridge run it?</h4>
                <p className="text-text-main">
                  Rwanda has a growing pool of technically skilled TVET graduates, but too few have a clear path from technical ability to venture creation. Bridge Ventures Lab exists to close that gap — giving young builders the frameworks, mentorship, and momentum to turn ideas into real businesses.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8">
                <h4 className="text-lg font-bold text-text-headings mb-3">Who is it designed for?</h4>
                <p className="text-text-main">
                  TVET graduates and young technical innovators who have a problem they want to solve and the drive to build something meaningful. Whether you have an early-stage idea or a working prototype, this program will help you move forward.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8">
                <h4 className="text-lg font-bold text-text-headings mb-3">What problem is it addressing?</h4>
                <p className="text-text-main">
                  Many technically skilled young people struggle to translate their abilities into sustainable ventures. They lack access to structured venture-building support, mentorship, and the business knowledge needed to go from idea to market.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8">
                <h4 className="text-lg font-bold text-text-headings mb-3">What will participants gain?</h4>
                <p className="text-text-main">
                  Participants will develop validated venture ideas, build prototypes, refine business models, receive mentorship from industry experts, and gain the skills and confidence to pitch and launch their ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. 2026 Cohort Key Facts */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="2026 Cohort"
            title="Key Facts"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '60', label: 'Selected Innovators' },
              { number: '6', label: 'Weeks In-Person' },
              { number: 'TVET', label: 'Graduates & Innovators' },
              { number: 'TBC', label: 'Program Dates' },
            ].map((fact) => (
              <div key={fact.label} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{fact.number}</div>
                <div className="text-sm font-medium text-text-main">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Six-Week Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="The Journey"
            title="Six Weeks That Transform Your Idea"
            description="From problem discovery to market readiness — a structured path to venture creation."
          />
          <div className="max-w-5xl mx-auto">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* D. What Participants Will Gain */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Your Outcomes"
            title="What You Will Gain"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {VENTURES_LAB_BENEFITS.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={benefit.title} className="text-center p-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-base font-bold text-text-headings mb-2">{benefit.title}</h4>
                  <p className="text-sm text-text-main">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E. Who Can Apply */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Eligibility"
            title="Who Can Apply"
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface border-l-4 border-primary rounded-r-lg p-8">
              <p className="text-text-headings font-bold mb-4 text-lg">Eligibility Criteria</p>
              <p className="text-text-main italic mb-4">
                Exact eligibility criteria are being finalized by Bridge. The following are preliminary guidelines:
              </p>
              <ul className="space-y-3">
                {[
                  'TVET graduates or current advanced-level TVET students',
                  'Young technical innovators with a problem they want to solve',
                  'Ability to commit to the full six-week, in-person program',
                  'Access to a personal laptop for the duration of the program',
                  'Strong motivation and willingness to participate actively',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-main">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* F. Application Process */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="How to Apply"
            title="The Application Process"
            description="Four clear phases from registration to commitment."
          />
          <div className="max-w-5xl mx-auto">
            <ApplicationPhases />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Join the 2026 Cohort?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            60 innovators. 6 weeks. One journey from technical talent to venture creation.
          </p>
          <Button to="/ventures-lab/apply" className="text-lg">Start Your Application</Button>
        </div>
      </section>
    </div>
  );
};

export default VenturesLab;
