'use client'
// ProjectCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import Image from 'next/image';

const ProjectCard = ({ logo, name, content, link, darkMode }) => {
  return (
    <div data-testid="projectCard" className={`project-card ${darkMode ? 'dark' : 'light'}`}>
      <div>
        <Image
          data-testid="projectCardLogo"
          src={logo}
          alt={`${name} Logo`}
          className="project-card-logo"
          style={{ filter: darkMode ? '' : 'none' }}
        />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p
          data-testid="projectCardContent"
          className={`project-card-content ${darkMode ? 'dark' : 'light'}`}
        >
          {content}
        </p>
        <a
          data-testid="projectCardLink"
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`project-card-link ${darkMode ? 'dark' : 'light'}`}
        >
          <Image src="/link.svg" alt="" className={`project-card-link-img ${darkMode ? 'dark' : 'light'}`} /> View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
};

ProjectCard.defaultProps = {
  link: '#',
};

export default ProjectCard;
