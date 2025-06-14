import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Scissors, AlertCircle, DollarSign, Shield, RefreshCw, Upload, CreditCard } from 'lucide-react';
import emailjs from '@emailjs/browser';

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedService = location.state?.selectedService || '';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: selectedService,
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);
  const [depositScreenshot, setDepositScreenshot] = useState<File | null>(null);
  const [depositPreview, setDepositPreview] = useState<string | null>(null);

  const services = [
    'Large Knotless - $155',
    'Cornrows - $30',
    'Large Knotless (Premium) - $165',
    'Large Boho Braids - $175',
    'Medium French Curls - $185',
    'Small Waist Length Knotless - $210',
    'Small Knotless - $180',
    'Bob Braids - $110',
    'Men\'s Twist - $95',
    'Diva Braids - $175',
    'Stitches Braid - $140',
    'Short Butterfly Locs - $120',
    'Boho Switches Braid (Short) - $165',
    'Boho Switches Braid (Long) - $185',
    'Medium Butt Knotless Braid - $190',
    'Twist - $145',
    'Butterfly Locs - $170',
    'Short Boho Braid - $145',
    'French Curl - $175',
    'Waist Length Medium Boho Braids - $185',
    'Medium Mid Back Boho Braid - $165',
    'Faux Locs - $150',
    'Butt Length Locs - $185'
  ];

  // Updated time slots based on business hours
  const getTimeSlots = (selectedDate: string) => {
    if (!selectedDate) return [];
    
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    switch (dayOfWeek) {
      case 1: // Monday: 3PM-10PM
        return ['3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
      case 2: // Tuesday: 7PM-10PM
      case 3: // Wednesday: 7PM-10PM
        return ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
      case 4: // Thursday: 2PM-10PM
      case 5: // Friday: 2PM-10PM
        return ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
      case 6: // Saturday: 7AM-10PM
      case 0: // Sunday: 7AM-10PM
        return ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
      default:
        return [];
    }
  };

  const timeSlots = getTimeSlots(formData.date);

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset time when date changes
      ...(name === 'date' && { time: '' })
    });
  };

  // Function to upload image to imgbb hosting service
  const uploadImageToHost = async (file: File): Promise<string> => {
    try {
      // Using imgbb.com as a free image hosting service
      const formData = new FormData();
      formData.append('image', file);
      
      // Your actual imgbb API key
      const apiKey = 'c59e6d8a174a59afce29e4cdbbf0f0ce';
      
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      const data = await response.json();
      
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Fallback: convert to base64 but with heavy compression
      return await compressImageToBase64(file, 20); // Very small size for fallback
    }
  };

  // Fallback compression function
  const compressImageToBase64 = (file: File, maxSizeKB: number = 20): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions while maintaining aspect ratio
        let { width, height } = img;
        const maxDimension = 400; // Smaller for fallback
        
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress image
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Function to try different quality levels
        const tryCompress = (quality: number): void => {
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          const sizeInKB = (compressedDataUrl.length * 3) / 4 / 1024;
          
          if (sizeInKB <= maxSizeKB || quality <= 0.1) {
            resolve(compressedDataUrl);
          } else {
            tryCompress(quality - 0.1);
          }
        };
        
        tryCompress(0.6);
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (PNG, JPG, etc.)');
        return;
      }
      
      // Validate file size (max 10MB for initial upload)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      setDepositScreenshot(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setDepositPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started');
    
    if (!agreedToPolicies) {
      alert('Please agree to the scheduling policies before booking your appointment.');
      return;
    }

    if (!depositScreenshot) {
      alert('Please upload a screenshot of your $15 Interac e-Transfer deposit before booking.');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Uploading image to hosting service...');
      
      // Upload image and get URL
      const imageUrl = await uploadImageToHost(depositScreenshot);
      console.log('Image uploaded successfully, URL:', imageUrl);
      
      // Updated EmailJS configuration with proper error handling
      const emailjsConfig = {
        serviceId: 'service_97luys4',
        templateId: 'template_o2gk8oa', 
        publicKey: '4fDtVpq9MOCHBtLst'
      };
      
      // Initialize EmailJS with proper configuration
      try {
        emailjs.init({
          publicKey: emailjsConfig.publicKey,
          blockHeadless: true,
          limitRate: {
            id: 'app',
            throttle: 10000,
          },
        });
      } catch (initError) {
        console.error('EmailJS initialization error:', initError);
        throw new Error('Email service initialization failed');
      }
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        notes: formData.notes || 'No additional notes provided',
        deposit_screenshot_url: imageUrl,
        agreed_policies: 'Yes - Customer agreed to all scheduling policies',
        to_email: 'Adedejitiwalade8@gmail.com',
        // Additional fields for better email formatting
        appointment_summary: `New appointment request from ${formData.fullName} for ${formData.service} on ${formData.date} at ${formData.time}`,
        customer_details: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
        service_details: `Service: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`,
        deposit_status: 'Deposit screenshot uploaded and available via link'
      };

      console.log('Sending email with EmailJS...');
      
      // Send email using EmailJS with improved error handling and timeout
      const response = await Promise.race([
        emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          {
            publicKey: emailjsConfig.publicKey,
          }
        ),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout - please try again')), 30000)
        )
      ]) as any;

      console.log('EmailJS response:', response);

      if (response && (response.status === 200 || response.text === 'OK')) {
        console.log('Email sent successfully');
        navigate('/thank-you');
      } else {
        throw new Error(`EmailJS returned unexpected response: ${JSON.stringify(response)}`);
      }

    } catch (error) {
      console.error('Error in form submission:', error);
      
      // Provide more specific error messages and fallback options
      let errorMessage = 'There was an error submitting your appointment request.\n\n';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('Network')) {
          errorMessage += 'Network Error: Please check your internet connection and try again.\n\n';
        } else if (error.message.includes('timeout')) {
          errorMessage += 'Request Timeout: The request took too long. Please try again.\n\n';
        } else if (error.message.includes('401') || error.message.includes('403')) {
          errorMessage += 'Authentication Error: There was an issue with our email service configuration.\n\n';
        } else if (error.message.includes('initialization')) {
          errorMessage += 'Service Error: Email service could not be initialized properly.\n\n';
        } else {
          errorMessage += `Technical Error: ${error.message}\n\n`;
        }
      } else {
        errorMessage += 'Unknown Error: An unexpected error occurred.\n\n';
      }
      
      errorMessage += 'ALTERNATIVE BOOKING OPTIONS:\n';
      errorMessage += '• Call us directly: +1 (437) 983-6451\n';
      errorMessage += '• Email us: Adedejitiwalade8@gmail.com\n';
      errorMessage += '• Include your deposit screenshot and all appointment details\n\n';
      errorMessage += 'We apologize for the inconvenience and will respond within 24 hours.';
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Book Your <span className="bg-gradient-to-r from-salon-pink to-pink-500 bg-clip-text text-transparent">Braiding Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule your visit with us and let us create the perfect protective style for you. 
            We'll confirm your appointment within 24 hours.
          </p>
        </div>

        {/* Interac e-Transfer Payment Instructions */}
        <div className="mb-12 animate-slide-up">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Payment Instructions - $15 Deposit Required</h2>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                How to Send Your $15 Deposit via Interac e-Transfer
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Step 1: Send Interac e-Transfer</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Amount:</strong> $15.00 CAD</li>
                    <li>• <strong>Email:</strong> Adedejitiwalade8@gmail.com</li>
                    <li>• <strong>Message:</strong> Include your full name and preferred appointment date</li>
                    <li>• <strong>Security Question:</strong> Use any question you prefer</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Step 2: Upload Screenshot</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Take a screenshot of your successful e-Transfer</li>
                    <li>• Make sure the amount ($15) and email are visible</li>
                    <li>• Upload the screenshot in the form below</li>
                    <li>• This confirms your deposit and secures your appointment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> Your appointment request cannot be processed without the deposit screenshot. 
                  This $15 deposit is non-refundable and non-transferable, and will be deducted from your total service cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduling Policies Section */}
        <div className="mb-12 animate-slide-up">
          <div className="bg-gradient-to-r from-salon-pink/10 to-pink-100/50 rounded-2xl p-8 border border-salon-pink/20">
            <div className="flex items-center mb-6">
              <div className="bg-salon-pink/20 p-3 rounded-full mr-4">
                <AlertCircle className="h-6 w-6 text-salon-pink" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Scheduling Policies - Please Read Before Booking</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Deposit Policy */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-5 w-5 text-salon-pink mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Deposit Policy</h3>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• A <strong>$15 non-refundable and non-transferable</strong> deposit is required to secure your appointment</li>
                  <li>• This deposit goes toward your total balance</li>
                  <li>• No payments are accepted in advance beyond the deposit</li>
                  <li>• If I cancel your appointment, your deposit will be refunded within 3-5 business days</li>
                </ul>
                <div className="mt-4 p-3 bg-salon-pink/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Payment:</strong> Remaining balance due on appointment day. 
                    <br />Accepted: Cash or Interac e-Transfer only.
                  </p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Shield className="h-5 w-5 text-salon-pink mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Cancellation Policy</h3>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Please notify me at least <strong>24 hours in advance</strong> if you need to cancel</li>
                  <li>• Repeated last-minute cancellations may result in being blocked from future bookings</li>
                  <li>• As agreed during booking, your deposit will not be refunded if you cancel</li>
                  <li>• If I cancel, your deposit will be refunded within 3-5 business days, and you'll receive <strong>$20 off</strong> your next appointment</li>
                </ul>
              </div>

              {/* Rescheduling Policy */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-5 w-5 text-salon-pink mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Rescheduling Policy</h3>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• To reschedule and keep your deposit, please contact me at least <strong>24 hours in advance</strong></li>
                  <li>• Your deposit can only be transferred <strong>once</strong> to a new date</li>
                  <li>• If I reschedule, I will deduct an amount from your total balance as a courtesy</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl border border-salon-pink/30">
              <p className="text-center text-gray-700 font-medium">
                By booking with me, you agree to all the policies listed above. Thank you for your support and understanding!
              </p>
              <p className="text-center text-salon-pink font-semibold mt-2">- Affordable Braids</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-pink/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-salon-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-gray-600">+1 (437) 983-6451</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-pink/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-salon-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <p className="text-gray-600">Adedejitiwalade8@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Interac e-Transfer</p>
                    <p className="text-gray-600">Adedejitiwalade8@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-1">For $15 deposit payments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-pink/20 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-salon-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Business Hours</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday: 3PM-10PM</p>
                      <p>Tue-Wed: 7PM-10PM</p>
                      <p>Thu-Fri: 2PM-10PM</p>
                      <p>Sat-Sun: 7AM-10PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-salon-pink/10 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> We'll confirm your appointment within 24 hours. 
                  For same-day appointments, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
              <div className="flex items-center mb-8">
                <div className="bg-salon-pink/20 p-3 rounded-full mr-4">
                  <Scissors className="h-6 w-6 text-salon-pink" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Appointment Details</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                    placeholder="(437) 983-6451"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Scissors className="inline h-4 w-4 mr-1" />
                    Select Braiding Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                  >
                    <option value="">Choose a braiding service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200"
                      disabled={!formData.date}
                    >
                      <option value="">
                        {formData.date ? 'Select a time' : 'Select date first'}
                      </option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {formData.date && timeSlots.length === 0 && (
                      <p className="text-sm text-red-500 mt-1">
                        No available times for selected date. Please choose another date or call us.
                      </p>
                    )}
                  </div>
                </div>

                {/* Deposit Screenshot Upload */}
                <div>
                  <label htmlFor="depositScreenshot" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Upload className="inline h-4 w-4 mr-1" />
                    Upload Deposit Screenshot *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-salon-pink transition-colors duration-200">
                    <input
                      type="file"
                      id="depositScreenshot"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      required
                    />
                    <label htmlFor="depositScreenshot" className="cursor-pointer">
                      {depositPreview ? (
                        <div className="space-y-4">
                          <img
                            src={depositPreview}
                            alt="Deposit screenshot preview"
                            className="max-w-full max-h-48 mx-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-green-600 font-medium">
                            ✓ Screenshot uploaded successfully
                          </p>
                          <p className="text-xs text-gray-500">
                            Click to change screenshot
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                            <Upload className="h-8 w-8 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-gray-600 font-medium">
                              Upload your $15 Interac e-Transfer screenshot
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              PNG, JPG, or other image formats (max 10MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Make sure the screenshot shows the $15 amount and recipient email (Adedejitiwalade8@gmail.com). 
                    Your image will be securely uploaded and a link will be sent in the email.
                  </p>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-salon-pink focus:border-salon-pink transition-colors duration-200 resize-none"
                    placeholder="Hair length, preferred colors, any allergies, or special requests? Let us know!"
                  />
                </div>

                {/* Policy Agreement Checkbox */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToPolicies}
                      onChange={(e) => setAgreedToPolicies(e.target.checked)}
                      className="mt-1 h-4 w-4 text-salon-pink focus:ring-salon-pink border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I have read and agree to the <strong>scheduling policies</strong> above, including the deposit, cancellation, and rescheduling terms. I understand that a $15 non-refundable deposit via Interac e-Transfer is required to secure my appointment.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !agreedToPolicies || !depositScreenshot}
                  className="w-full bg-gradient-to-r from-salon-pink to-pink-400 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Uploading & Booking Your Appointment...
                    </span>
                  ) : (
                    'Book My Braiding Appointment'
                  )}
                </button>

                {(!agreedToPolicies || !depositScreenshot) && (
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      {!depositScreenshot && !agreedToPolicies 
                        ? 'Please upload your deposit screenshot and agree to the policies to continue'
                        : !depositScreenshot 
                        ? 'Please upload your deposit screenshot to continue'
                        : 'Please agree to the scheduling policies to continue'
                      }
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;