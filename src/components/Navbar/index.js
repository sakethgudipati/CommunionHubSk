import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie"
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHome = location.pathname === "/";

  const onLogout = props => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className={`navbar ${isHome ? (scrolled ? "scrolled" : "home") : "default"}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">CommunionHub</Link>
        <button 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
        
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li className="no-border">
            <Link to="/login" className="login-btn" onClick={onLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;