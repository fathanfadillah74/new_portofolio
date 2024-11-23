import '../assets/style/navbar.css';
import burgerIcon from '../assets/img/burgerIcon.png';
import dayIcon from '../assets/img/dayIcon.png';
import nightIcon from '../assets/img/nightIcon.png';
import closeIcon from '../assets/img/closeIcon.png';
import { useState } from 'react';

function Navbar() {
    const [isNavVisible, setNavVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleNavItemClick = (index) => {
        setActiveIndex(index);
    };
    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };
    return (
        <nav className="navbar">
            <div className="name">Fathan Fadillah</div>
            <div className="theme-toggle">
                <input type="checkbox" id="themeSwitch" />
                <label for="themeSwitch" className="switch">
                    <span className="slider">
                        <img className="dayIcon" src={dayIcon} alt="Day Icon" />
                        <img className="nightIcon" src={nightIcon} alt="Night Icon" />
                    </span>
                </label>
            </div>
            <img className='burger' src={isNavVisible ? closeIcon : burgerIcon} alt="" onClick={toggleNav} />
            <ul className={`navLinks ${isNavVisible ? 'show' : ''}`}>
                {['About', 'Skill', 'Experience', 'Contact'].map((item, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? 'is-active' : ''}
                        onClick={() => handleNavItemClick(index)}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;