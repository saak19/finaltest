import React, { useState } from 'react';
import Slider from './Sidebar';
import Notifications from './Notifications';
import Messages from './Messages';
import Profile from './Profile';
import Videos from './Videos';
import Services from './Services';
import Menu from './Menu';
import Settings from './Settings';
import '../style/Home.css';
import serviceImg1 from '../imgs/maxresdefault (1).jpg';
import serviceImg2 from '../imgs/maxresdefault (2).jpg';
import profileImg from '../imgs/profile.png';
import postImg from '../imgs/1.png';
import videoFile from '../imgs/Untitled design.mp4';
import { FaCheckCircle, FaCopy, FaEllipsisV, FaHeart, FaComment, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [activeView, setActiveView] = useState('home');
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isMessagesVisible, setMessagesVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isVideosVisible, setVideosVisible] = useState(false);
  const [isServicesVisible, setServicesVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const [newPostText, setNewPostText] = useState('');
  const [showMenu, setShowMenu] = useState(null);
  const [likes, setLikes] = useState({ post: 0, postWithPhotos: 0 });
  const [comments, setComments] = useState({ post: 0, postWithPhotos: 0 });
  const [images, setImages] = useState([serviceImg1, serviceImg2]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [uploadTime, setUploadTime] = useState('1 hour ago');

  const handleNavClick = (view) => {
    setActiveView(view);

    setNotificationsVisible(view === 'notifications');
    setMessagesVisible(view === 'messages');
    setProfileVisible(view === 'profile');
    setVideosVisible(view === 'videos');
    setServicesVisible(view === 'services');
    setMenuVisible(view === 'menu');
    setSettingsVisible(view === 'settings');
  };

  const handleTextChange = (e) => {
    setNewPostText(e.target.value);
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here
  };

  const handleSubmitPost = () => {
    // Handle post submission logic here
  };

  const copyUsername = () => {
    // Handle copy username logic here
  };

  const copyPostLink = () => {
    // Handle copy post link logic here
  };

  const hidePost = (type) => {
    // Handle hide post logic here
  };

  const incrementLikes = (type) => {
    setLikes((prevLikes) => ({ ...prevLikes, [type]: prevLikes[type] + 1 }));
  };

  const incrementComments = (type) => {
    setComments((prevComments) => ({ ...prevComments, [type]: prevComments[type] + 1 }));
  };

  const toggleMenu = (type) => {
    setShowMenu(showMenu === type ? null : type);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleVideoMouseEnter = (e) => {
    e.target.play();
  };

  const handleVideoMouseLeave = (e) => {
    e.target.pause();
  };

  return (
    <div className="home-container">
      <Slider onNavClick={handleNavClick} activeView={activeView} />
      {isNotificationsVisible && <Notifications onClose={() => setNotificationsVisible(false)} />}
      {isMessagesVisible && <Messages onClose={() => setMessagesVisible(false)} />}
      {isProfileVisible && <Profile onClose={() => setProfileVisible(false)} />}
      {isVideosVisible && <Videos onClose={() => setVideosVisible(false)} />}
      {isServicesVisible && <Services onClose={() => setServicesVisible(false)} />}
      {isMenuVisible && <Menu onClose={() => setMenuVisible(false)} />}
      {isSettingsVisible && <Settings onClose={() => setSettingsVisible(false)} />}

      <div className="content-container">
        {/* New Post Section */}
        <div className="new-post-container">
          <div className="post-header-content">
            <img src={profileImg} alt="User" className="profile-img-post" />
            <div className="user-info-post">
              <div className="user-name-post">
                John Doe <FaCheckCircle className="verified-icon-post" />
              </div>
              <div className="user-username-post">
                @Johndoe21 <FaCopy className="copy-icon-post" onClick={copyUsername} />
              </div>
            </div>
          </div>
          <textarea
            className="new-post-textarea"
            placeholder="Write something here.."
            value={newPostText}
            onChange={handleTextChange}
          />
          <div className="new-post-file-input-wrapper">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="new-post-file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="new-post-file-input-label">
              <i className="fas fa-upload upload-icon"></i> Upload Photos
            </label>
            <button className="post-button" onClick={handleSubmitPost}>Post</button>
          </div>
        </div>

        {/* Existing Posts and Content */}
        <div className="content-box">
          <div className="post-content">
            <div className="post-header-content">
              <img src={profileImg} alt="User" className="profile-img-post" />
              <div className="user-info-post">
                <div className="user-name-post">
                  John Doe <FaCheckCircle className="verified-icon-post" />
                </div>
                <div className="user-username-post">
                  @Johndoe21 <FaCopy className="copy-icon-post" onClick={copyUsername} />
                </div>
              </div>
              <FaEllipsisV className="menu-icon" onClick={() => toggleMenu('post')} />
              {showMenu === 'post' && (
                <div className="dropdown-menu show">
                  <div onClick={copyPostLink}>Copy Post Link</div>
                  <div onClick={() => hidePost('post')}>Hide Post</div>
                </div>
              )}
            </div>
            <div className="post-text-content">
              This is a dummy text for the post content. It can be multiple lines long and contain any text.
            </div>
            <div className="post-actions-content">
              <div className="likes-comments">
                <div className="action-icon-content" onClick={() => incrementLikes('post')}>
                  <FaHeart />
                  <span className="count">{likes.post}</span>
                </div>
                <div className="action-icon-content" onClick={() => incrementComments('post')}>
                  <FaComment />
                  <span className="count">{comments.post}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="content-box-service-container-box">
          <div className="service-container">
            <div className="service-carousel">
              <FaArrowLeft className="arrow-icon-service" onClick={handlePrev} />
              <img src={images[currentImageIndex]} alt="Service" className="service-img" />
              <FaArrowRight className="arrow-icon-service" onClick={handleNext} />
            </div>
            <div className="service-details">
              <FaEllipsisV className="menu-icon" onClick={() => toggleMenu('service')} />
              {showMenu === 'service' && (
                <div className="dropdown-menu show">
                  <div onClick={copyPostLink}>Copy Service Link</div>
                  <div onClick={() => hidePost('service')}>Hide Service</div>
                </div>
              )}
              <h2 className="service-title">Best Doctor in your Town</h2>
              <p className="service-description">This is a short description of the service provided.</p>
              <div className="service-actions">
                <span className="service-price">$99.99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Content */}
        <div className="content-box">
          <div className="video-content">
            <div className="video-wrapper">
              <video
                src={videoFile}
                className="video"
                onMouseEnter={handleVideoMouseEnter}
                onMouseLeave={handleVideoMouseLeave}
                muted
              />
              <div className="video-overlay">
                <div className="video-title">Sample Video Title</div>
                <div className="video-timestamp">{uploadTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Post with Photos Content */}
        <div className="content-box">
          <div className="post-with-photos">
            <div className="post-header-photos">
              <img src={profileImg} alt="User" className="profile-img-post-photos" />
              <div className="user-info-post-photos">
                <div className="user-name-post-photos">
                  John Doe <FaCheckCircle className="verified-icon-post-photos" />
                </div>
                <div className="user-username-post-photos">
                  @johnjoe21 <FaCopy className="copy-icon-post-photos" onClick={copyUsername} />
                </div>
              </div>
              <FaEllipsisV className="menu-icon" onClick={() => toggleMenu('postWithPhotos')} />
              {showMenu === 'postWithPhotos' && (
                <div className="dropdown-menu show">
                  <div onClick={copyPostLink}>Copy Post Link</div>
                  <div onClick={() => hidePost('postWithPhotos')}>Hide Post</div>
                </div>
              )}
            </div>
            <img src={postImg} alt="Post" className="post-img-photos" />
            <div className="post-actions-photos">
              <div className="likes-comments">
                <div className="action-icon-content" onClick={() => incrementLikes('post')}>
                  <FaHeart />
                  <span className="count">{likes.post}</span>
                </div>
                <div className="action-icon-content" onClick={() => incrementComments('post')}>
                  <FaComment />
                  <span className="count">{comments.post}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
