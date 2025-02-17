import * as React from 'react';
import SideIcons from './SideIcons';

function Sidebar() {
  return (
    <div className="
      hidden md:block
      fixed left-4 top-4 bottom-4
      w-20
      bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)]
    ">
      <SideIcons />
    </div>
  );
}

export default Sidebar;