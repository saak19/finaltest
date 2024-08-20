import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaServicestack, FaVideo, FaBars, FaCog } from 'react-icons/fa';
import profileImg from '../imgs/profile.png'; // Adjust the path as needed
import '../style/Sidebar.css'; // Updated filename for consistency

const Slider = ({ onNavClick, activeView }) => {
  // Check if onNavClick is a function
  if (typeof onNavClick !== 'function') {
    console.error('onNavClick is not a function');
    return null;
  }

  const handleNavClick = (view) => {
    onNavClick(view); // Call the parent handler to update the active view
  };

  return (
    <div className="navbar-container">
      <div className="profile-section">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
      <div className="navigation-icons">
        <div
          className={`nav-icon ${activeView === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
          aria-label="Home"
        >
          <FaHome />
          <span className="tooltip">Home</span>
        </div>
        <div
          className={`nav-icon ${activeView === 'notifications' ? 'active' : ''}`}
          onClick={() => handleNavClick('notifications')}
          aria-label="Notifications"
        >
          <FaBell />
          <span className="tooltip">Notifications</span>
        </div>
        <div
          className={`nav-icon ${activeView === 'messages' ? 'active' : ''}`}
          onClick={() => handleNavClick('messages')}
          aria-label="Messages"
        >
          <FaEnvelope />
          <span className="tooltip">Messages</span>
        </div>
        <div
          className={`nav-icon ${activeView === 'videos' ? 'active' : ''}`}
          onClick={() => handleNavClick('videos')}
          aria-label="Videos"
        >
          <FaVideo />
          <span className="tooltip">Videos</span>
        </div>
        <div
          className={`nav-icon ${activeView === 'services' ? 'active' : ''}`}
          onClick={() => handleNavClick('services')}
          aria-label="Services"
        >
          <FaServicestack />
          <span className="tooltip">Services</span>
        </div>
        <div
          className={`nav-icon ${activeView === 'menu' ? 'active' : ''}`}
          onClick={() => handleNavClick('menu')}
          aria-label="Menu"
        >
          <FaBars />
          <span className="tooltip">Menu</span>
        </div>
      </div>
      <div className="settings-section">
        <div
          className={`nav-icon ${activeView === 'settings' ? 'active' : ''}`}
          onClick={() => handleNavClick('settings')}
          aria-label="Settings"
        >
          <FaCog />
          <span className="tooltip">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
