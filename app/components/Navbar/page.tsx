import * as React from 'react';
import NavIcons from './NavIcons';

function Navbar() {
  return (
    <div className="sticky top-4 z-50 px-4 md:pl-12">
      <div className="
        w-full h-16
        bg-[var(--color-bg-secondary)] border border-[var(--color-border)]
        flex items-center 
        rounded-2xl
      ">
        <NavIcons />
      </div>
    </div>
  );
}

export default Navbar;