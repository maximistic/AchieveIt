import * as React from 'react';
import SideIcons from './SideIcons';

function Sidebar() {
  return (
    <div className="
      hidden md:block
      fixed left-4 top-4 bottom-4
      w-20
      bg-[var(--color-text)] rounded-2xl border border-[var(--color-border)]
      items-center
    ">
      <SideIcons />
    </div>
  );
}

export default Sidebar;