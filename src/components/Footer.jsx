import React from 'react';
// Importing icons from Heroicons for professional, clean look
import { BeakerIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon, HomeIcon, LinkIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons'; // Assuming 'react-social-icons' is installed

// Define navigation link groups
const linkGroups = [
  {
    title: "Explore",
    links: [
      { name: 'Home', href: '/', icon: HomeIcon },
      { name: 'Blog Index', href: '/blog', icon: AcademicCapIcon },
      { name: 'Categories', href: '/categories', icon: BeakerIcon },
    ],
  },
  {
    title: "About & Legal",
    links: [
      { name: 'About Us', href: '/about', icon: AcademicCapIcon },
      { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
      { name: 'Privacy Policy', href: '/privacy', icon: LinkIcon },
      { name: 'Terms of Service', href: '/terms', icon: LinkIcon },
    ],
  },
];

// Define social media links
const socialLinks = [
  { url: 'https://twitter.com', label: 'Twitter' },
  { url: 'https://linkedin.com', label: 'LinkedIn' },
  { url: 'https://github.com', label: 'GitHub' },
  { url: 'https://youtube.com', label: 'YouTube' },
];

// Sub-Component for a single column of links
const FooterLinkGroup = ({ group }) => (
  <div>
    <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
      {group.title}
    </h3>
    <ul role="list" className="mt-4 space-y-4">
      {group.links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-base text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center"
          >
            {/* Using the icon component */}
            {link.icon && <link.icon className="w-4 h-4 mr-2" aria-hidden="true" />}
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogFooter = () => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          
          {/* Column 1: Logo and Brief Description */}
          <div className="space-y-6 xl:col-span-1">
            <h3 className="text-3xl font-extrabold text-white">
              Blog Logo
            </h3>
            <p className="text-gray-400 text-base">
              Your source for expert tutorials, deep-dive analyses, and the latest trends in development and technology.
            </p>
          </div>

          {/* Column 2 & 3: Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {linkGroups.map((group) => (
              <FooterLinkGroup key={group.title} group={group} />
            ))}
          </div>

          {/* Column 4: Social Media */}
          <div className="mt-12 xl:mt-0 xl:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((link) => (
                // Note: Using react-social-icons library for easy styling
                <SocialIcon
                  key={link.label}
                  url={link.url}
                  style={{ height: 35, width: 35 }}
                  fgColor="#fff" // White icon color
                  bgColor="transparent" // Transparent background
                  className="transition-opacity duration-200 hover:opacity-75"
                  aria-label={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator and Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;