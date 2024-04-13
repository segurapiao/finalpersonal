import React from 'react';
import PropTypes from 'prop-types';
import './WorkWidget.css';
import Image from 'next/image';

const WorkWidget = ({ title, content, experiences, darkMode }) => {
  return (
    <section data-testid="workWidget" className={`work-widget ${darkMode ? 'dark' : ''}`}>
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent" className={darkMode ? 'dark-text' : ''}>{content}</p>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} data-testid={`workWidgetItem${index}`} className={darkMode ? 'dark' : ''}>
            <div className="work-item">
              <Image
                src={experience.logo}
                alt={`${experience.organization} Logo`}
                data-testid={`workWidgetItemLogo${index}`}
                className="organization-logo"
                style={{ filter: darkMode ? '' : 'none' }}
              />
              <div className="work-item-content">
                <h3 data-testid={`workWidgetItemTitle${index}`} className="organization-name">
                  {experience.organization}
                </h3>
                <div className="work-item-content-details">
                  <p data-testid={`workWidgetItemContent${index}`} className="job-title">
                    {experience.jobTitle}
                  </p>
                  <span data-testid={`workWidgetItemDates${index}`} className="date-range">
                    {experience.endYear ? (
                      `${experience.startYear} - ${experience.endYear}`
                    ) : (
                      `${experience.startYear} - current`
                    )}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
  darkMode: PropTypes.bool.isRequired,
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
