"use client";
import * as React from "react";
import { FaBell } from "react-icons/fa";

const NotificationIcon = () => {
  return (
    <div className="p-2 rounded-md hover:bg-[var(--color-accent)] cursor-pointer">
      <FaBell size={24} />
    </div>
  );
};

export default NotificationIcon;