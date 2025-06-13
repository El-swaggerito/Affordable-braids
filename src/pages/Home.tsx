import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, Calendar } from 'lucide-react';

const Home = () => {
  const reviews = [
    {
      name: "Keisha Johnson",
      rating: 5,
      text: "Amazing work! My box braids lasted for months and looked perfect the entire time. Definitely coming back!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Amara Williams",
      rating: 5,
      text: "Best braiding salon in the city! Professional, clean, and affordable prices. Love my goddess locs!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Zara Thompson",
      rating: 5,
      text: "The attention to detail is incredible. My cornrows are so neat and precise. Highly recommend!",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-salon-pink/20 to-pink-200/30 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Welcome to
                <span className="block bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">
                  Affordable Braids
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert braiding services at prices that won't break the bank. From protective styles to trendy braids, 
                we specialize in beautiful, long-lasting hairstyles that celebrate your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
                >
                  Book Your Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-salon-pink text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-pink hover:text-white transition-all duration-200 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="lg:justify-self-end animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md">
                <img
                  src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Beautiful braided hairstyle"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-salon-gold fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">5.0 (450+ reviews)</span>
                </div>
                <p className="text-gray-600 italic">
                  "The best braiding salon I've ever been to. Quality work at amazing prices!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Professional braider at work"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Meet Your Braiding Expert
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hi, my name is Hadiat Adedeji from Affordable Braids, and I'm located in Toronto. I specialize in creating beautiful and long-lasting braids for clients who want to look and feel amazing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My passion is providing high-quality braiding services at affordable prices, ensuring that everyone can access beautiful protective styles. Whether you're looking for box braids, cornrows, goddess locs, or any other protective style, I'm here to help you achieve the perfect look while keeping your natural hair healthy and protected.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-salon-pink/20 p-4 rounded-full">
                  <Calendar className="h-6 w-6 text-salon-pink" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Professional Braiding Specialist</p>
                  <p className="text-gray-600">Licensed & Experienced in Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-salon-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-salon-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
              <Star className="h-5 w-5 text-salon-gold fill-current mr-2" />
              <span className="font-semibold text-gray-800">4.9/5 Average Rating</span>
              <span className="text-gray-600 ml-2">• 450+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Studio</h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Toronto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-200 border border-salon-pink/20">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-salon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">
                1530 Victoria Park Avenue<br />
                Toronto, ON<br />
                Canada
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-200 border border-salon-pink/20">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-salon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+14379836451" className="hover:text-salon-pink transition-colors">
                  +1 (437) 983-6451
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-200 border border-salon-pink/20">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-salon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:Adedejitiwalade8@gmail.com" className="hover:text-salon-pink transition-colors">
                  Adedejitiwalade8@gmail.com
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-200 border border-salon-pink/20">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-salon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
              <div className="text-gray-600 space-y-1 text-sm">
                <p>Monday: 3PM-10PM</p>
                <p>Tue-Wed: 7PM-10PM</p>
                <p>Thu-Fri: 2PM-10PM</p>
                <p>Sat-Sun: 7AM-10PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;