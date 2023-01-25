import React from 'react';

interface Props {
  checked: boolean;
  toggle: () => void;
}

const AnimatedCheck: React.FC<Props> = ({ checked, toggle }) => {
  const totalLength = checked ? 0 : 40;

  return (
    <div className="grid place-items-center w-8 h-8 rounded bg-black/10 dark:bg-white/10" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path
          className="transition-all duration-300"
          strokeDashoffset={totalLength}
          strokeDasharray={totalLength}
          stroke="#0b9219"
          strokeWidth="3"
          strokeLinecap="round"
          d="M21.5 2C17 6 9.8 15.3091 9 22C8.33333 19.2121 6 12.8 2 9.45455"
        />
      </svg>
    </div>
  )
}

export default AnimatedCheck
