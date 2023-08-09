import './Sidebar.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Sidebar = () => {
  const socialMediaData = [
    { name: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/siddarth-s04'},
    { name: 'Github', icon: 'github', link: 'https://github.com/siddarths1' },
  ];

  return (
    <div className="sidebar">
      <ul className="social-media-list">
        {socialMediaData.map((platform, index) => (
          <li key={index}>
            <a href={platform.link} target="_blank">
              <i className={`fab fa-${platform.icon}`} aria-hidden="true" ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
