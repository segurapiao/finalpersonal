import React from 'react';
import PropTypes from 'prop-types';
import './ArticleCard.css';

const ArticleCard = ({ date, title, content, link, darkMode }) => {
  return (
    <article data-testid={'articleCard'} className={`article-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="article-card-header">
        <time data-testid={'articleCardDate'} className="article-card-date">
          {date}
        </time>
        <h2 data-testid={'articleCardTitle'} className="article-card-title">
          {title}
        </h2>
      </div>
      <p data-testid={'articleCardContent'} className="article-card-content">
        {content}
      </p>
      <a data-testid={'articleCardLink'} href={link} className="article-card-link">
        Read article
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
};

ArticleCard.defaultProps = {
  link: '#',
};

export default ArticleCard;
