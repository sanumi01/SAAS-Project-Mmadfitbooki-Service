
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  skills: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}
