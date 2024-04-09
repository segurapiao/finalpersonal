// import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar({ options, darkMode }) {
  options = options || []; // Use an empty array if options is not provided

  return (
    <nav data-testid="nav" className={`navbar ${darkMode ? 'dark' : 'light-mode'}`}>
      <ul data-testid="ul" className="navbar ul">
        {options.map((option, index) => (
          <li key={index} data-testid={`li${index}`}>
            <a href={option.path} className="link" data-testid={`a${index}`}>
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
