"use client";
import React from "react";
import SidebarIcon from "./SidebarIcon";
import { sidebarItems } from "./SidebarData";

const BottomNav: React.FC = () => {
  const mobileItems = sidebarItems.filter(item => 
    ["Dashboard", "Goals", "Habits", "Calendar"].includes(item.label)
  );

  return (
    <div className="fixed md:hidden bottom-4 left-4 right-4 bg-[var(--color-bg-secondary)] flex justify-around items-center rounded-t-xl z-50 p-2">
      {mobileItems.map((item, index) => (
        <SidebarIcon key={index} icon={item.icon} label={item.label} path={item.path} />
      ))}
    </div>
  );
};

export default BottomNav;