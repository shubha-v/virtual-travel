import React, { useState } from 'react';
import './navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="#">Plan My Holiday</a></li>
        <li><Link to='Packages'>Packages</Link></li>
        <li><a href="#">Holiday Themes</a></li>
        <li className="logo"><img src={logo} alt="Logo" style={{height:'70px',width:'90px'}} /></li>
        <li><a href="#">Client Review</a></li>

        <li>
            <a onClick={toggleDropdown}>
              Destination Guide<RiArrowDropDownLine/>
            </a>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item"><Link to='Goa'>Goa</Link></li>
                <li className="dropdown-item"><a href="#">Kerela</a></li>
                <li className="dropdown-item"><a href="#">Pondicherry</a></li>

              </ul>
            )}
            </li>
        
        <li><a href="#">About</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
