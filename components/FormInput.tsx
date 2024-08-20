import React from 'react';

interface FormInputProps {
  id: string;
  type: string;                                      // Input type (text, email, password, etc.)
  value: string;                                     // Input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Change handler
  placeholder?: string;                              // Placeholder text
  label?: string;                                    // Optional label text
  className?: string;                                // Custom CSS classes
}

const FormInput = ({
  id,
  type,
  value,
  onChange,
  placeholder = '',
  label = '',
  className = '',
}: FormInputProps) => (
  <div className={`mb-4 ${className}`}>
    {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default FormInput;
