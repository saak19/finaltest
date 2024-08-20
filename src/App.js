import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Videos from './components/Videos';
import Services from './components/Services';
import Settings from './components/Settings';
import Slider from './components/Sidebar';

const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isVideosVisible, setVideosVisible] = useState(false);
  const [isServicesVisible, setServicesVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const handleNavClick = (view) => {
    switch (view) {
      case 'notifications':
        setNotificationsVisible(prev => !prev);
        break;
      case 'profile':
        setProfileVisible(prev => !prev);
        break;
      case 'videos':
        setVideosVisible(prev => !prev);
        break;
      case 'services':
        setServicesVisible(prev => !prev);
        break;
      case 'settings':
        setSettingsVisible(prev => !prev);
        break;
      default:
        setActiveView(view);
    }
  };

  const handleClose = (component) => {
    switch (component) {
      case 'notifications':
        setNotificationsVisible(false);
        break;
      case 'profile':
        setProfileVisible(false);
        break;
      case 'videos':
        setVideosVisible(false);
        break;
      case 'services':
        setServicesVisible(false);
        break;
      case 'settings':
        setSettingsVisible(false);
        break;
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'messages':
        return <Messages />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header title={activeView.charAt(0).toUpperCase() + activeView.slice(1)} />
      <Slider onNavClick={handleNavClick} activeView={activeView} />
      {isNotificationsVisible && <Notifications onClose={() => handleClose('notifications')} />}
      {isProfileVisible && <Profile onClose={() => handleClose('profile')} />}
      {isVideosVisible && <Videos onClose={() => handleClose('videos')} />}
      {isServicesVisible && <Services onClose={() => handleClose('services')} />}
      {isSettingsVisible && <Settings onClose={() => handleClose('settings')} />}
      <main className="content-container">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
