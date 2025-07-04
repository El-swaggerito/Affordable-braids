import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, X, ZoomIn } from 'lucide-react';

const Services = () => {
  const [previewImage, setPreviewImage] = useState<{ src: string; name: string } | null>(null);

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
      image: "/Small Knotless.jpg"
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
      name: "CONROW STITCHES BRAIDS (Short)",
      description: "Intricate stitched braiding pattern that creates a unique textured look with artistic flair and precision.",
      price: "$60",
      duration: "4 hr",
      image: "/Fulani.jpg"
    },
        {
      id: 12,
      name: "CONROW STITCHES BRAIDS (Medium)",
      description: "Intricate stitched braiding pattern that creates a unique textured look with artistic flair and precision.",
      price: "$75",
      duration: "4 hr",
      image: "/Fulani.jpg"
    },
        {
      id: 13,
      name: "CONROW STITCHES BRAIDS (Long)",
      description: "Intricate stitched braiding pattern that creates a unique textured look with artistic flair and precision.",
      price: "$85",
      duration: "4 hr",
      image: "/Fulani.jpg"
    },
    
    {
      id: 14,
      name: "SHORT BUTTERFLY LOCS",
      description: "Trendy short butterfly locs with a natural, carefree texture perfect for a chic, effortless style.",
      price: "$120",
      duration: "3 hr. 30 mins",
      image: "/Short butter fly locs 120.jpg"
    },
    {
      id: 15,
      name: "BOHO STITCHES BRAID (Short)",
      description: "Short bohemian-inspired stitch braids with loose, flowing texture for a free-spirited look.",
      price: "$165",
      duration: "4 hr. 45 mins",
      image: "/Short Boho Stitches Braid.png"
    },
    {
      id: 16,
      name: "BOHO STITCHES BRAID (Long)",
      description: "Long bohemian-inspired stitch braids with loose, flowing texture for a dramatic free-spirited look.",
      price: "$185",
      duration: "6 hr. 15 mins",
      image: "/Boho switches braid.jpg"
    },
    {
      id: 17,
      name: "MEDIUM BUTT KNOTLESS BRAID",
      description: "Medium-sized knotless braids extending to hip length for a dramatic, stunning appearance.",
      price: "$190",
      duration: "7 hr",
      image: "/Medium butt Knotless braid 190.jpg"
    },
    {
      id: 18,
      name: "TWIST",
      description: "Classic protective twists that offer versatility and low maintenance while keeping hair healthy.",
      price: "$145",
      duration: "3 hr. 45 mins",
      image: "/Twist 145.jpg"
    },
    {
      id: 19,
      name: "BUTTERFLY LOCS",
      description: "Beautiful butterfly locs with natural texture and movement for a trendy, bohemian-inspired look.",
      price: "$170",
      duration: "5 hr",
      image: "/Butterfly locs 170.jpg"
    },
    {
      id: 20,
      name: "SHORT BOHO BRAID",
      description: "Short bohemian braids with textured ends for a carefree, stylish appearance that's easy to maintain.",
      price: "$145",
      duration: "4 hr",
      image: "/Short boho braid 145.jpg"
    },
    {
      id: 21,
      name: "FRENCH CURL",
      description: "Elegant French curl braids with bouncy, voluminous curls for a sophisticated and glamorous look.",
      price: "$175",
      duration: "5 hr. 30 mins",
      image: "/French curl 175.jpg"
    },
    {
      id: 22,
      name: "WAIST LENGTH MEDIUM BOHO BRAIDS",
      description: "Medium-sized boho braids extending to waist length with beautiful textured ends.",
      price: "$185",
      duration: "6 hr. 30 mins",
      image: "/Waist length medium boho braids 185.jpg"
    },
    {
      id: 23,
      name: "MEDIUM MID BACK BOHO BRAID",
      description: "Medium boho braids reaching mid-back length with natural texture and bohemian flair.",
      price: "$165",
      duration: "5 hr. 45 mins",
      image: "/Medium mid back boho braid 165.jpg"
    },
    {
      id: 24,
      name: "FAUX LOCS",
      description: "Authentic-looking faux locs that give you the dreadlock aesthetic without the long-term commitment.",
      price: "$150",
      duration: "4 hr. 30 mins",
      image: "/Faux locs 150.jpg"
    },
    {
      id: 25,
      name: "BUTT LENGTH LOCS",
      description: "Ultra-long locs extending to butt length for a dramatic, statement-making protective style.",
      price: "$185",
      duration: "7 hr. 30 mins",
      image: "/length locs.jpg"
    },
        {
      id: 26,
      name: "FULANI BRAIDS",
      description: "Fulani braids are a traditional West African hairstyle featuring cornrows at the front and box braids at the back, often adorned with beads or cowrie shells.",
      price: "$140",
      duration: "4 hr",
      image: "/Fulani Braid.jpg"
    }
  ];

  const openPreview = (imageSrc: string, serviceName: string) => {
    setPreviewImage({ src: imageSrc, name: serviceName });
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePreview();
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">Braiding Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our comprehensive range of professional braiding services, each designed to protect your natural hair 
            while keeping you looking absolutely stunning.
          </p>
        </div>

        {/* Services Grid - Mobile First Responsive Design */}
        <div className="space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Mobile Layout (Stack Vertically) - With Preview Button */}
              <div className="block sm:hidden">
                {/* Large Image for Mobile with Preview Button */}
                <div className="w-full h-80 relative overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Preview Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openPreview(service.image, service.name)}
                      className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </button>
                  </div>

                  {/* Always visible preview button in corner */}
                  <button
                    onClick={() => openPreview(service.image, service.name)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 sm:hidden"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide leading-tight">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Duration and Price Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-salon-pink">
                      {service.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {/* Preview Button for Mobile */}
                    <button
                      onClick={() => openPreview(service.image, service.name)}
                      className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 text-center flex items-center justify-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Preview Hairstyle</span>
                    </button>

                    {/* Select Button */}
                    <Link
                      to="/book"
                      state={{ selectedService: `${service.name} - ${service.price}` }}
                      className="w-full bg-gradient-to-r from-salon-pink to-pink-400 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center block text-lg"
                    >
                      Select Service
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tablet Layout (Side by Side) - Enhanced */}
              <div className="hidden sm:block lg:hidden">
                <div className="flex">
                  {/* Larger Image for Tablet */}
                  <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Preview Button for Tablet */}
                    <button
                      onClick={() => openPreview(service.image, service.name)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>

                      {/* Price */}
                      <div className="text-2xl font-bold text-salon-pink mb-4">
                        {service.price}
                      </div>
                    </div>

                    {/* Select Button */}
                    <Link
                      to="/book"
                      state={{ selectedService: `${service.name} - ${service.price}` }}
                      className="bg-gradient-to-r from-salon-pink to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center inline-block"
                    >
                      Select Service
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Layout (Original) - Enhanced */}
              <div className="hidden lg:block">
                <div className="flex">
                  {/* Image */}
                  <div className="w-40 h-40 flex-shrink-0 relative overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Preview Button for Desktop */}
                    <button
                      onClick={() => openPreview(service.image, service.name)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex justify-between items-center">
                    <div className="flex-1">
                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>

                      {/* Price */}
                      <div className="text-2xl font-bold text-salon-pink">
                        {service.price}
                      </div>
                    </div>

                    {/* Select Button */}
                    <div className="ml-6">
                      <Link
                        to="/book"
                        state={{ selectedService: `${service.name} - ${service.price}` }}
                        className="bg-gradient-to-r from-salon-pink to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Select Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-salon-pink/20 to-pink-200/30 rounded-2xl p-6 sm:p-8 lg:p-12 text-center animate-slide-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Ready for Your New Protective Style?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Book your appointment today and let us create the perfect braided look for you. 
            All services include a complimentary consultation and aftercare instructions.
          </p>
          <Link
            to="/book"
            className="inline-block bg-gradient-to-r from-salon-pink to-pink-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </div>

      {/* Full-Screen Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleModalClick}
        >
          {/* Close Button */}
          <button
            onClick={closePreview}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={previewImage.src}
              alt={previewImage.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            />
            
            {/* Image Title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-center">
                {previewImage.name}
              </h3>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>Tap outside the image or press the X to close</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;