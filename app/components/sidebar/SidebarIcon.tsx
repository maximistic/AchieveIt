"use client";
import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarIconProps {
  icon: IconType;
  label: string;
  path: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon: Icon, label, path }) => {
  return (
    <Link href={path} className="flex flex-col items-center justify-center p-2 hover:bg-[var(--color-bg-hover)] rounded-lg transition-colors duration-200">
      <Icon className="w-6 h-6 text-[var(--color-text-secondary)]" />
      <span className="text-xs text-[var(--color-text-secondary)] mt-1">{label}</span>
    </Link>
  );
};

export default SidebarIcon;