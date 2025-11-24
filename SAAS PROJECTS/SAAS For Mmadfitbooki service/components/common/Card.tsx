
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface-dark border border-border-dark rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
};
