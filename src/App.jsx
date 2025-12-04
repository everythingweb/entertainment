import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MovieStreamingHero from './components/MovieStreamingHero'
import FeaturedArticlesSection from './components/FeaturedArticlesSection'
import LatestPostsFeed from './components/LatestFeedPosts'
import BlogCtaSection from './components/BlogCtaSection'
import BlogFooter from './components/Footer'

const App = () => {
  return (
    <BrowserRouter basename="/bucregaltech">
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={
          <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-800 font-sans">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
          <MovieStreamingHero />
            <FeaturedArticlesSection />
          <LatestPostsFeed />
          <BlogCtaSection />
          <BlogFooter />
            </div>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App
