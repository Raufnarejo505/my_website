// src/pages/LandingPage/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import styles from './LandingPage.module.css';

// Import the refactored sections
import HeroSection from './HeroSection.jsx';
import ProfitSection from './ProfitSection.jsx';
import ToolsShowcaseSection from './ToolsShowcaseSection.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyChooseSection from './WhyChooseSection.jsx';
import PricingSection from './PricingSection.jsx';
import FAQSection from './FAQSection.jsx';
import AboutUsSection from './AboutUsSection.jsx';

const LandingPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <main className={styles.landingPage}>
            {/* Hero Section - pass user */}
            <HeroSection user={user} />
            <AboutUsSection />

            {/* Other sections */}
            <ToolsShowcaseSection />
            <FeaturesSection />
            <ProfitSection />
            <HowItWorks />
            <WhyChooseSection />
            <PricingSection />
            <FAQSection />
        </main>
    );
};

export default LandingPage;
