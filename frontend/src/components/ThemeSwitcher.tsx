import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export const ThemeSwitcher = () => {
  const themes = [
    'light',
    'dark',
    'retro',
    'valentine',
    'synthwave',
    'hallowen',
    'luxury',
  ];

  const [currentTheme, setCurrentTheme] = useState('light');

  const setTheme = (theme: string) => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
    setCurrentTheme(theme);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="flex items-center border-0">
        Theme: {currentTheme} <HiChevronDown size={18} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-[22px] z-1 p-2 shadow-2xl"
      >
        {themes.map(theme => (
          <li key={theme}>
            <input
              onChange={() => setTheme(theme)}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
              aria-label={theme}
              checked={currentTheme === theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
