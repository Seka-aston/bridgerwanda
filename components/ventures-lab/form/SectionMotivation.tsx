
import React from 'react';
import Textarea from '../../ui/Textarea';
import { VenturesLabApplication } from '../../../types';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const SectionMotivation: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-6">Motivation</h3>
      <div className="space-y-6">
        <Textarea
          label="Why do you want to join Bridge Ventures Lab?"
          name="whyJoin"
          value={data.whyJoin}
          onChange={(e) => updateData({ whyJoin: e.target.value })}
          required
        />
        <Textarea
          label="Why should Bridge select you?"
          name="whySelectYou"
          value={data.whySelectYou}
          onChange={(e) => updateData({ whySelectYou: e.target.value })}
          required
        />
        <Textarea
          label="What do you hope to achieve during the six weeks?"
          name="sixWeekGoals"
          value={data.sixWeekGoals}
          onChange={(e) => updateData({ sixWeekGoals: e.target.value })}
          required
        />
        <Textarea
          label="What are your higher education/professional development interests?"
          name="educationInterests"
          value={data.educationInterests}
          onChange={(e) => updateData({ educationInterests: e.target.value })}
        />
        <Textarea
          label="Where do you see this idea in the future?"
          name="futureVision"
          value={data.futureVision}
          onChange={(e) => updateData({ futureVision: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SectionMotivation;
