import { cva } from 'class-variance-authority';
import React from 'react'
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
}
const NavLink: React.FC<Props> = ({ href, children }) => {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment || ''}`
  return (
    <Link href={href} className={link({ active })}>
      {children}
    </Link>
  )
};

export default NavLink;

const link = cva(['w-44 max-w-full my-2 p-2 rounded text-center text-lg font-medium transition-colors'], {
  variants: {
    active: {
      true: 'bg-[#0b9219] text-white'
    }
  },
  defaultVariants: {
    active: false,
  }
})