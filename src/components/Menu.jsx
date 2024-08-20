import React, { useState, useEffect, useRef } from 'react';
import { FaPen, FaServicestack, FaVideo, FaPlus, FaCalendar, FaBell, FaCogs } from 'react-icons/fa'; // Importing icons
import '../style/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to true to display the menu
  const menuRef = useRef(null);

  const handleCreatePost = () => {
    alert('Redirecting to create a post...');
  };

  const handleCreateService = () => {
    alert('Redirecting to create a service...');
  };

  const handleCreateVideo = () => {
    alert('Redirecting to upload a video...');
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-container">
      {isOpen && (
        <div className="menu-popup" ref={menuRef}>
          <h2 className="menu-title">Menu</h2>
          <ul className="menu-items">
            <li>
              <button onClick={handleCreatePost} className="menu-item-button">
                <FaPen className="menu-item-icon" />
              </button>
            </li>
            <li>
              <button onClick={handleCreateService} className="menu-item-button">
                <FaServicestack className="menu-item-icon" />
              </button>
            </li>
            <li>
              <button onClick={handleCreateVideo} className="menu-item-button">
                <FaVideo className="menu-item-icon" />
              </button>
            </li>
            <li className="coming-soon">
              <button className="menu-item-button">
                <FaPlus className="menu-item-icon" />
                <span className="coming-soon-text"></span>
              </button>
            </li>
            <li className="coming-soon">
              <button className="menu-item-button">
                <FaCalendar className="menu-item-icon" />
                <span className="coming-soon-text"></span>
              </button>
            </li>
            <li className="coming-soon">
              <button className="menu-item-button">
                <FaBell className="menu-item-icon" />
                <span className="coming-soon-text"></span>
              </button>
            </li>
            <li className="coming-soon">
              <button className="menu-item-button">
                <FaCogs className="menu-item-icon" />
                <span className="coming-soon-text"></span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
