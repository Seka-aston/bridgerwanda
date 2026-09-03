
import React from 'react';
import { VenturesLabApplication } from '../../../types';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const CommitmentItem: React.FC<{
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  note?: string;
}> = ({ label, checked, onChange, note }) => (
  <label className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-primary transition-colors">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
    />
    <div>
      <span className="text-text-main font-medium">{label}</span>
      {note && <p className="text-sm text-gray-500 mt-1">{note}</p>}
    </div>
  </label>
);

const SectionCommitment: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-6">Commitment</h3>
      <div className="space-y-4">
        <CommitmentItem
          label="Can you attend the full six-week program in person?"
          checked={data.canAttendFullProgram}
          onChange={(checked) => updateData({ canAttendFullProgram: checked })}
        />
        <CommitmentItem
          label="Do you have access to a personal laptop?"
          checked={data.hasLaptop}
          onChange={(checked) => updateData({ hasLaptop: checked })}
        />
        <CommitmentItem
          label="Are you willing to commit the required 50,000 Frw fee if selected?"
          checked={data.willingToPayFee}
          onChange={(checked) => updateData({ willingToPayFee: checked })}
          note="This fee is collected only after selection to confirm participation and contribute toward learning materials, program resources, and operational costs. It does not determine selection."
        />
        <CommitmentItem
          label="Are you willing to participate actively throughout the program?"
          checked={data.willingToParticipate}
          onChange={(checked) => updateData({ willingToParticipate: checked })}
        />
      </div>
    </div>
  );
};

export default SectionCommitment;
