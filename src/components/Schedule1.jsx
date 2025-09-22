import scheduleImage from '../assets/data analysis.webp'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from 'react-router';


const Schedule1 = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.img
            variants={fadeIn('up', 0.4)}
            src={scheduleImage}
            alt="Statistics dashboard"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold text-2xl"
          >
            Data Analysis
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6"
          >
            Analyze data, make insights, <br />and get hired
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8"
          >
            Our hands-on data analysis program teaches you to turn complex data into actionable insights, helping you land a high-paying job in a growing field.
          </motion.p>

          {/* This is the key change: replacing <a> with <Link> */}
          <Link
            to="/data-analysis-detail"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
            <motion.svg
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Schedule1;