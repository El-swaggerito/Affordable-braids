import React from 'react';
import { Analytics } from "@vercel/analytics/next"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white">
        <Header />
        <main className="animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;