import React, { useState } from 'react';
import '../style/Settings.css'; // Make sure to style your component
import { FaTimes } from 'react-icons/fa'; // Import the close icon

const Settings = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const handleLoginToAnotherAccount = () => {
    // Logic for logging in to another account
    alert('Redirecting to login page...');
  };

  const handleSignOut = () => {
    // Logic for signing out
    alert('Signing out...');
  };

  const handleCreateNewAccount = () => {
    // Logic for creating a new account
    alert('Redirecting to account creation page...');
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the settings component
  };

  return (
    isVisible && (
      <div className="settings-container">
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>
        <h1 className="settings-header">Settings</h1>
        <ul className="settings-options">
          <li>
            <button onClick={handleLoginToAnotherAccount} className="settings-button">
              Login to Another Account
            </button>
          </li>
          <li>
            <button onClick={handleSignOut} className="settings-button">
              Sign Out
            </button>
          </li>
          <li>
            <button onClick={handleCreateNewAccount} className="settings-button">
              Create a New Account
            </button>
          </li>
        </ul>
      </div>
    )
  );
};

export default Settings;
