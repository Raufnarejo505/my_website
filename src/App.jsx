// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignUpPage/SignupPage';
import LiveSupportPage from './pages/LiveSupportPage/LiveSupportPage';
import HeroSection from "./pages/LandingPage/HeroSection";
import ArbitrageCalculator from "./pages/LandingPage/ArbitrageCalculator";

// Global styles
import './assets/styles/variables.css';
import './assets/styles/global.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Added */}
          <Route path="/support" element={<LiveSupportPage />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/calculator" element={<ArbitrageCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
