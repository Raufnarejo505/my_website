// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import styles from './LandingPage.module.css'; // For overall page layout/background

// Import the refactored sections
import HeroSection from './HeroSection.jsx';
import ProfitSection from './ProfitSection.jsx'; // Corrected path for new section
import ToolsShowcaseSection from './ToolsShowcaseSection.jsx'; // New: Extracted Tools Showcase
import FeaturesSection from './FeaturesSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyChooseSection from './WhyChooseSection.jsx';
import PricingSection from './PricingSection.jsx';
import FAQSection from './FAQSection.jsx'
import AboutUsSection from './AboutUsSection.jsx'

const LandingPage = () => {
    return (
        <main className={styles.landingPage}>

            
            {/* Hero Section */}
            <HeroSection />
            <AboutUsSection/>
        

            {/* New Profit Section */}
            <ToolsShowcaseSection />
            

            {/* Tools Showcase Section (Sidebar + Table) */}
           

            {/* Features Section */}
            <FeaturesSection />
            <ProfitSection />
            <HowItWorks/>
            <WhyChooseSection/>
            <PricingSection/>
            <FAQSection/>
            

            {/* You can add more sections here as you create them */}
        </main>
    );
};

export default LandingPage;