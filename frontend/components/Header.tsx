import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  isActiveNav: boolean;
  onButtonClick: () => void;
}

const Header: React.FC<Props> = ({ isActiveNav, onButtonClick }) => {
  return (
    <header className="flex h-10 justify-between items-center">
      <button type="button" title="Menu" onClick={onButtonClick} className="text-3xl md:text-4xl">
        {isActiveNav? <FaTimes className="" /> : <FaBars className="ml-2 md:ml-3" />}
      </button>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
