// src/components/sections/FAQSection/FAQSection.jsx
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

// Import icons for support options and dropdown arrows
import { FaPhoneAlt, FaComments, FaDiscord, FaTwitter, FaChevronDown } from 'react-icons/fa'; // Using FaTwitter for X Threads

const FAQSection = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null); // State to manage which FAQ item is open

  const faqItems = [
    {
      question: '❓ What exactly does your platform do?',
      answer: `Our platform scans odds from major UK bookmakers in real time to detect surebets — betting opportunities where you can guarantee a profit by covering all possible outcomes across different bookmakers. You receive an instant alert with exact instructions: what to bet, where, and how much.`,
    },
    {
      question: '⚖️ Is arbitrage betting legal in the UK?',
      answer: `Yes, arbitrage betting is legal in the United Kingdom. You’re simply using public odds offered by licensed bookmakers to your advantage. There are no laws preventing you from placing bets that result in guaranteed profit. It is completely legal and ethical.`,
    },
    {
      question: '📲 How will I receive the surebet alerts?',
      answer: `Via Telegram, with instant push notifications. Each alert includes:
      \n● The event and teams (e.g., Man City vs Man United)
      \n● Bookmakers involved
      \n● Odds for each outcome
      \n● Exact profit percentage
      \n● Suggested stake split for optimal return`,
    },
    {
      question: '🤔 Do I need multiple bookmaker accounts?',
      answer: `Yes. Arbitrage betting works by comparing odds across different bookmakers, so you will need verified accounts with at least 2 or more UK bookmakers. We’ll also show you welcome bonuses and promotions to get started with.`,
    },
    {
      question: '🏆 Can I actually make money with this?',
      answer: `Yes. Our users typically find 1–5% profit per bet. With consistent betting and proper bankroll management, this can add up to steady monthly returns. We also offer bankroll tracking tools to help you measure and optimize your performance.`,
    },
    {
      question: '⏱️ How fast do I need to act?',
      answer: `Surebet opportunities don’t last long — usually a few minutes. That’s why we deliver alerts in real time, directly to your phone, so you can act before the odds change.`,
    },
    {
      question: '🧠 Do I need to be a betting expert?',
      answer: `Not at all. If you know how to place a basic bet online, you’re already good to go. We provide:
      \n● Step-by-step instructions
      \n● Educational content
      \n● A simple interface for beginners`,
    },
    {
      question: '💳 Do you take a cut of my profit?',
      answer: `Never. You keep 100% of your winnings. Our business model is based on transparent subscription fees — no hidden charges, no commissions.`,
    },
    {
      question: '📉 What happens if one of my accounts gets limited?',
      answer: `This can happen, especially if you withdraw frequently or bet large amounts. We offer tips on staying under the radar, and our platform supports dozens of bookmakers, so you can always rotate between accounts and continue earning.`,
    },
    {
      question: '🔒 Is my data safe?',
      answer: `Yes. We never store your bookmaker login details. Telegram handles all messaging securely, and any data we use (like odds) is public and encrypted.`,
    },
    {
      question: '🎁 Do you help with bookmaker bonuses?',
      answer: `Absolutely. We highlight available promotions and welcome bonuses from bookmakers to give you extra value, especially when setting up new accounts.`,
    },
    {
      question: '🛠 What else is included in the subscription?',
      answer: `● Unlimited surebet alerts
      \n● Access to our bankroll tracker
      \n● Odds analysis dashboard
      \n● Educational resources
      \n● Future features like middles and value bets`,
    },
    {
      question: '📅 Is this suitable for long-term use?',
      answer: `Yes. Arbitrage betting is not a one-time trick — it's a data-driven strategy that can deliver reliable results over time, especially when combined with good staking discipline and the right tools (which we provide).`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.contentWrapper}>
        {/* Left Column: Support Options */}
        <div className={styles.supportColumn}>
          <div className={styles.supportIconLargeWrapper}>
             {/* This icon isn't explicitly defined by text, but matches image_f04960.png */}
            <FaPhoneAlt className={styles.supportIconLarge} />
          </div>
          <h2 className={styles.supportHeading}>
            Sound too good to be true? Let us answer your questions.
          </h2>
          <div className={styles.supportOptions}>
            <a href="#" className={styles.supportOptionItem}>
              <FaComments className={styles.supportOptionIcon} />
              <p className={styles.supportOptionText}>24/7 Live Chat</p>
            </a>
            <a href="#" className={styles.supportOptionItem}>
              <FaDiscord className={styles.supportOptionIcon} />
              <p className={styles.supportOptionText}>Discord Community</p>
            </a>
            <a href="#" className={styles.supportOptionItem}>
              <FaTwitter className={styles.supportOptionIcon} />
              <p className={styles.supportOptionText}>X Threads</p>
            </a>
          </div>
        </div>

        {/* Right Column: FAQ List */}
        <div className={styles.faqColumn}>
          <h2 className={styles.faqMainTitle}>Frequently Asked Questions (FAQ)</h2>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQIndex === index}
              >
                {item.question}
                <FaChevronDown
                  className={`${styles.faqToggleIcon} ${openFAQIndex === index ? styles.open : ''}`}
                />
              </button>
              {openFAQIndex === index && (
                <div className={styles.faqAnswer}>
                  {/* Using dangerouslySetInnerHTML to render newlines from \n. 
                      Consider a markdown renderer for richer text if needed. */}
                  <p dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br />') }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;