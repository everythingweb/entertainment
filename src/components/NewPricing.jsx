import React, { useState } from 'react';



// Main App component containing the complete pricing page logic
function NewPricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = {
        monthly: {
            basic: 299,
            pro: 499,
            ultimate: 799
        },
        annually: {
            basic: 239, // 20% off from 299
            pro: 399, // 20% off from 499
            ultimate: 639 // 20% off from 799
        }
    };

    const togglePricing = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
                {/* Pricing Page content integrated directly into the App component */}
                <div className="bg-gray-50 text-gray-900 flex items-center justify-center p-4 font-sans">
                    <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                        {/* Pricing Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                                Unlock Your Potential
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Choose the right plan to kickstart your tech career. Each plan gives you full access to our comprehensive bootcamp curriculum, expert instructors, and a supportive community.
                            </p>
                        </div>

                        {/* Pricing Toggle */}
                        <div className="flex justify-center items-center mb-12">
                            <span className={`text-sm font-medium mr-3 transition-colors duration-200 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                                Monthly
                            </span>
                            <div
                                onClick={togglePricing}
                                className={`
                                    relative inline-block w-14 h-8 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
                                    ${isAnnual ? 'bg-indigo-600' : 'bg-gray-300'}
                                `}
                            >
                                <span className={`
                                    absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out
                                    ${isAnnual ? 'translate-x-6' : ''}
                                `}></span>
                            </div>
                            <span className={`text-sm font-medium ml-3 transition-colors duration-200 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                                Annually
                            </span>
                            <span className="ml-2 text-xs font-semibold text-white bg-indigo-500 rounded-full px-2 py-1">20% OFF</span>
                        </div>

                        {/* Pricing Cards Container */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Pricing Card 1: Basic Plan */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
                                    <span className="text-sm font-semibold text-gray-500">For Beginners</span>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold tracking-tight text-gray-900">${isAnnual ? plans.annually.basic : plans.monthly.basic}</span>
                                    <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    The perfect starting point to learn the fundamentals of web development.
                                </p>
                                <ul role="list" className="mt-8 space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Access to core curriculum</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Weekly live sessions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Community access</span>
                                    </li>
                                </ul>
                                <a href="#" className="mt-8 block w-full text-center py-3 px-6 rounded-xl border border-indigo-500 text-indigo-500 font-semibold transition-colors duration-300 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Get Started
                                </a>
                            </div>

                            {/* Pricing Card 2: Pro Plan */}
                            <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl border-4 border-indigo-500 transform transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                                <span className="absolute top-0 right-0 px-3 py-1 bg-white text-indigo-600 text-xs font-semibold rounded-bl-lg">Most Popular</span>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-white">Pro</h2>
                                    <span className="text-sm font-semibold text-indigo-200">For Ambitious Learners</span>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold tracking-tight text-white">${isAnnual ? plans.annually.pro : plans.monthly.pro}</span>
                                    <span className="ml-1 text-xl font-medium text-indigo-200">/mo</span>
                                </div>
                                <p className="mt-4 text-sm text-indigo-200">
                                    Everything you need to land your first job, with personalized support.
                                </p>
                                <ul role="list" className="mt-8 space-y-4 text-sm text-indigo-100">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Everything in Basic</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Dedicated mentor sessions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Career counseling & resume reviews</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Job interview preparation</span>
                                    </li>
                                </ul>
                                <a href="#" className="mt-8 block w-full text-center py-3 px-6 rounded-xl bg-white text-indigo-600 font-semibold transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                                    Start Pro Plan
                                </a>
                            </div>

                            {/* Pricing Card 3: Ultimate Plan */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800">Ultimate</h2>
                                    <span className="text-sm font-semibold text-gray-500">For Full Immersion</span>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold tracking-tight text-gray-900">${isAnnual ? plans.annually.ultimate : plans.monthly.ultimate}</span>
                                    <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    The fastest track to success with everything included and personalized attention.
                                </p>
                                <ul role="list" className="mt-8 space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Unlimited 1-on-1 coaching</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Personalized project guidance</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Exclusive job-matching service</span>
                                    </li>
                                </ul>
                                <a href="#" className="mt-8 block w-full text-center py-3 px-6 rounded-xl border border-indigo-500 text-indigo-500 font-semibold transition-colors duration-300 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Go Ultimate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NewPricing;
