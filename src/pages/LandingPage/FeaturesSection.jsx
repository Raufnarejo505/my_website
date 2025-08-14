// src/pages/LandingPage/FeaturesSection.jsx
import React from 'react';
import styles from './FeaturesSection.module.css'; // New CSS module for FeaturesSection
import { FaCheckCircle } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureItem}>
        <FaCheckCircle className={styles.featureIcon} />
        <span>7 Day Free Trial</span>
      </div>
      <div className={styles.featureItem}>
        <FaCheckCircle className={styles.featureIcon} />
        <span>Free 1:1 Coaching</span>
      </div>
      <div className={styles.featureItem}>
        <FaCheckCircle className={styles.featureIcon} />
        <span>150+ Sportsbooks</span>
      </div>
      <div className={styles.featureItem}>
        <FaCheckCircle className={styles.featureIcon} />
        <span>Industry's Fastest Data</span>
      </div>
    </section>
  );
};

export default FeaturesSection;