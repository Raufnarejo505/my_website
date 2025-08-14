// src/components/sections/ProfitSection/ProfitSection.jsx
import React from 'react';
import styles from './ProfitSection.module.css';

// Import images
import James from '../../assets/images/james_card.png';
import Rylan from '../../assets/images/rylan_card.png';
import Nick from '../../assets/images/nick_card.png';
import Matt from '../../assets/images/matt_card.png';

const cardData = [
  {
    id: 1,
    name: 'James T.',
    state: 'New Jersey',
    testimonial: 'I used to work at a miserable construction job STRUGGLING paycheck to paycheck...',
    profit: '+$311k',
    duration: 'in 1 year',
    img: James,
  },
  {
    id: 2,
    name: 'Rylan B.',
    state: 'California',
    testimonial: 'I TRIPLED my bankroll in a month as a 20 year old college kid thanks to Positive EV...',
    profit: '+$2.7k',
    duration: 'in 1 month',
    img: Rylan,
  },
  {
    id: 3,
    name: 'Nick M.',
    state: 'Massachusetts',
    testimonial: 'Data-driven sportsbetting has completely changed how I look at time and money...',
    profit: '+$97k',
    duration: 'in 2024',
    img: Nick,
  },
  {
    id: 4,
    name: 'Matt C.',
    state: 'New York',
    testimonial: 'I went from losing thousands a month to making $30k, all from Arbitrage...',
    profit: '+$30.3k',
    duration: 'in 1 month',
    img: Matt,
  },
];

const ProfitSection = () => {
  return (
    <section className={styles.profitSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.mainHeading}>
          With <span className={styles.highlight}>Surebets</span>, profit is the expectation
        </h2>
        <p className={styles.subHeading}>
          Real stories and profits — verified by <span className={styles.pikkitHighlight}>Pikkit</span>, the trusted third party bet tracker.
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {cardData.concat(cardData).map((card, index) => (
            <div className={styles.card} key={`${card.id}-${index}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.cardName}>{card.name}</h4>
                  <p className={styles.cardState}>{card.state}</p>
                </div>
                <div className={styles.cardProfit}>
                  {card.profit}
                  <span className={styles.cardDuration}> {card.duration}</span>
                </div>
              </div>
              <p className={styles.cardTestimonial}>{card.testimonial}</p>
              <img src={card.img} alt={`${card.name}'s stats`} className={styles.cardImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;
