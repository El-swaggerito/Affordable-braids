import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-salon-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-salon-pink to-pink-400 p-2 rounded-full group-hover:scale-110 transition-transform duration-200">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">
              Affordable Braids
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-salon-pink text-white shadow-lg'
                    : 'text-gray-700 hover:text-salon-pink hover:bg-pink-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-salon-pink hover:bg-pink-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-salon-pink text-white shadow-md'
                      : 'text-gray-700 hover:text-salon-pink hover:bg-pink-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;