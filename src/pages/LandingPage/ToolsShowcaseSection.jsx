// src/pages/LandingPage/ToolsShowcaseSection.jsx
import React from 'react';
import styles from './ToolsShowcaseSection.module.css'; // New CSS module for ToolsShowcaseSection
import Button from '../../components/common/Button/Button.jsx'; // Corrected path
import { FaChartLine, FaLock } from 'react-icons/fa'; // Icons for sidebar and table
import logo from '../../assets/images/oddsjam-logo.png'; // Assuming logo.svg in src/assets/

const ToolsShowcaseSection = () => {
  return (
    <section className={styles.toolsShowcaseSection}>
        <div className={styles.leftSidebar}>
            <div className={styles.sidebarHeader}>
                {/* <img src={logo} alt="Surebets Logo" className={styles.sidebarLogo} /> */}
                <div className={styles.sidebarTabs}>
                    <button className={styles.sidebarTab}>SPORTS BETTING</button>
                    <button className={styles.sidebarTab}>FANTASY</button>
                </div>
            </div>
            <ul className={styles.sidebarNav}>
                <li className={styles.sidebarNavItem}>
                    <a href="#" className={styles.sidebarNavLink}>
                        <FaChartLine className={styles.sidebarIcon} /> Arbitrage Bets
                        <span className={styles.percentage}>2.93%</span>
                    </a>
                </li>
                <li className={styles.sidebarNavItem}>
                    <a href="#" className={styles.sidebarNavLink}>
                        <FaChartLine className={styles.sidebarIcon} /> Positive EV
                    </a>
                </li>
                <li className={styles.sidebarNavItem}>
                    <a href="#" className={styles.sidebarNavLink}>
                        <FaChartLine className={styles.sidebarIcon} /> Middels
                    </a>
                </li>
            </ul>
        </div>

        <div className={styles.mainContentArea}>
            <div className={styles.tableHeader}>
                <h2>Arbitrage Bets</h2>
                <div className={styles.tableFilters}>
                    <button className={styles.filterButton}>Pre-match</button>
                    <button className={styles.filterButton}>500</button>
                    <button className={styles.filterButton}>Live <FaLock className={styles.lockIconSmall} /></button>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.dataTablet}>
                    <thead>
                        <tr>
                            <th>ARB % ↑</th>
                            <th>EVENT</th>
                            <th>BET NAME</th>
                            <th>BET & BOOKS</th>
                            <th>1-CLICK BET</th>
                            <th>NO-VIG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2.93%</td>
                            <td>Buffalo Bills vs Los Angeles Rams Football | NFL</td>
                            <td>Player Rushing Yards</td>
                            <td>
                                <div className={styles.betBooks}>
                                    <span>DraftKings: -180</span>
                                    <span>FanDuel: +205</span>
                                </div>
                            </td>
                            <td><Button variant="secondary" size="small">BET ↗</Button></td>
                            <td>-175</td>
                        </tr>
                        <tr>
                            <td>1.50%</td>
                            <td>NBA Game: Teams X vs Teams Y</td>
                            <td>Player Points Over/Under</td>
                            <td>
                                <div className={styles.betBooks}>
                                    <span>BetMGM: +150</span>
                                    <span>Caesars: -160</span>
                                </div>
                            </td>
                            <td><Button variant="secondary" size="small">BET ↗</Button></td>
                            <td>-155</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
};

export default ToolsShowcaseSection;