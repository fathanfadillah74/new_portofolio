import "../assets/style/navbar.css";
import burgerIcon from "../assets/img/burgerIcon.png";
import dayIcon from "../assets/img/dayIcon.png";
import nightIcon from "../assets/img/nightIcon.png";
import closeIcon from "../assets/img/closeIcon.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const themeCookie = getCookie("theme");
    if (themeCookie === "dark") {
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme");
    } else if (themeCookie === "light") {
      setIsDarkTheme(false);
      document.body.classList.remove("dark-theme");
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkTheme(prefersDarkMode);
      document.body.classList.toggle("dark-theme", prefersDarkMode);
    }
  }, []);

  const handleThemeToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setIsDarkTheme(e.target.checked);
    document.body.classList.toggle("dark-theme", e.target.checked);
    setCookie("theme", newTheme, 365); // Set the cookie for 1 year
  };

  const handleNavItemClick = (index, sectionId, event) => {
    event.preventDefault();
    setActiveIndex(index);
    const section = document.getElementById(sectionId);
    index === 0 ? window.scrollTo({ top: 0, behavior: 'smooth' }) : section.scrollIntoView({ behavior: 'smooth' });
    setNavVisible(false);
  };

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  // Helper function to get a cookie
  const getCookie = (name) => {
    const nameEq = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEq) === 0) {
        return c.substring(nameEq.length, c.length);
      }
    }
    return "";
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skill", "experience", "contact"];
      let found = false;
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight

      if (!isNavVisible) {
        setNavVisible(false);
      }

      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            scrollPosition >= pageHeight ? setActiveIndex(sections.length - 1) : setActiveIndex(index);
            found = true;
          }
        }
      });

      // If no section is found in the view, reset active index
      if (!found) {
        setActiveIndex(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="name">Fathan Fadillah</div>
      {!isDesktop && (
        <div className="theme-toggle">
          <input
            type="checkbox"
            id="themeSwitch"
            checked={isDarkTheme}
            onChange={handleThemeToggle}
          />
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
            <input
              type="checkbox"
              id="themeSwitchDesktop"
              checked={isDarkTheme}
              onChange={handleThemeToggle}
            />
            <label htmlFor="themeSwitchDesktop" className="switch">
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
            onClick={(event) => handleNavItemClick(index, item.toLowerCase(), event)} // Pass event here
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
