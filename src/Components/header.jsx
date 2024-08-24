import React, { useState } from 'react';
import './header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-items">
          <li className="nav-item">
            <button className="nav-link" onClick={toggleDropdown}>
              Menu
            </button>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">Profile</li>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item">Logout</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
