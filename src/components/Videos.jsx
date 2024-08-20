import React, { useState } from 'react';
import '../style/Videos.css'; // Ensure you have a CSS file for styling
import { FaSearch, FaArrowLeft, FaVideo } from 'react-icons/fa'; // Import icons

const Videos = ({ onClose }) => { // Receive the onClose prop
  const [searchTerm, setSearchTerm] = useState('');
  
  const videos = [
    { id: 1, title: 'Introduction to Web Development', duration: '15:30', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'WebDev Academy', uploadDate: '2024-08-01' },
    { id: 1, title: 'Introduction to Web Development', duration: '15:30', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'WebDev Academy', uploadDate: '2024-08-01' },
    { id: 2, title: 'Advanced JavaScript Techniques', duration: '25:45', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'JavaScript Guru', uploadDate: '2024-08-03' },
    { id: 3, title: 'React Hooks Explained', duration: '12:10', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'React Insights', uploadDate: '2024-08-05' },
    { id: 4, title: 'CSS Grid and Flexbox', duration: '18:20', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'CSS Masters', uploadDate: '2024-08-07' },
    { id: 5, title: 'Node.js Essentials', duration: '20:30', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Node Experts', uploadDate: '2024-08-10' },
    { id: 6, title: 'GraphQL Fundamentals', duration: '22:15', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'GraphQL Wizards', uploadDate: '2024-08-12' },
    { id: 7, title: 'Typescript for Beginners', duration: '30:45', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'TypeScript Masters', uploadDate: '2024-08-15' },
    { id: 8, title: 'Performance Optimization', duration: '17:50', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Performance Pros', uploadDate: '2024-08-18' },
    { id: 9, title: 'Understanding REST APIs', duration: '14:40', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'API Specialists', uploadDate: '2024-08-20' },
    { id: 10, title: 'Introduction to Docker', duration: '19:55', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'DevOps Insights', uploadDate: '2024-08-22' },
    { id: 11, title: 'Database Design Principles', duration: '21:30', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Database Experts', uploadDate: '2024-08-25' },
    { id: 12, title: 'Modern JavaScript Frameworks', duration: '23:00', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Frontend Wizards', uploadDate: '2024-08-28' },
    { id: 13, title: 'Building Scalable Applications', duration: '29:15', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'App Builders', uploadDate: '2024-08-30' },
    { id: 14, title: 'Data Visualization with D3.js', duration: '16:45', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Data Analysts', uploadDate: '2024-09-02' },
    { id: 15, title: 'Mastering Web Security', duration: '27:20', thumbnail: 'https://via.placeholder.com/1280x720', channel: 'Security Experts', uploadDate: '2024-09-05' }  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="videos-wrapper">
      <div className="videos-sidebar">
        <h1 className="videos-header">Video Library</h1>

        <div className="actions-container">
          <FaArrowLeft className="action-icon" onClick={onClose} /> {/* Use onClose here */}
          <div className="video-search-bar-container">
            <input 
              type="text" 
              placeholder="Search for videos..." 
              value={searchTerm}
              onChange={handleSearch}
              className="video-search-input-field"
            />
            <FaSearch className="search-icon-element" />
          </div>
          <FaVideo className="action-icon" onClick={() => alert('Upload video')} />
        </div>

        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail-image" />
              <div className="video-info">
                <h2 className="video-title-text">{video.title}</h2>
                <p className="video-duration-text">{video.duration}</p>
                <p className="video-channel-name">Channel: {video.channel}</p>
                <p className="video-upload-date">Uploaded on: {video.uploadDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
