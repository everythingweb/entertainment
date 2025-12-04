import heroBackgroundImage1 from '../assets/entertainment background.jpeg'
import profileAvatar1 from '../assets/profile avatar.jpg'
import jonhWick from '../assets/john wick.jpg'
import BabyDriver from '../assets/baby-driver.jpg'
import BladeRunner from '../assets/blade-runner.jpg'
import BohemianRhapsody from '../assets/Bohemian Rhapsody.jpg'
import Brave from '../assets/brave.jpg'
import Casablanca from '../assets/casablanca.jpg'
import CrazyStupidLove from '../assets/crazy stupid love.jpg'
import Deadpool from '../assets/deadpool.jpg'

// Assuming you have these images in your public folder or imported
// For demonstration, I'm using placeholder images from Unsplash or similar.
const heroBackgroundImage = heroBackgroundImage1; // Replace with Raya image
const profileAvatar = profileAvatar1; // Replace with a user avatar

const myListMovies = [
  { id: 1, title: 'John Wick', image: jonhWick },
  { id: 2, title: 'Baby Driver', image: BabyDriver },
  { id: 3, title: 'Blade Runner', image: BladeRunner},
  { id: 4, title: 'Bohemian Rhapsody', image: BohemianRhapsody },
  { id: 5, title: 'Brave', image: Brave },
  { id: 6, title: 'Casablanca', image: Casablanca },
  { id: 7, title: 'Crazy Stupid Love', image: CrazyStupidLove},
  { id: 8, title: 'Deadpool', image: Deadpool },
];

const MovieStreamingHero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 flex flex-col justify-between h-full">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold text-white tracking-widest">DASHBOARD</span>
            <ul className="flex space-x-6 text-gray-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">MOVIES</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SERIES</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KIDS</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <img src={profileAvatar} alt="Profile" className="h-8 w-8 rounded-full border-2 border-white cursor-pointer" />
          </div>
        </nav>

        {/* Hero Movie Details */}
        <div className="mb-24 mt-24"> {/* Added margin-top to push content down slightly */}
          <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            RAYA AND THE LAST DRAGON
          </h1>
          <div className="flex items-center space-x-4 text-lg mb-6">
            <span className="text-green-400 font-semibold">A Disney Original Film</span>
            <span className="text-gray-300">98% Match</span>
            <span className="text-gray-300">2021</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-xl hover:bg-purple-700 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              PLAY
            </button>
            <button className="flex items-center p-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:border-white hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* My List Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MY LIST</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {myListMovies.map(movie => (
              <div key={movie.id} className="flex-shrink-0 w-36 h-56 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieStreamingHero;