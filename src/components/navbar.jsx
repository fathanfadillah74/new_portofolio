import "../assets/style/navbar.css";
import burgerIcon from "../assets/img/burgerIcon.png";
import dayIcon from "../assets/img/dayIcon.png";
import nightIcon from "../assets/img/nightIcon.png";
import closeIcon from "../assets/img/closeIcon.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Track screen size

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    document.getElementsByClassName("section-text-about")[0].style.marginTop = isNavVisible ? "0" : "5rem";
  };

  return (
    <nav className="navbar">
      <div className="name">Fathan Fadillah</div>
      {!isDesktop && (
        <div className="theme-toggle">
          <input type="checkbox" id="themeSwitch" />
          <label htmlFor="themeSwitch" className="switch">
            <span className="slider">
              <img className="dayIcon" src={dayIcon} alt="Day Icon" />
              <img className="nightIcon" src={nightIcon} alt="Night Icon" />
            </span>
          </label>
        </div>
      )}
      <img
        className="burger"
        src={isNavVisible ? closeIcon : burgerIcon}
        alt=""
        onClick={toggleNav}
      />
      <ul className={`navLinks ${isNavVisible ? "show" : ""}`}>
        {isDesktop && (
            <div className="theme-toggle">
              <input type="checkbox" id="themeSwitch" />
              <label htmlFor="themeSwitch" className="switch">
                <span className="slider">
                  <img className="dayIcon" src={dayIcon} alt="Day Icon" />
                  <img className="nightIcon" src={nightIcon} alt="Night Icon" />
                </span>
              </label>
            </div>
        )}
        {["About", "Skill", "Experience", "Contact"].map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => handleNavItemClick(index)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
