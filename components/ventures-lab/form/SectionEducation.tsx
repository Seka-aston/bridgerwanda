
import React from 'react';
import Input from '../../ui/Input';
import { VenturesLabApplication } from '../../../types';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const SectionEducation: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-6">Educational Background</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Previous/Current TVET Institution"
          name="tvetInstitution"
          value={data.tvetInstitution}
          onChange={(e) => updateData({ tvetInstitution: e.target.value })}
          required
        />
        <Input
          label="Trade/Program Studied"
          name="tradeProgram"
          value={data.tradeProgram}
          onChange={(e) => updateData({ tradeProgram: e.target.value })}
          required
        />
        <Input
          label="Level"
          name="level"
          value={data.level}
          onChange={(e) => updateData({ level: e.target.value })}
          required
        />
        <Input
          label="Graduation Year/Status"
          name="graduationYear"
          value={data.graduationYear}
          onChange={(e) => updateData({ graduationYear: e.target.value })}
          required
        />
        <div className="md:col-span-2">
          <Input
            label="Other Education or Certifications"
            name="otherCertifications"
            value={data.otherCertifications}
            onChange={(e) => updateData({ otherCertifications: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionEducation;
