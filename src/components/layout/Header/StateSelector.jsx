import React, { useRef, useEffect, useState } from 'react'; // Import useState
import styles from './StateSelector.module.css';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const allStates = [ // Renamed to allStates as we'll filter it
"Bedfordshire", "Berkshire", "Bristol", "Buckinghamshire", "Cambridgeshire", "Cheshire", "City of London", 
"Cornwall", "Cumbria", "Derbyshire", "Devon", "Dorset", "County Durham", "East Riding of Yorkshire", 
"East Sussex", "Essex", "Gloucestershire", "Greater London", "Greater Manchester", "Hampshire", 
"Herefordshire", "Hertfordshire", "Isle of Wight", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", 
"Merseyside", "Norfolk", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", 
"Oxfordshire", "Rutland", "Shropshire", "Somerset", "South Yorkshire", "Staffordshire", "Suffolk", 
"Surrey", "Tyne and Wear", "Warwickshire", "West Midlands", "West Sussex", "West Yorkshire", 
"Wiltshire", "Worcestershire"
];

const StateSelector = ({ selectedState, onSelectState, onClose }) => {
    const selectorRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState(''); // New state for search input

    // Effect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    // Filter states based on search term
    const filteredStates = allStates.filter(state =>
        state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Split filtered states into two columns for display
    const midPoint = Math.ceil(filteredStates.length / 2);
    const firstColumnStates = filteredStates.slice(0, midPoint);
    const secondColumnStates = filteredStates.slice(midPoint);

    return (
        <div className={styles.stateSelectorDropdown} ref={selectorRef}>
            <div className={styles.header}>
                <span>United States</span>
                <div className={styles.searchContainer}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.stateList}>
                {filteredStates.length > 0 ? (
                    <>
                        <ul className={styles.stateColumn}>
                            {firstColumnStates.map(state => (
                                <li
                                    key={state}
                                    className={`${styles.stateItem} ${selectedState === state ? styles.selected : ''}`}
                                    onClick={() => onSelectState(state)}
                                >
                                    {state}
                                    {selectedState === state && <span className={styles.checkIcon}>&#10003;</span>}
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.stateColumn}>
                            {secondColumnStates.map(state => (
                                <li
                                    key={state}
                                    className={`${styles.stateItem} ${selectedState === state ? styles.selected : ''}`}
                                    onClick={() => onSelectState(state)}
                                >
                                    {state}
                                    {selectedState === state && <span className={styles.checkIcon}>&#10003;</span>}
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p className={styles.noResults}>No states found.</p>
                )}
            </div>
        </div>
    );
};

export default StateSelector;