import React, { useState } from 'react';
import logoSrc from '../assets/logo-1.svg';
// A single component for the responsive navbar.
const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section with Image */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              {/* Image with fallback for when the URL is invalid */}
              <img src={logoSrc} alt="Company Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Our Service
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Testimonials
              </a>
              <a href="#" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-indigo-700">
                Apply to learn
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Close icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Our Service
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="block text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-full px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Apply to learn
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar1;
  
