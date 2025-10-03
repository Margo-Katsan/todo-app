import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const themes = [
    'light',
    'dark',
    'retro',
    'valentine',
    'synthwave',
    'halloween',
    'luxury',
  ];

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="flex items-center border-0">
        Theme: {currentTheme}
        <HiChevronDown size={18} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 z-1 rounded-[22px] p-2 shadow-2xl"
      >
        {themes.map(theme => {
          return (
            <li key={theme}>
              <input
                onChange={e => setTheme(e.target.value)}
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label={theme}
                value={theme}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
