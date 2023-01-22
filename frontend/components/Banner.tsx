import React from 'react';
import Image from 'next/link';

interface Props {
  title: string;
  src: string;
}

const Banner: React.FC<Props> = ({ title, src }) => {
  return (
    <>
      <div className="relative w-full h-32">
        <img src={src} alt={title} fill priority className="object-contain" />
      </div>
      <h2 className="my-4 text-3xl text-center font-bold">{title}</h2>
    </>
  );
};

export default Banner;