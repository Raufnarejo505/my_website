// src/components/sections/HowItWorksSection/HowItWorksSection.jsx
import React from 'react';
import styles from './HowItWorks.module.css';

// Import the specific visual assets based on the new UI image
import blueOval from '../../assets/images/img1.png';   // Blue oval for "Find Sportsbooks' Mistakes"
import greenFootball from '../../assets/images/img1.png'; // Green football for "Highlight Profitable Bets"
import yellowOval from '../../assets/images/img1.png'; // Yellow oval for "You Take The Bets"

// Import icons for the support section (assuming react-icons are installed)
import { FaPhoneAlt, FaComments, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.mainHeading}>
        How profitable betting <span className={styles.highlight}>actually&nbsp;works</span>
      </h2>

      <div className={styles.stepsContainer}>
        {/* Step 1: Find Sportsbooks' Mistakes */}
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <p className={styles.stepSubtitle}>FIND SPORTSBOOKS' MISTAKES</p>
            <h3 className={styles.stepTitle}>We analyze millions of odds to find "mispriced" bets</h3>
            <p className={styles.stepDescription}>
              Whenever the market agrees a bet should have, say, +100 odds ($100 payout), but one sportsbook mistakenly offers +150 odds ($150 payout), we find it.
            </p>
          </div>
          <div className={styles.stepVisual}>
            <img src={blueOval} alt="Blue glowing oval" className={styles.visualImage} />
          </div>
        </div>

        {/* Step 2: Highlight Profitable Bets */}
        <div className={`${styles.step} ${styles.reverseOrder}`}> {/* Added reverseOrder class for visual reversal */}
          <div className={styles.stepVisual}>
            <img src={greenFootball} alt="Green glowing football" className={styles.visualImage} />
          </div>
          <div className={styles.stepContent}>
            <p className={styles.stepSubtitle}>HIGHLIGHT PROFITABLE BETS</p>
            <h3 className={styles.stepTitle}>We show you these bets in our real-time tools.</h3>
            <p className={styles.stepDescription}>
              These "mistakes" can be used to secure risk-free profit (Arbitrage) or wins that outpace your losses overtime (+EV).
            </p>
          </div>
        </div>

        {/* Step 3: You Take The Bets */}
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <p className={styles.stepSubtitle}>YOU TAKE THE BETS</p>
            <h3 className={styles.stepTitle}>You place these bets quickly & consistently</h3>
            <p className={styles.stepDescription}>
              Sportsbooks hate these "mistakes", so you need to place them before they disappear. Bet everyday, and watch your profits grow.
            </p>
          </div>
          <div className={styles.stepVisual}>
            <img src={yellowOval} alt="Yellow glowing oval" className={styles.visualImage} />
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className={styles.supportSection}>
        <h3 className={styles.supportHeading}>
          It takes more than tools to win. You need real people.
        </h3>
        <p className={styles.supportDescription}>
          Profitable betting requires consistency — we'll be there every step of the way. Get tailored help based on your experience, budget, and time.
        </p>
        <div className={styles.supportOptions}>
          <div className={styles.supportItem}>
            <FaPhoneAlt className={styles.supportIcon} />
            <p className={styles.supportItemText}>Free 1:1 Coaching Calls</p>
          </div>
          <div className={styles.supportItem}>
            <FaComments className={styles.supportIcon} />
            <p className={styles.supportItemText}>24/7 Live Chat</p>
          </div>
          <div className={styles.supportItem}>
            <FaDiscord className={styles.supportIcon} />
            <p className={styles.supportItemText}>Discord Community</p>
          </div>
          <div className={styles.supportItem}>
            <FaYoutube className={styles.supportIcon} />
            <p className={styles.supportItemText}>YouTube Tutorials</p>
          </div>
          <div className={styles.supportItem}>
            <FaTwitter className={styles.supportIcon} /> {/* Using FaTwitter for X Threads */}
            <p className={styles.supportItemText}>X Threads</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;