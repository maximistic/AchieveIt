"use client";
import React from 'react';
import { FaSearch, FaRegBell, FaRegUser } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const icons = [
  { icon: <FaSearch className="w-5 h-5"/>, link: '/search' },
  { icon: <FaRegBell className="w-5 h-5"/>, link: '/notifications' },
  { icon: <IoSettingsOutline className="w-5 h-5"/>, link: '/settings' },
  { icon: <FaRegUser className="w-5 h-5" />, link: '/profile' },
];

const NavIcons: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="nav-icons flex justify-between items-center w-full">
      <p
        className='font-bold p-4 cursor-pointer'
        onClick={handleLogoClick}
      >
        ACHIEVEIT
      </p>
      <div className="flex space-x-4 px-2">
        {icons.map(({ icon, link }, index) => (
          <div
            key={index}
            className="p-2 rounded-full bg-[var(--color-accent-secondary)] cursor-pointer"
            onClick={() => router.push(link)}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavIcons;
