'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { rootCertificates } from 'tls';

type ThemeType = 'dark' | 'light';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as any;
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-colo-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    setTheme(t);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme])

  return (
    <button type="button" onClick={toggleTheme} title="Theme toggle" className=" grid place-items-center w-10 h-10 rounded-full bg-gray-600">
      {theme === 'light' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-yellow-400"/>}
    </button>
  );
};

export default ThemeToggleButton;
