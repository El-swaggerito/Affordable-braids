import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "LARGE KNOTLESS",
      description: "Gentle knotless braiding technique without knots at the root for reduced tension and a natural look.",
      price: "$155",
      duration: "4 hr. 30 mins",
      image: "/Large knotless 155.jpg"
    },
    {
      id: 2,
      name: "CORNROWS",
      description: "Traditional braided style close to the scalp in straight lines or intricate patterns.",
      price: "$30",
      duration: "1 hr. 15 mins",
      image: "/Conrow 30.jpg"
    },
    {
      id: 3,
      name: "LARGE KNOTLESS (Premium)",
      description: "Premium large knotless braids with superior technique and longer-lasting results using high-quality hair extensions.",
      price: "$165",
      duration: "5 hr",
      image: "/Large knotless 165.jpg"
    },
    {
      id: 4,
      name: "LARGE BOHO BRAIDS",
      description: "Bohemian-style large braids with curly ends for a natural, textured boho look that's trendy and effortless.",
      price: "$175",
      duration: "5 hr. 30 mins",
      image: "/Large boho braid 175.jpg"
    },
    {
      id: 5,
      name: "MEDIUM FRENCH CURLS",
      description: "Medium-sized braids with beautiful French curl ends for an elegant, voluminous style that turns heads.",
      price: "$185",
      duration: "6 hr",
      image: "/Medium French curl 185.jpg"
    },
    {
      id: 6,
      name: "SMALL WAIST LENGTH KNOTLESS",
      description: "Ultra-long small knotless braids that reach waist length for a dramatic, stunning look that makes a statement.",
      price: "$210",
      duration: "8 hr",
      image: "/Small waist length knotless 210.jpg"
    },
    {
      id: 7,
      name: "SMALL KNOTLESS",
      description: "Delicate small knotless braids that offer versatility and a refined protective style for any occasion.",
      price: "$180",
      duration: "6 hr. 30 mins",
      image: "/Small Knotless 180.jpg"
    },
    {
      id: 8,
      name: "BOB BRAIDS",
      description: "Chic shoulder-length braids perfect for a modern, professional look with easy maintenance and style.",
      price: "$110",
      duration: "3 hr",
      image: "/Bob braids.webp"
    },
    {
      id: 9,
      name: "MEN'S TWIST",
      description: "Stylish protective twists designed specifically for men, offering a clean and masculine look.",
      price: "$95",
      duration: "2 hr. 30 mins",
      image: "/Men twist 95.jpg"
    },
    {
      id: 10,
      name: "DIVA BRAIDS",
      description: "Glamorous statement braids that make you feel like a true diva with bold, eye-catching style.",
      price: "$175",
      duration: "5 hr. 15 mins",
      image: "/Diva braid 175.jpg"
    },
    {
      id: 11,
      name: "STITCH BRAIDS (4 Stitch Braid)",
      description: "Intricate stitched braiding pattern that creates a unique textured look with artistic flair and precision.",
      price: "$140",
      duration: "4 hr",
      image: "/Stitches braid 140.jpg"
    },
    {
      id: 12,
      name: "SHORT BUTTERFLY LOCS",
      description: "Trendy short butterfly locs with a natural, carefree texture perfect for a chic, effortless style.",
      price: "$120",
      duration: "3 hr. 30 mins",
      image: "/Short butter fly locs 120.jpg"
    },
    {
      id: 13,
      name: "BOHO SWITCHES BRAID (Short)",
      description: "Short bohemian-inspired switch braids with loose, flowing texture for a free-spirited look.",
      price: "$165",
      duration: "4 hr. 45 mins",
      image: "/Boho switches braid.jpg"
    },
    {
      id: 14,
      name: "BOHO SWITCHES BRAID (Long)",
      description: "Long bohemian-inspired switch braids with loose, flowing texture for a dramatic free-spirited look.",
      price: "$185",
      duration: "6 hr. 15 mins",
      image: "/Boho switches braid.jpg"
    },
    {
      id: 15,
      name: "MEDIUM BUTT KNOTLESS BRAID",
      description: "Medium-sized knotless braids extending to hip length for a dramatic, stunning appearance.",
      price: "$190",
      duration: "7 hr",
      image: "/Medium butt Knotless braid 190.jpg"
    },
    {
      id: 16,
      name: "TWIST",
      description: "Classic protective twists that offer versatility and low maintenance while keeping hair healthy.",
      price: "$145",
      duration: "3 hr. 45 mins",
      image: "/Twist 145.jpg"
    },
    {
      id: 17,
      name: "BUTTERFLY LOCS",
      description: "Beautiful butterfly locs with natural texture and movement for a trendy, bohemian-inspired look.",
      price: "$170",
      duration: "5 hr",
      image: "/Butterfly locs 170.jpg"
    },
    {
      id: 18,
      name: "SHORT BOHO BRAID",
      description: "Short bohemian braids with textured ends for a carefree, stylish appearance that's easy to maintain.",
      price: "$145",
      duration: "4 hr",
      image: "/Short boho braid 145.jpg"
    },
    {
      id: 19,
      name: "FRENCH CURL",
      description: "Elegant French curl braids with bouncy, voluminous curls for a sophisticated and glamorous look.",
      price: "$175",
      duration: "5 hr. 30 mins",
      image: "/French curl 175.jpg"
    },
    {
      id: 20,
      name: "WAIST LENGTH MEDIUM BOHO BRAIDS",
      description: "Medium-sized boho braids extending to waist length with beautiful textured ends.",
      price: "$185",
      duration: "6 hr. 30 mins",
      image: "/Waist length medium boho braids 185.jpg"
    },
    {
      id: 21,
      name: "MEDIUM MID BACK BOHO BRAID",
      description: "Medium boho braids reaching mid-back length with natural texture and bohemian flair.",
      price: "$165",
      duration: "5 hr. 45 mins",
      image: "/Medium mid back boho braid 165.jpg"
    },
    {
      id: 22,
      name: "FAUX LOCS",
      description: "Authentic-looking faux locs that give you the dreadlock aesthetic without the long-term commitment.",
      price: "$150",
      duration: "4 hr. 30 mins",
      image: "/Faux locs 150.jpg"
    },
    {
      id: 23,
      name: "BUTT LENGTH LOCS",
      description: "Ultra-long locs extending to butt length for a dramatic, statement-making protective style.",
      price: "$185",
      duration: "7 hr. 30 mins",
      image: "/length locs.jpg"
    }
  ];

  return (
    <div className="py-20 animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">Braiding Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional braiding services, each designed to protect your natural hair 
            while keeping you looking absolutely stunning.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex">
                {/* Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex justify-between items-center">
                  <div className="flex-1">
                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide">
                      {service.name}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{service.duration}</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold text-salon-pink mb-2">
                      {service.price}
                    </div>
                  </div>

                  {/* Select Button */}
                  <div className="ml-6">
                    <Link
                      to="/book"
                      state={{ selectedService: `${service.name} - ${service.price}` }}
                      className="bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-salon-pink/20 to-pink-200/30 rounded-2xl p-8 md:p-12 text-center animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready for Your New Protective Style?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and let us create the perfect braided look for you. 
            All services include a complimentary consultation and aftercare instructions.
          </p>
          <Link
            to="/book"
            className="inline-block bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;