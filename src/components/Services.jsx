import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaPlus, FaChevronLeft, FaChevronRight, FaEllipsisV } from 'react-icons/fa';
import '../style/Services.css'; // Ensure you have a CSS file for styling

const Services = ({ onClose }) => {
  const [showServices, setShowServices] = useState(true);

  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Create visually appealing and user-friendly websites tailored to your needs.',
      price: '$500',
      images: ['https://fiverrbox.com/wp-content/uploads/2022/07/fiverr-gig-image-design-6940a90a.png', 'https://i.ytimg.com/vi/3aC7u6BiswA/maxresdefault.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/200979369/original/c572aaab364286163f97e437e4ed02350e11f358/create-optimized-fiverr-gig-and-account.jpg']
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description: 'Improve your website’s visibility on search engines to attract more traffic.',
      price: '$300',
      images: ['/images/seo-optimization-1.jpg', '/images/seo-optimization-2.jpg']
    },
    {
      id: 3,
      title: 'Social Media Management',
      description: 'Manage your social media accounts and create engaging content to boost your brand.',
      price: '$400',
      images: ['/images/social-media-management-1.jpg', '/images/social-media-management-2.jpg']
    },
    {
      id: 4,
      title: 'Content Writing',
      description: 'Provide high-quality content for blogs, articles, and marketing materials.',
      price: '$200',
      images: ['/images/content-writing-1.jpg', '/images/content-writing-2.jpg']
    },
    {
      id: 5,
      title: 'Graphic Design',
      description: 'Design attractive graphics for your brand.',
      price: '$250',
      images: ['/images/graphic-design-1.jpg', '/images/graphic-design-2.jpg']
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Promote your brand through online marketing strategies.',
      price: '$350',
      images: ['https://th.bing.com/th/id/OIP.LYjR1Xg6D2SPrp1K4GkN6QAAAA?rs=1&pid=ImgDetMain', '/images/digital-marketing-2.jpg']
    },
    {
      id: 7,
      title: 'App Development',
      description: 'Develop mobile and web applications tailored to your business.',
      price: '$600',
      images: ['/images/app-development-1.jpg', '/images/app-development-2.jpg']
    },
    {
      id: 8,
      title: 'Photography',
      description: 'Capture professional photos for your business needs.',
      price: '$150',
      images: ['/images/photography-1.jpg', '/images/photography-2.jpg']
    }
  ];

  const handleMenuClick = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="services-popup-container">
      <div className="services-header-container">
        <FaArrowLeft className="services-back-icon" onClick={onClose} />
        <div className="services-search-bar-container">
          <FaSearch className="services-search-icon" />
          <input type="text" placeholder="Search services..." className="services-search-input" />
        </div>
        <FaPlus className="services-create-icon" onClick={() => alert('Create Service')} />
        
      </div>

      {showServices && (
        <div className="services-content-container">
          <div className="services-grid-container">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? service.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const isLastImage = currentImageIndex === service.images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="service-card-container">
      <div className="service-image-carousel">
        <FaChevronLeft className="service-arrow-icon-left" onClick={goToPreviousImage} />
        <img src={service.images[currentImageIndex]} alt={service.title} className="service-image-display" />
        <FaChevronRight className="service-arrow-icon-right" onClick={goToNextImage} />
      </div>
      <h2 className="service-title-text">{service.title}</h2>
      <p className="service-description-text">{service.description}</p>
      <p className="service-price-text">{service.price}</p>
    </div>
  );
};

export default Services;
