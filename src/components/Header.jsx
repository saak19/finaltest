import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Only import FaSearch
import logo from '../imgs/vocsenalogo.png'; // Adjust the path as needed
import '../style/Header.css';

const Header = ({ title }) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="header__logo-img" />
          </Link>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search Vocsena..." />
          <FaSearch className="search-icon" />
        </div>
      </header>
    </div>
  );
};

export default Header;
