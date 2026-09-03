
import React from 'react';
import { VenturesLabApplication } from '../../../types';
import { VENTURE_STAGE_OPTIONS } from '../../../constants';

interface Props {
  data: VenturesLabApplication;
}

const ReviewGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h4 className="text-lg font-bold text-text-headings mb-4 pb-2 border-b border-gray-200">{title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  </div>
);

const ReviewItem: React.FC<{ label: string; value: string | boolean }> = ({ label, value }) => (
  <div className="py-1">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="text-text-main mt-0.5">
      {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : (value || '—')}
    </dd>
  </div>
);

const SectionReview: React.FC<Props> = ({ data }) => {
  const stageLabel = VENTURE_STAGE_OPTIONS.find(o => o.value === data.currentStage)?.label || data.currentStage;

  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-2">Review Your Application</h3>
      <p className="text-text-main mb-8">Please review the information below before submitting.</p>

      <ReviewGroup title="Personal Information">
        <ReviewItem label="Full Name" value={data.fullName} />
        <ReviewItem label="Phone" value={data.phone} />
        <ReviewItem label="Email" value={data.email} />
        <ReviewItem label="Location" value={data.location} />
        <ReviewItem label="Age" value={data.age} />
        <ReviewItem label="Gender" value={data.gender} />
        <ReviewItem label="Parent's Contact" value={data.parentContact} />
      </ReviewGroup>

      <ReviewGroup title="Educational Background">
        <ReviewItem label="TVET Institution" value={data.tvetInstitution} />
        <ReviewItem label="Trade/Program" value={data.tradeProgram} />
        <ReviewItem label="Level" value={data.level} />
        <ReviewItem label="Graduation Year" value={data.graduationYear} />
        <ReviewItem label="Other Certifications" value={data.otherCertifications} />
      </ReviewGroup>

      <ReviewGroup title="Technical Background">
        <ReviewItem label="Technical Skills" value={data.technicalSkills} />
        <ReviewItem label="Areas of Expertise" value={data.areasOfExpertise} />
        <ReviewItem label="Relevant Experience" value={data.relevantExperience} />
      </ReviewGroup>

      <ReviewGroup title="Venture Idea">
        <ReviewItem label="Idea Name" value={data.ideaName} />
        <ReviewItem label="Problem" value={data.problemSolving} />
        <ReviewItem label="Who Experiences It" value={data.whoExperiencesProblem} />
        <ReviewItem label="Solution" value={data.solution} />
        <ReviewItem label="Why Important" value={data.whyImportant} />
        <ReviewItem label="What Makes It Different" value={data.whatMakesDifferent} />
        <ReviewItem label="Current Stage" value={stageLabel} />
        <ReviewItem label="Progress So Far" value={data.whatAlreadyDone} />
      </ReviewGroup>

      <ReviewGroup title="Motivation">
        <ReviewItem label="Why Join" value={data.whyJoin} />
        <ReviewItem label="Why Select You" value={data.whySelectYou} />
        <ReviewItem label="Six-Week Goals" value={data.sixWeekGoals} />
        <ReviewItem label="Education Interests" value={data.educationInterests} />
        <ReviewItem label="Future Vision" value={data.futureVision} />
      </ReviewGroup>

      <ReviewGroup title="Commitment">
        <ReviewItem label="Can Attend Full Program" value={data.canAttendFullProgram} />
        <ReviewItem label="Has Laptop" value={data.hasLaptop} />
        <ReviewItem label="Willing to Pay Fee" value={data.willingToPayFee} />
        <ReviewItem label="Active Participation" value={data.willingToParticipate} />
      </ReviewGroup>
    </div>
  );
};

export default SectionReview;
