'use client'
// ThemeSwitcher.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';
import Image from 'next/image';


const ThemeSwitcher = ({ darkClassName = 'dark', lightClassName = 'light' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica se o código está sendo executado no lado do cliente
    if (typeof window !== 'undefined') {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
      document.body.classList.remove(lightClassName);
    } else {
      document.body.classList.remove(darkClassName);
      document.body.classList.add(lightClassName);
    }
  };

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
      {isDarkMode ? <Image src="/dark4.png" alt="Dark Mode" width={24} height={24} /> : <Image src="/light.png" alt="Light Mode" width={24} height={24} />}

      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
  lightClassName: PropTypes.string,
};

export default ThemeSwitcher;
