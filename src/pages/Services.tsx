import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Scissors, Palette, Sparkles, Crown, Star, Heart, Zap, Waves, Wind, Feather } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Large Knotless",
      description: "Gentle knotless braiding technique without knots at the root for reduced tension and a natural look",
      price: "$155",
      icon: Crown,
      image: "/Large knotless 155.jpg"
    },
    {
      id: 2,
      name: "Cornrows",
      description: "Traditional braided style close to the scalp in straight lines or intricate patterns",
      price: "$30",
      icon: Palette,
      image: "/Conrow 30.jpg"
    },
    {
      id: 3,
      name: "Large Knotless (Premium)",
      description: "Premium large knotless braids with superior technique and longer-lasting results",
      price: "$165",
      icon: Crown,
      image: "/Large knotless 165.jpg"
    },
    {
      id: 4,
      name: "Large Boho Braids",
      description: "Bohemian-style large braids with curly ends for a natural, textured boho look",
      price: "$175",
      icon: Sparkles,
      image: "/Large boho braid 175.jpg"
    },
    {
      id: 5,
      name: "Medium French Curls",
      description: "Medium-sized braids with beautiful French curl ends for an elegant, voluminous style",
      price: "$185",
      icon: Palette,
      image: "/Medium French curl 185.jpg"
    },
    {
      id: 6,
      name: "Small Waist Length Knotless",
      description: "Ultra-long small knotless braids that reach waist length for a dramatic, stunning look",
      price: "$210",
      icon: Star,
      image: "/Small waist length knotless 210.jpg"
    },
    {
      id: 7,
      name: "Small Knotless",
      description: "Delicate small knotless braids that offer versatility and a refined protective style",
      price: "$180",
      icon: Crown,
      image: "/Small Knotless 180.jpg"
    },
    {
      id: 8,
      name: "Bob Braids",
      description: "Chic shoulder-length braids perfect for a modern, professional look with easy maintenance",
      price: "$110",
      icon: Heart,
      image: "/Bob braids.webp"
    },
    {
      id: 9,
      name: "Men's Twist",
      description: "Stylish protective twists designed specifically for men, offering a clean and masculine look",
      price: "$95",
      icon: Scissors,
      image: "/Men twist 95.jpg"
    },
    {
      id: 10,
      name: "Diva Braids",
      description: "Glamorous statement braids that make you feel like a true diva with bold, eye-catching style",
      price: "$175",
      icon: Sparkles,
      image: "/Diva braid 175.jpg"
    },
    {
      id: 11,
      name: "Stitches Braid",
      description: "Intricate stitched braiding pattern that creates a unique textured look with artistic flair",
      price: "$140",
      icon: Zap,
      image: "/Stitches braid 140.jpg"
    },
    {
      id: 12,
      name: "Short Butterfly Locs",
      description: "Trendy short butterfly locs with a natural, carefree texture perfect for a chic, effortless style",
      price: "$120",
      icon: Waves,
      image: "/Short butter fly locs 120.jpg"
    },
    {
      id: 13,
      name: "Boho Switches Braid (Short)",
      description: "Short bohemian-inspired switch braids with loose, flowing texture for a free-spirited look",
      price: "$165",
      icon: Sparkles,
      image: "/Boho switches braid.jpg"
    },
    {
      id: 14,
      name: "Boho Switches Braid (Long)",
      description: "Long bohemian-inspired switch braids with loose, flowing texture for a dramatic free-spirited look",
      price: "$185",
      icon: Sparkles,
      image: "/Boho switches braid.jpg"
    },
    {
      id: 15,
      name: "Medium Butt Knotless Braid",
      description: "Medium-sized knotless braids extending to hip length for a dramatic, stunning appearance",
      price: "$190",
      icon: Crown,
      image: "/Medium butt Knotless braid 190.jpg"
    },
    {
      id: 16,
      name: "Twist",
      description: "Classic protective twists that offer versatility and low maintenance while keeping hair healthy",
      price: "$145",
      icon: Waves,
      image: "/Twist 145.jpg"
    },
    {
      id: 17,
      name: "Butterfly Locs",
      description: "Beautiful butterfly locs with natural texture and movement for a trendy, bohemian-inspired look",
      price: "$170",
      icon: Wind,
      image: "/Butterfly locs 170.jpg"
    },
    {
      id: 18,
      name: "Short Boho Braid",
      description: "Short bohemian braids with textured ends for a carefree, stylish appearance",
      price: "$145",
      icon: Feather,
      image: "/Short boho braid 145.jpg"
    },
    {
      id: 19,
      name: "French Curl",
      description: "Elegant French curl braids with bouncy, voluminous curls for a sophisticated look",
      price: "$175",
      icon: Sparkles,
      image: "/French curl 175.jpg"
    },
    {
      id: 20,
      name: "Waist Length Medium Boho Braids",
      description: "Medium-sized boho braids extending to waist length with beautiful textured ends",
      price: "$185",
      icon: Star,
      image: "/Waist length medium boho braids 185.jpg"
    },
    {
      id: 21,
      name: "Medium Mid Back Boho Braid",
      description: "Medium boho braids reaching mid-back length with natural texture and bohemian flair",
      price: "$165",
      icon: Crown,
      image: "/Medium mid back boho braid 165.jpg"
    },
    {
      id: 22,
      name: "Faux Locs",
      description: "Authentic-looking faux locs that give you the dreadlock aesthetic without the commitment",
      price: "$150",
      icon: Waves,
      image: "/Faux locs 150.jpg"
    },
    {
      id: 23,
      name: "Butt Length Locs",
      description: "Ultra-long locs extending to butt length for a dramatic, statement-making protective style",
      price: "$185",
      icon: Star,
      image: "/length locs.jpg"
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">Braiding Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional braiding services, each designed to protect your natural hair 
            while keeping you looking absolutely stunning. All services include a consultation and hair care tips.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="h-6 w-6 text-salon-pink" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center text-salon-pink font-bold">
                      <DollarSign className="h-5 w-5 mr-1" />
                      <span className="text-xl">{service.price.replace('$', '')}</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/book"
                    state={{ selectedService: `${service.name} - ${service.price}` }}
                    className="w-full bg-gradient-to-r from-salon-pink to-pink-400 text-white py-3 px-4 rounded-full font-semibold text-center block hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-salon-pink/20 to-pink-200/30 rounded-2xl p-8 md:p-12 text-center animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready for Your New Protective Style?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and let us create the perfect braided look for you. 
            All services include a complimentary consultation and aftercare instructions to keep your braids looking fresh.
          </p>
          <Link
            to="/book"
            className="inline-block bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Appointment Now
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">What's Included</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-salon-pink" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Free Consultation</h4>
              <p className="text-gray-600">Personalized consultation to choose the perfect style for your face shape and lifestyle</p>
            </div>
            <div className="text-center">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Crown className="h-8 w-8 text-salon-pink" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Hair</h4>
              <p className="text-gray-600">Premium synthetic and human hair extensions for long-lasting, beautiful results</p>
            </div>
            <div className="text-center">
              <div className="bg-salon-pink/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Scissors className="h-8 w-8 text-salon-pink" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Aftercare Tips</h4>
              <p className="text-gray-600">Complete care instructions to maintain your braids and keep them looking fresh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;