// src/pages/LiveSupportPage/LiveSupportPage.jsx
import React from "react";
import "./LiveSupportPage.css";

export default function LiveSupportPage() {
  return (
    <div className="live-support-container">
      <h1 className="live-support-title">Support Center</h1>
      <p className="live-support-subtitle">
        Choose how you’d like to get help
      </p>

      <div className="support-options">
        {/* AI Support Card */}
        <div className="support-card">
          <h2>🤖 AI Assistance</h2>
          <p>
            Get instant answers to common questions with our AI-powered support
            system.
          </p>
          <button className="support-button">
            Start AI Chat
          </button>
        </div>

        {/* Human Support Card */}
        <div className="support-card">
          <h2>👨‍💼 Human Support</h2>
          <p>
            Prefer talking to a person? Connect with our live support team for
            personalized help.
          </p>
          <button className="support-button">
            Contact Human Agent
          </button>
        </div>
      </div>
    </div>
  );
  
}

