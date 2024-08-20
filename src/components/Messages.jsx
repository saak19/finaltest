import React, { useState } from 'react';
import '../style/Messages.css'; // Ensure you have the corresponding CSS for styling
import { FaPaperPlane, FaArrowLeft } from 'react-icons/fa'; // Importing the send and close icons

const friends = [
  { id: 1, name: 'John Doe', message: 'Hey, how are you?', imgSrc: 'https://th.bing.com/th/id/OIP.VVoGXTuSUj3Blx0Iw-eF3wHaE7?rs=1&pid=ImgDetMain', chat: ['Hi!', 'How are you?', 'Let’s catch up soon.'] },
  { id: 2, name: 'Alice Smith', message: 'Can we meet tomorrow?', imgSrc: 'https://th.bing.com/th/id/OIP.st84Oisn7H4vyKZqSnE7fQHaLH?w=1000&h=1500&rs=1&pid=ImgDetMain', chat: ['Sure!', 'What time works for you?'] },
  { id: 3, name: 'Bob Johnson', message: 'Thanks for your help!', imgSrc: 'https://th.bing.com/th/id/OIP.3b-8aSTtWxj1yFeaRmWBRgHaHa?w=800&h=800&rs=1&pid=ImgDetMain', chat: ['No problem!', 'Glad I could help.'] },
  { id: 4, name: 'Emma Davis', message: 'Don’t forget the meeting!', imgSrc: 'https://img.freepik.com/premium-photo/beautiful-wide-smile-healthy-woman-white-teeth-close-up_947762-1967.jpg', chat: ['I won’t forget!', 'Thanks for the reminder.'] },
  { id: 5, name: 'Michael Brown', message: 'Looking forward to our chat.', imgSrc: 'https://img.freepik.com/premium-photo/beautiful-wide-smile-healthy-woman-white-teeth-close-up_947762-2260.jpg', chat: ['Me too!', 'See you then.'] },
  { id: 6, name: 'Sophia Wilson', message: 'Great job on the project!', imgSrc: 'https://th.bing.com/th/id/OIP.wJA6uxKvHrR-RRah5Vyq6gHaG7?w=450&h=421&rs=1&pid=ImgDetMain', chat: ['Thanks!', 'It was a team effort.'] },
  { id: 7, name: 'James Taylor', message: 'Let’s catch up soon.', imgSrc: 'https://img.freepik.com/premium-photo/beautiful-wide-smile-healthy-woman-white-teeth-close-up_947762-2421.jpg', chat: ['Absolutely!', 'How about next week?'] },
  { id: 8, name: 'Olivia Anderson', message: 'Can you send me the files?', imgSrc: 'https://th.bing.com/th/id/R.caeb395507f7bc6120d9dc855d9fccbc?rik=tnNw5Z6ppO1aWw&pid=ImgRaw&r=0', chat: ['Sure thing!', 'I’ll send them over today.'] },
];

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  // Filter friends based on search term
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    setPopupVisible(true);
  };

  const handleSendMessage = () => {
    if (selectedFriend && newMessage.trim()) {
      // Add the new message to the selected friend's chat
      const updatedFriends = friends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, chat: [...friend.chat, `Me: ${newMessage}`] }
          : friend
      );
      // Update state
      setNewMessage('');
      setSelectedFriend(updatedFriends.find(friend => friend.id === selectedFriend.id));
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedFriend(null);
  };

  return (
    <div className="messages-container-overall">
      <div className={`messages-list-container ${popupVisible ? 'slide-out' : ''}`}>
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input-field"
        />
        {filteredFriends.length > 0 ? (
          filteredFriends.map(friend => (
            <div key={friend.id} className="message-item-container" onClick={() => handleSelectFriend(friend)}>
              <img src={friend.imgSrc} alt={friend.name} className="profile-image" />
              <div className="message-content-container">
                <h2 className="friend-name-text">{friend.name}</h2>
                <p className="latest-message-text">{friend.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-messages-text">No messages found.</p>
        )}
      </div>

      {popupVisible && selectedFriend && (
        <div className="popup-container">
          <div className="popup-header">
            <FaArrowLeft className="close-popup-icon" onClick={handleClosePopup} />
            <img src={selectedFriend.imgSrc} alt={selectedFriend.name} className="popup-profile-image" />
            <h2 className="popup-friend-name">{selectedFriend.name}</h2>
          </div>
          <div className="popup-body">
            {selectedFriend.chat.length > 0 ? (
              selectedFriend.chat.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message-container ${msg.startsWith('Me:') ? 'me' : 'friend'}`}
                >
                  <p>{msg}</p>
                </div>
              ))
            ) : (
              <p className="no-messages-text">No messages yet.</p>
            )}
          </div>
          <div className="popup-footer">
            <textarea
              rows="3"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="message-input-area"
            />
            <button onClick={handleSendMessage} className="send-message-button">
              <FaPaperPlane className="send-button-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
