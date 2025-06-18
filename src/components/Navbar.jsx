import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030014]/80 backdrop-blur-lg border-b border-light-100/10 p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Movie App Logo" className="h-8 w-8" />
            <span className="ml-2 text-white text-xl font-bold gradient">MovieApp</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-light-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-light-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Movies
              </a>
              <a href="#" className="text-light-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                TV Shows
              </a>
              <a href="#" className="text-light-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button className="btnGradient cursor-pointer hover:btnHover text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-100 hover:text-white hover:bg-light-100/10 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#030014]/95 backdrop-blur-md">
            <a href="#" className="text-light-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-light-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Movies
            </a>
            <a href="#" className="text-light-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              TV Shows
            </a>
            <a href="#" className="text-light-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <button className=" cursor-pointer w-full mt-4 gradient text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 