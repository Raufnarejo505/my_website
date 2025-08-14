// src/components/sections/AboutUsSection/AboutUsSection.jsx
import React from "react";
import styles from "./AboutUsSection.module.css";
import Button from "../../components/common/Button/Button.jsx";

const AboutUsSection = () => {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.mainHeading}>About Us</h2>
      <p className={styles.subHeading}>
        Smarter Betting with Real-Time Data & AI-Powered Insights
      </p>

      <div className={styles.cardsGridContainer}>
        <div className={styles.contentCard}>
          <div className={styles.iconHeader}>📡</div>
          <h3 className={styles.blockTitle}>What We Do</h3>
          <p className={styles.blockDescription}>
            Our software monitors millions of bookmaker odds 24/7 to detect
            <strong> surebet opportunities</strong>—guaranteeing profit through
            smart, calculated plays.
          </p>
          <ul className={styles.checkmarksList}>
            <li>✅ Exact odds & stake amount</li>
            <li>✅ Bookmakers to use</li>
            <li>✅ Instant alerts when odds shift</li>
            <li>✅ Risk-free profit estimates</li>
          </ul>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.iconHeader}>⚡</div>
          <h3 className={styles.blockTitle}>Key Features</h3>
          <ul className={styles.featuresList}>
            <li>🔍 Surebet Detection Engine</li>
            <li>📱 Instant Notifications</li>
            <li>📈 Profit Calculator</li>
            <li>📊 Bankroll Tracker</li>
            <li>💬 Expert Guides & Tips</li>
          </ul>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.iconHeader}>🎯</div>
          <h3 className={styles.blockTitle}>Who It’s For</h3>
          <ul className={styles.bulletList}>
            <li>● Beginners looking for low-risk strategies</li>
            <li>● Pros scaling up with automation</li>
            <li>● Data-driven bettors over gut feeling</li>
          </ul>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.iconHeader}>🧠</div>
          <h3 className={styles.blockTitle}>Why It Works</h3>
          <p className={styles.blockDescription}>
            Bookmakers make mistakes—we catch them before they vanish. This is
            not gambling; it’s exploiting market inefficiencies with math.
          </p>
          <p className={`${styles.blockDescription} ${styles.italicText}`}>
            Our algorithm does the hard work. You just place the bet.
          </p>
        </div>
      </div>

      <div className={styles.callToAction}>
        <p className={styles.ctaText}>Ready to start winning smarter?</p>
        <div className={styles.ctaButtons}>
          <Button variant="secondary" size="large">
            🚀 Start Free Trial
          </Button>
          <Button variant="secondary" size="large">
            🎥 Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
