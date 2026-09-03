
import React from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { VenturesLabApplication } from '../../../types';

interface Props {
  data: VenturesLabApplication;
  updateData: (data: Partial<VenturesLabApplication>) => void;
}

const SectionPersonal: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-text-headings mb-6">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={(e) => updateData({ fullName: e.target.value })}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          required
        />
        <Input
          label="Location"
          name="location"
          value={data.location}
          onChange={(e) => updateData({ location: e.target.value })}
          required
        />
        <Input
          label="Age"
          name="age"
          type="number"
          value={data.age}
          onChange={(e) => updateData({ age: e.target.value })}
          required
        />
        <Select
          label="Gender"
          name="gender"
          value={data.gender}
          onChange={(e) => updateData({ gender: e.target.value })}
          placeholder="Select gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
            { value: 'prefer-not-to-say', label: 'Prefer not to say' },
          ]}
          required
        />
        <div className="md:col-span-2">
          <Input
            label="Parent's Contact Information (if any)"
            name="parentContact"
            value={data.parentContact}
            onChange={(e) => updateData({ parentContact: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPersonal;
