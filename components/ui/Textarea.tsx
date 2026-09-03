
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  hint?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, hint, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {props.required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        {...props}
        className="w-full px-3 py-2 bg-white text-text-main border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100 resize-vertical"
      />
      {hint && <p className="mt-1 text-sm text-gray-500">{hint}</p>}
    </div>
  );
};

export default Textarea;
