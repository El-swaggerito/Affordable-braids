import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Heart, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-salon-cream via-white to-pink-50">
        {/* Floating decorative icons */}
        <div className="absolute top-20 left-10 text-salon-pink/20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-32 right-16 text-pink-300/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Heart className="h-6 w-6" />
        </div>
        <div className="absolute bottom-32 left-20 text-salon-pink/25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <Star className="h-7 w-7" />
        </div>
        <div className="absolute bottom-20 right-10 text-pink-200/40 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
          <Scissors className="h-9 w-9" />
        </div>
        <div className="absolute top-1/2 left-8 text-salon-pink/15 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }}>
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="absolute top-1/3 right-8 text-pink-300/25 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.2s' }}>
          <Heart className="h-8 w-8" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Brand logo/icon */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-salon-pink to-pink-400 rounded-full shadow-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <Scissors className="h-12 w-12 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        {/* Brand name */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon-pink via-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              Affordable
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
              Braids
            </span>
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-6 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-salon-pink to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-salon-pink rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-salon-pink to-transparent w-32"></div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 font-light italic">
            Beautiful braids, beautiful you
          </p>
        </div>

        {/* Book now button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-salon-pink to-pink-400 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-salon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative flex items-center">
              <Scissors className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Book Now
              <Sparkles className="h-5 w-5 ml-3 group-hover:scale-125 transition-transform duration-300" />
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>

        {/* Subtle additional info */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-500 text-sm">
            Professional braiding services in Toronto
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-salon-gold fill-current" />
            ))}
            <span className="ml-2 text-gray-500 text-sm">5.0 • 450+ reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-salon-pink/10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;