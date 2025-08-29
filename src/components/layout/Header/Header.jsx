import React, { useState } from 'react';
import styles from './Header.module.css';
import Button from '../../common/Button/Button.jsx';
import { FaChevronDown, FaChevronUp, FaRegLightbulb, FaCalculator, FaChartLine, FaQuestionCircle, FaPhoneAlt, FaBriefcase, FaBuilding, FaHeartbeat } from 'react-icons/fa';
import { RiExchangeDollarFill, RiMoneyDollarCircleFill, RiFundsBoxFill, RiCoinFill, RiSearchLine, RiBarChartBoxFill, RiFootballLine } from 'react-icons/ri';
import { MdOutlineSportsScore } from 'react-icons/md';
import { Link } from "react-router-dom";
import StateSelector from './StateSelector.jsx';
import LoginPage from '../../../pages/LoginPage/LoginPage.jsx';
import logo from '../../../assets/images/Untitled.png';

const Header = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isStateSelectorOpen, setIsStateSelectorOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('Greater London');
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  const handleDropdownEnter = (setter) => setter(true);
  const handleDropdownLeave = (setter) => setter(false);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setIsStateSelectorOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer}`}> {/* Removed 'container' class as it's defined in Header.module.css */}
        <div className={styles.leftSection}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Your Platform Logo" />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li
                className={styles.navItem}
                onMouseEnter={() => handleDropdownEnter(setIsToolsOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsToolsOpen)}
              >
                <button className={styles.navButton}>
                  Tools {isToolsOpen ? <FaChevronUp className={styles.arrowIcon} /> : <FaChevronDown className={styles.arrowIcon} />}
                </button>
                {isToolsOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownSection}>
                      <h3>FOR SPORTSBOOKS</h3>
                      <ul>
                        <li><a href="#"><RiExchangeDollarFill className={styles.dropdownIcon} />Arbitrage</a></li>
                        <li><a href="#"><RiMoneyDollarCircleFill className={styles.dropdownIcon} />Positive EV</a></li>
                        <li><a href="#"><RiFundsBoxFill className={styles.dropdownIcon} />Promo Converter</a></li>
                        <li><a href="#"><RiCoinFill className={styles.dropdownIcon} />Middles</a></li>
                        <li><a href="#"><FaRegLightbulb className={styles.dropdownIcon} />Low Holds</a></li>
                        <li><a href="#"><RiSearchLine className={styles.dropdownIcon} />Sportsbook Screen</a></li>
                      </ul>
                    </div>
                    <div className={styles.dropdownSection}>
                      <h3>FOR FANTASY APPS</h3>
                      <ul>
                        <li><a href="#"><RiFootballLine className={styles.dropdownIcon} />Fantasy Optimizer</a></li>
                        <li><a href="#"><MdOutlineSportsScore className={styles.dropdownIcon} />Fantasy Scores</a></li>
                        <li><a href="#"><RiCoinFill className={styles.dropdownIcon} />Fantasy Middles</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className={styles.navItem}>
                <a href="/pricing" className={styles.navLink}>Pricing</a>
              </li>
              <li
                className={styles.navItem}
                onMouseEnter={() => handleDropdownEnter(setIsResourcesOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsResourcesOpen)}
              >
                <button className={styles.navButton}>
                  Resources {isResourcesOpen ? <FaChevronUp className={styles.arrowIcon} /> : <FaChevronDown className={styles.arrowIcon} />}
                </button>
                {isResourcesOpen && (
                  <div className={styles.dropdown}>
                    <ul>
                      <li><a href="#"><FaChartLine className={styles.dropdownIcon} />Odds</a></li>
                      <li><a href="#"><FaCalculator className={styles.dropdownIcon} />Calculators</a></li>
                      <li><a href="#"><RiBarChartBoxFill className={styles.dropdownIcon} />Bet Tracker</a></li>
                      <li className={styles.dropdownDivider}></li>
                      <li><Link to="/support"><FaQuestionCircle className={styles.dropdownIcon} />Help Center</Link></li>
                      <li><a href="#"><FaPhoneAlt className={styles.dropdownIcon} />Schedule Free Coaching Call</a></li>
                      <li><a href="#"><FaBriefcase className={styles.dropdownIcon} />Careers</a></li>
                      <li><a href="#"><FaBuilding className={styles.dropdownIcon} />Enterprise</a></li>
                      <li><a href="#"><FaHeartbeat className={styles.dropdownIcon} />Responsible Gambling</a></li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightSection}>
            {/* Removed the search icon wrapper */}
            {/* Removed the dollar sign icon wrapper */}

            <div className={styles.stateSelectorWrapper}>
                <div className={styles.stateSelectorTrigger} onClick={() => setIsStateSelectorOpen(!isStateSelectorOpen)}>
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
            <a
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="small">Login</Button>
            </a>
        </div>
      </div>

      {isSearchOverlayOpen && (
        <div className={styles.searchOverlay} onClick={() => setIsSearchOverlayOpen(false)}>
            <div className={styles.searchOverlayContent} onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Search..." autoFocus className={styles.overlaySearchInput} />
                <button onClick={() => setIsSearchOverlayOpen(false)} className={styles.closeSearchOverlay}>&times;</button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;