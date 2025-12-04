import React from 'react';
import ent1 from '../assets/ent1.jpg'
import ent2 from '../assets/ent2.jpg'
import ent3 from '../assets/ent3.jpg'
// Sample data for the featured articles
const featuredPosts = [
  {
    id: 1,
    title: "Mastering Tailwind CSS: A Deep Dive into Utility-First",
    excerpt: "Learn how to leverage the power of Tailwind CSS to build stunning, utility-first designs rapidly without writing a single line of custom CSS.",
    imageUrl: ent1,
    category: "Development",
    readTime: "7 min read",
    link: "#",
    isPrimary: true,
  },
  {
    id: 2,
    title: "The Future of Serverless Computing in 2025",
    excerpt: "Exploring new trends and major platforms shaping the landscape of backend development without managing infrastructure.",
    imageUrl: ent2,
    category: "Cloud Tech",
    readTime: "5 min read",
    link: "#",
    isPrimary: false,
  },
  {
    id: 3,
    title: "Why React Hooks Changed Everything for Component Design",
    excerpt: "A look at how useEffect and useState simplified state management and lifecycle methods in modern React applications.",
    imageUrl: ent3,
    category: "Frontend",
    readTime: "6 min read",
    link: "#",
    isPrimary: false,
  },
];

// --- Sub-Components ---

// Component for the large, primary featured post
const PrimaryFeatureCard = ({ post }) => (
  <a href={post.link} className="block group relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
    <img 
      src={post.imageUrl} 
      alt={post.title} 
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <div className="absolute bottom-0 p-6 sm:p-8 w-full text-white">
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-600 text-white rounded-full">
        {post.category}
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight group-hover:text-indigo-400 transition duration-300">
        {post.title}
      </h2>
      <p className="mt-2 text-gray-300 hidden sm:block">
        {post.excerpt}
      </p>
      <div className="mt-3 text-sm text-gray-400">
        <span className="font-medium">{post.readTime}</span>
      </div>
    </div>
  </a>
);

// Component for the smaller, secondary featured posts
const SecondaryFeatureCard = ({ post }) => (
  <a href={post.link} className="flex flex-col group p-4 border border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-lg">
    <img 
      src={post.imageUrl} 
      alt={post.title} 
      className="w-full h-40 object-cover rounded-md mb-4 transition-opacity duration-300 group-hover:opacity-90"
    />
    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
      {post.category}
    </span>
    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition duration-300">
      {post.title}
    </h3>
    <p className="mt-2 text-sm text-gray-600 flex-grow">
      {post.excerpt}
    </p>
    <div className="mt-3 text-sm text-gray-500">
      <span className="font-medium">{post.readTime}</span>
    </div>
  </a>
);

// --- Main Component ---

const FeaturedArticlesSection = () => {
  const primaryPost = featuredPosts.find(p => p.isPrimary);
  const secondaryPosts = featuredPosts.filter(p => !p.isPrimary);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 border-b-2 border-indigo-500 pb-2">
          🔥 Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Primary Feature Post (Takes up 2/3 width on desktop) */}
          <div className="lg:col-span-2">
            {primaryPost && <PrimaryFeatureCard post={primaryPost} />}
          </div>

          {/* 2. Secondary Feature Posts (Takes up 1/3 width on desktop) */}
          <div className="lg:col-span-1 space-y-8">
            {secondaryPosts.map(post => (
              <SecondaryFeatureCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;