import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; // Allow more button types
  onClick?: () => void;                 // Optional click handler
  isLoading?: boolean;                  // Loading state
  disabled?: boolean;                   // Disable button manually
  className?: string;                   // Custom CSS classes
  children: React.ReactNode;            // Button content (text, icons)
}

const Button = ({
  type = 'button',  // Default type is 'button'
  onClick,
  isLoading = false,
  disabled = false,
  className = '',
  children,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full py-2 px-4 rounded-md text-white ${isLoading || disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors ${className}`}
    disabled={isLoading || disabled}  // Disable if loading or explicitly disabled
  >
    {isLoading ? 'Loading...' : children}  // Show loading text if isLoading is true
  </button>
);

export default Button;
