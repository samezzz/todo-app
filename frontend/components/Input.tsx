import React from 'react';

interface Props {
  name: string;
  disabled: boolean;
  value: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<Props> = ({ onChange, ...props}) => {
  return (
    <input type="text" autoComplete="off" {...props} onChange={e => onChange(e.target.value)} className="w-full p-1 outline-none focus:outline-[#0b9219] rounded bg-transparent disabled:line-through disabled:text-gray-400" />
  );
};

export default Input;
