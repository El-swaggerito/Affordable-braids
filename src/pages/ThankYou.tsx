import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Phone, Home, Sparkles } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // Add confetti animation on page load
    const timer = setTimeout(() => {
      // This could be enhanced with a confetti library if needed
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 animate-fade-in">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mb-8 animate-bounce-soft">
          <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-2xl">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Main Message */}
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your braiding appointment request has been successfully submitted. We're excited to help you achieve your perfect protective style!
          </p>
        </div>

        {/* Confirmation Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-salon-pink mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">What Happens Next?</h2>
            <Sparkles className="h-6 w-6 text-salon-pink ml-2" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-salon-pink/20 p-2 rounded-full flex-shrink-0">
                <span className="block w-6 h-6 bg-salon-pink text-white rounded-full text-center text-sm font-bold leading-6">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Confirmation</h3>
                <p className="text-gray-600 text-sm">We'll confirm your appointment within 24 hours via email or phone</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-salon-pink/20 p-2 rounded-full flex-shrink-0">
                <span className="block w-6 h-6 bg-salon-pink text-white rounded-full text-center text-sm font-bold leading-6">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Preparation</h3>
                <p className="text-gray-600 text-sm">We'll prepare all materials and hair extensions for your specific style</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-salon-pink/20 p-2 rounded-full flex-shrink-0">
                <span className="block w-6 h-6 bg-salon-pink text-white rounded-full text-center text-sm font-bold leading-6">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Your Visit</h3>
                <p className="text-gray-600 text-sm">Enjoy your personalized braiding experience and leave feeling beautiful</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-salon-pink/10 rounded-2xl p-6 mb-8 animate-slide-up">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Need to Make Changes?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+14379836451"
              className="flex items-center text-salon-pink hover:text-pink-600 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              +1 (437) 983-6451
            </a>
            <a
              href="mailto:Adedejitiwalade8@gmail.com"
              className="flex items-center text-salon-pink hover:text-pink-600 transition-colors duration-200"
            >
              <span>Adedejitiwalade8@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            to="/"
            className="flex items-center justify-center bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Return Home
          </Link>
          
          <Link
            to="/book"
            className="flex items-center justify-center border-2 border-salon-pink text-salon-pink px-8 py-3 rounded-full font-semibold hover:bg-salon-pink hover:text-white transition-all duration-200"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Another Appointment
          </Link>
        </div>

        {/* Additional Message */}
        <div className="mt-12 animate-slide-up">
          <p className="text-gray-500 italic">
            "We can't wait to help you look and feel your absolute best!"
          </p>
          <p className="text-salon-pink font-semibold mt-2">
            - Hadiat & The Affordable Braids Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;