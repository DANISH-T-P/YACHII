import React, { useEffect, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo" aria-label="Yachii home">
          <span className="logo-img"></span>
          <span className="logo-text">YACHII</span>
        </a>

        {/* Navigation */}
        <nav
          className={`navmenu ${isMobileMenuOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Main"
        >
          <Scrollspy
            items={["home", "about", "products", "career", "contact"]}
            currentClassName="active"
            componentTag="ul"
            offset={-100}
          >
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>

            {/* Products dropdown */}
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="products-menu"
                onClick={toggleDropdown}
              >
                Products
                <i
                  className={`bi ${
                    isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </button>

              <ul id="products-menu" className="dropdown-menu" role="menu">
                <li>
                  <a href="#ychat" onClick={(e) => handleNavClick(e, "ychat")}>
                    YChat
                  </a>
                </li>
                <li>
                  <a href="#ywork" onClick={(e) => handleNavClick(e, "ywork")}>
                    YWork
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#subscribe"
                onClick={(e) => handleNavClick(e, "subscribe")}
              >
                Career
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </Scrollspy>
        </nav>

        {/* Enhanced Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ 
          width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
        }}
      ></div>
    </header>
  );
};

export default Header;
