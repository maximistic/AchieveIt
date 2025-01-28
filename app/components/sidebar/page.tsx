"use client";
import * as React from "react";
import SidebarIcon from "./SidebarIcon";
import { sidebarItems } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-[var(--color-bg-secondary)] flex flex-col items-center justify-between py-4 rounded-xl">
      <div className="flex flex-col items-center space-y-4">
        {sidebarItems.map((item, index) => (
          <SidebarIcon key={index} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;


/*
Sidebar icons - dashboard, goals, habits, calendar, analytics, help

Mobile view:
bottom nav - dashboard, goals, habits, calendar
*/