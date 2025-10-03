import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { themes } from '@/constants/themes';
import { ThemeConfig } from '@/types/ThemeConfig';

export const ThemeSwitcher = () => {
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

  const activeTheme = themes.find(t => t.name === currentTheme);

  return (
    <div className="dropdown dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-[4px] border-0"
      >
        {activeTheme && <activeTheme.icon />}
        <span className="capitalize">{currentTheme}</span>
        <HiChevronDown size={18} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 z-1 rounded-[22px] p-4 shadow-2xl"
      >
        {themes.map((theme: ThemeConfig) => (
          <li key={theme.name} className="relative">
            <theme.icon className="absolute top-1/2 left-0 z-5 -translate-y-1/2" />
            <input
              onChange={() => setTheme(theme.name)}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start pl-[24px]"
              aria-label={theme.name}
              checked={currentTheme === theme.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
