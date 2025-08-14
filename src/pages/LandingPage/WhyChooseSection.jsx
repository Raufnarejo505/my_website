// src/components/sections/WhyChooseSection/WhyChooseSection.jsx
import React from 'react';
import styles from './WhyChooseSection.module.css';

// Assuming you might want icons for these features.
// If react-icons is installed:
import { FaBolt, FaShieldAlt, FaChartBar } from 'react-icons/fa';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: 'Lightning Fast Updates',
      description: 'Our system scans odds from 50+ bookmakers every 0.5 seconds to ensure you never miss an opportunity.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk-Free Profits',
      description: 'With arbitrage betting, you\'re guaranteed profit regardless of the outcome of the sporting event.',
    },
    {
      icon: <FaChartBar />,
      title: 'Advanced Analytics',
      description: 'Detailed statistics and historical data to help you make informed betting decisions.',
    },
  ];

  return (
    <section className={styles.whyChooseSection}>
      <h2 className={styles.mainHeading}>
        Why Choose <span className={styles.highlight}>SureBet Scanner?</span>
      </h2>
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;