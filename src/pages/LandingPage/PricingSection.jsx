// src/components/sections/PricingSection/PricingSection.jsx
import React from 'react';
import styles from './PricingSection.module.css';
import Button from '../../components/common/Button/Button.jsx'; // Assuming you have a reusable Button component

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$99',
      frequency: '/month',
      features: [
        '50 bookmakers',
        '1.0s refresh rate',
        'Basic filters',
        'No API access',
        'No alerts',
      ],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      frequency: '/month', // Note: This price implies it's lower than Basic, which might be a typo, or a promotional offer. Adjust price if needed.
      features: [
        '50+ bookmakers',
        '0.5s refresh rate',
        'Advanced filters',
        'API access',
        'Email alerts',
      ],
      buttonText: 'Get Professional',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      frequency: '/month',
      features: [
        'All bookmakers',
        '0.3s refresh rate',
        'Premium filters',
        'Full API access',
        'SMS & App alerts',
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.mainHeading}>Simple, Transparent Pricing</h2>
      <div className={styles.pricingCardsContainer}>
        {pricingTiers.map((tier, index) => (
          <div
            key={tier.name}
            className={`${styles.priceCard} ${tier.isPopular ? styles.popularCard : ''}`}
          >
            {tier.isPopular && <span className={styles.popularBadge}>POPULAR</span>}
            <h3 className={styles.tierName}>{tier.name}</h3>
            <p className={styles.price}>
              {tier.price}
              <span className={styles.frequency}>{tier.frequency}</span>
            </p>
            <ul className={styles.featuresList}>
              {tier.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={tier.isPopular ? 'secondary' : 'secondary'}
              size="large"
              className={styles.tierButton}
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;