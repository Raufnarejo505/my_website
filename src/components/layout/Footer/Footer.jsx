// src/components/layout/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

// Import icons for social media
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo/Brand Section */}
        <div className={styles.footerBrand}>
          {/* Using text for logo, replace with image if available */}
          <a href="/" className={styles.logo}>
            Surebet<span className={styles.logoHighlight}>ters</span> {/* Updated to Surebetes */}
          </a>
          <p className={styles.brandSlogan}>
            Smarter Betting, Guaranteed Profits.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord"><FaDiscord /></a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#live-chat">Live Chat</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#cookie-policy">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact/Newsletter (Optional, but good for engagement) */}
        <div className={styles.footerContact}>
          <h4 className={styles.columnTitle}>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest tips and offers.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Surebetters. All rights reserved.</p> {/* Updated to Surebetes */}
        <p>Built with ❤️ by Surebetters</p> {/* Updated to Surebetes */}
      </div>
    </footer>
  );
};

export default Footer;