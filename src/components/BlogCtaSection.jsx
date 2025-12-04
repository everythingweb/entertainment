import React, { useState } from 'react';

const BlogCtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    // --- Simulate API call / Submission logic ---
    setTimeout(() => {
      console.log('Subscribing email:', email);
      setIsSubmitting(false);
      
      // Assume success for this example
      setMessage('🎉 Success! Check your inbox to confirm your subscription.');
      setEmail(''); 
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Don't Miss Out on the Next Big Thing!
        </h2>
        
        {/* Subtitle / Value Proposition */}
        <p className="mt-4 text-xl text-indigo-200 leading-relaxed">
          Join our newsletter for weekly insights, exclusive tutorials, and expert tips delivered straight to your inbox. Zero spam, guaranteed.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:justify-center">
          <div className="flex flex-col sm:flex-row w-full max-w-lg space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-6 py-3 border border-transparent rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className={`w-full sm:w-auto px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white transition duration-300 ease-in-out ${
                isSubmitting 
                  ? 'bg-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </div>
        </form>
        
        {/* Submission Message */}
        {message && (
          <p className="mt-4 text-base font-medium text-green-400">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogCtaSection;