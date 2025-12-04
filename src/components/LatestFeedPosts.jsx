import React from 'react';
import { ClockIcon, TagIcon } from '@heroicons/react/24/solid';
import ent4 from '../assets/ent4.jpg'
import ent5 from '../assets/ent5.jpg'
import ent6 from '../assets/ent6.jpg'
import ent7 from '../assets/ent7.jpg'
import ent8 from '../assets/ent8.jpg'
import ent9 from '../assets/ent9.jpg'


// Sample data for the latest articles
const latestPosts = [
  {
    id: 101,
    title: "Understanding CSS Grid vs. Flexbox: Which to Choose?",
    excerpt: "A comparison of two powerful layout tools and when to use each for optimal page structure.",
    imageUrl: ent4,
    category: "Frontend",
    date: "November 20, 2025",
    readTime: "4 min read",
    link: "#",
  },
  {
    id: 102,
    title: "Top 5 Productivity Hacks for Remote Software Engineers",
    excerpt: "Strategies and tools to maximize focus and output when working from home or a co-working space.",
    imageUrl: ent5,
    category: "Career",
    date: "November 18, 2025",
    readTime: "6 min read",
    link: "#",
  },
  {
    id: 103,
    title: "Implementing Dark Mode with Tailwind CSS and React",
    excerpt: "A step-by-step guide to adding theme toggling using Tailwind classes and React state management.",
    imageUrl: ent6,
    category: "Development",
    date: "November 15, 2025",
    readTime: "7 min read",
    link: "#",
  },
  {
    id: 104,
    title: "10 Essential VS Code Extensions for TypeScript Developers",
    excerpt: "Boost your coding speed and quality with these must-have extensions for the TypeScript ecosystem.",
    imageUrl: ent7,
    category: "Tools",
    date: "November 12, 2025",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 105,
    title: "The Case for GraphQL in Modern Web Applications",
    excerpt: "How GraphQL improves data fetching efficiency and developer experience compared to traditional REST APIs.",
    imageUrl: ent8,
    category: "Backend",
    date: "November 10, 2025",
    readTime: "8 min read",
    link: "#",
  },
  {
    id: 106,
    title: "Getting Started with Zustand: A Minimal State Manager",
    excerpt: "Discover the simplicity and power of Zustand for lightweight and fast global state in your React projects.",
    imageUrl: ent9,
    category: "State Management",
    date: "November 7, 2025",
    readTime: "4 min read",
    link: "#",
  },
];

// --- Sub-Component for a single article card ---

const ArticleCard = ({ post }) => (
  <a 
    href={post.link} 
    className="block group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 bg-white hover:shadow-xl"
  >
    {/* Image */}
    <div className="overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      {/* Metadata */}
      <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
        <span className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1 text-indigo-500" />
          {post.readTime}
        </span>
        <span className="flex items-center">
          <TagIcon className="w-4 h-4 mr-1 text-indigo-500" />
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-indigo-700">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 text-base text-gray-600 line-clamp-2">
        {post.excerpt}
      </p>
      
      {/* Date */}
      <p className="mt-4 text-xs font-medium text-gray-400">
        Published on: {post.date}
      </p>
    </div>
  </a>
);

// --- Main Component ---

const LatestPostsFeed = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 text-center">
          ✨ Latest Movies
        </h2>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map(post => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            View All Posts (Blog Index)
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestPostsFeed;