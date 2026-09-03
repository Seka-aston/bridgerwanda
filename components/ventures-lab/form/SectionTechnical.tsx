
import React from 'react';
import Textarea from '../../ui/Textarea';
import { VenturesLabApplication } from '../../../types';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const SectionTechnical: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-6">Technical Background</h3>
      <div className="space-y-6">
        <Textarea
          label="Technical Skills"
          name="technicalSkills"
          value={data.technicalSkills}
          onChange={(e) => updateData({ technicalSkills: e.target.value })}
          hint="List your technical skills (e.g., programming languages, tools, frameworks)"
          required
        />
        <Textarea
          label="Areas of Expertise"
          name="areasOfExpertise"
          value={data.areasOfExpertise}
          onChange={(e) => updateData({ areasOfExpertise: e.target.value })}
          hint="What are your main areas of technical expertise?"
          required
        />
        <Textarea
          label="Relevant Experience/Projects"
          name="relevantExperience"
          value={data.relevantExperience}
          onChange={(e) => updateData({ relevantExperience: e.target.value })}
          hint="Describe any relevant projects, internships, or work experience"
        />
      </div>
    </div>
  );
};

export default SectionTechnical;
