// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
