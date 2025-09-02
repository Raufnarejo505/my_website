// src/pages/LandingPage/HeroSection.jsx
import React, { useState } from 'react';
import styles from './HeroSection.module.css';
import Button from '../../components/common/Button/Button.jsx';
import StateSelector from '../../components/layout/Header/StateSelector.jsx';
import { FaUserCircle, FaChevronDown, FaLock } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const HeroSection = ({ user }) => {   // 👈 accept user as prop
    const [selectedState, setSelectedState] = useState('Greater London');
    const [isStateSelectorOpen, setIsStateSelectorOpen] = useState(false);
    const navigate = useNavigate();
    const handleStateSelect = (state) => {
        setSelectedState(state);
        setIsStateSelectorOpen(false);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                {/* Greeting if user is logged in */}
                {user ? (
                    <p className={styles.welcomeMessage}>
                        <FaUserCircle className={styles.trustIcon} /> 
                        Welcome back, <strong>{user.first_name} {user.last_name}</strong> 👋
                    </p>
                ) : (
                    <p className={styles.trustIndicator}>
                        <FaUserCircle className={styles.trustIcon} /> Trusted by 100k+ bettors worldwide
                    </p>
                )}

                <h1 className={styles.heroTitle}>
                    Make $500-$1000+ weekly. <span className={styles.highlight}>Use math, not luck.</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Get data-backed {selectedState} bets sent daily for free.
                </p>

                <div className={styles.ctaForm}>
                    <div className={styles.inputWrapper}>
                        <MdOutlineMail className={styles.inputIcon} />
                        <input type="email" placeholder="Your email..." className={styles.emailInput} />
                    </div>

                    <div className={styles.stateSelectorWrapper}>
                        <div 
                            className={styles.stateSelectorTrigger} 
                            onClick={() => setIsStateSelectorOpen(!isStateSelectorOpen)}
                        >
                            <span>{selectedState}</span>
                            <FaChevronDown className={styles.arrowIcon} />
                        </div>
                        {isStateSelectorOpen && (
                            <StateSelector
                                selectedState={selectedState}
                                onSelectState={handleStateSelect}
                                onClose={() => setIsStateSelectorOpen(false)}
                            />
                        )}
                    </div>
                    <Button variant="secondary" size="large">Send me free bets</Button>
                </div>
            </div>

            <div className={styles.heroImageContainer}>
                <div className={styles.profitModule}>
                    <FaLock className={styles.lockIcon} />
                    <h3>See how much money you can make with SureBetters</h3>
                    <Button variant="secondary" onClick={() => navigate("/calculator")}>Estimate your profit</Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
