import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../style/Notifications.css';

const Notifications = ({ onClose }) => {
  const [notifications, setNotifications] = React.useState([
   'Notification 1: You have a new message from John.',
    'Notification 2: Your profile has been updated.',
    'Notification 3: New comment on your post.',
    'Notification 4: New follower on your profile.',
    'Notification 5: Your service proposal has been accepted.',
    'Notification 6: You have a new message from Alice.',
    'Notification 7: Your video has been featured.',
    'Notification 8: Your account settings have been updated.',
    'Notification 9: New like on your post.',
    'Notification 10: You have a new connection request.',
    'Notification 11: Your password was changed successfully.',
    'Notification 12: You have a new comment on your service post.',
    // Add more notifications as needed
  ]);

  return (
    <div className="notifications-popup show">
      <div className="notifications-container">
        <div className="notifications-header">
          <h1>Notifications</h1>
          <FaArrowLeft className="close-icon" onClick={onClose} />
        </div>
        <div className="notifications-list">
          {notifications.length > 0 ? (
            notifications.map((notif, index) => (
              <div key={index} className="notification-item">
                <span className="notification-text">{notif}</span>
              </div>
            ))
          ) : (
            <div className="no-notifications">No notifications</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
