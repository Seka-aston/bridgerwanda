
import React from 'react';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import Select from '../../ui/Select';
import { VenturesLabApplication } from '../../../types';
import { VENTURE_STAGE_OPTIONS } from '../../../constants';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const SectionVenture: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-2">Venture Idea</h3>
      <p className="text-text-main mb-6">Keep it simple — tell us about your idea in plain language.</p>
      <div className="space-y-6">
        <Input
          label="Name of Idea/Project"
          name="ideaName"
          value={data.ideaName}
          onChange={(e) => updateData({ ideaName: e.target.value })}
          required
        />
        <Textarea
          label="What problem are you solving?"
          name="problemSolving"
          value={data.problemSolving}
          onChange={(e) => updateData({ problemSolving: e.target.value })}
          required
        />
        <Textarea
          label="Who experiences this problem?"
          name="whoExperiencesProblem"
          value={data.whoExperiencesProblem}
          onChange={(e) => updateData({ whoExperiencesProblem: e.target.value })}
          required
        />
        <Textarea
          label="Describe your solution"
          name="solution"
          value={data.solution}
          onChange={(e) => updateData({ solution: e.target.value })}
          required
        />
        <Textarea
          label="Why is this problem important?"
          name="whyImportant"
          value={data.whyImportant}
          onChange={(e) => updateData({ whyImportant: e.target.value })}
          required
        />
        <Textarea
          label="What makes your idea different?"
          name="whatMakesDifferent"
          value={data.whatMakesDifferent}
          onChange={(e) => updateData({ whatMakesDifferent: e.target.value })}
          required
        />
        <Select
          label="Current Stage"
          name="currentStage"
          value={data.currentStage}
          onChange={(e) => updateData({ currentStage: e.target.value })}
          placeholder="Select current stage"
          options={VENTURE_STAGE_OPTIONS}
          required
        />
        <Textarea
          label="What have you already done?"
          name="whatAlreadyDone"
          value={data.whatAlreadyDone}
          onChange={(e) => updateData({ whatAlreadyDone: e.target.value })}
          hint="Describe any progress you've made on this idea so far"
        />
      </div>
    </div>
  );
};

export default SectionVenture;
