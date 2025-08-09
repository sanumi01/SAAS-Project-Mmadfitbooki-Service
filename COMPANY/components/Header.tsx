import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = "text-accent";
  const inactiveLinkClass = "text-dark hover:text-accent";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://storage.googleapis.com/agent-tools-public-test-assets/MAMAAD-logo.png" alt="MAMAAD SOLUTION LIMITED Logo" className="h-14" />
          </Link>
          <nav className="flex items-center space-x-4 md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} transition-colors duration-300 font-medium text-lg`}
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-105 font-semibold shadow-md"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;