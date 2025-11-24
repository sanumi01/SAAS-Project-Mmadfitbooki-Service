
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, EnvelopeIcon } from './IconComponents';
import { TEAM_MEMBERS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <img src="https://storage.googleapis.com/agent-tools-public-test-assets/MAMAAD-logo.png" alt="MAMAAD SOLUTION LIMITED Logo" className="h-14" />
            </div>
            <p className="max-w-xs text-gray-400">
              Driving business transformation through innovative data and cloud solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-accent"/>
                <span>Larkhall, Scotland, United Kingdom</span>
              </li>
              <li className="flex items-start space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0"/>
                <div>
                    <a href="mailto:koladeadio@googlemail.com" className="block hover:text-white hover:underline">koladeadio@googlemail.com</a>
                    <a href="mailto:mamaadsolution@mamaad.com" className="block hover:text-white hover:underline">mamaadsolution@mamaad.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white hover:underline">Home</Link></li>
              <li><a href="#services" className="hover:text-white hover:underline">Our Services</a></li>
              <li><a href="#team" className="hover:text-white hover:underline">Our Team</a></li>
              <li><Link to="/contact" className="hover:text-white hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Leadership</h3>
            <ul className="space-y-2 text-gray-400">
                {TEAM_MEMBERS.map(member => (
                    <li key={member.name}>
                        <p className="font-semibold text-gray-300">{member.name}</p>
                        <p className="text-sm">{member.role}</p>
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MAMAAD SOLUTION LIMITED. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;