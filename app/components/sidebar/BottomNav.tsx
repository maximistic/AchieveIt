"use client";
import React from "react";
import SidebarIcon from "./SidebarIcon";
import { sidebarItems } from "./SidebarData";

const BottomNav: React.FC = () => {
  const mobileItems = sidebarItems.filter(item => 
    ["Dashboard", "Goals", "Habits", "Calendar"].includes(item.label)
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg-secondary)] flex justify-around py-2">
      {mobileItems.map((item, index) => (
        <SidebarIcon key={index} icon={item.icon} label={item.label} path={item.path} />
      ))}
    </div>
  );
};

export default BottomNav;