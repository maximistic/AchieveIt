"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { RiLogoutBoxLine } from "react-icons/ri";

interface IconItem {
  icon: React.ReactNode;
  link: string;
  name: string;
}

const ICONS: IconItem[] = [
  { icon: <MdOutlineDashboard className="w-8 h-8" />, link: "/search", name: "Dashboard" },
  { icon: <IoCalendarNumberOutline className="w-8 h-8" />, link: "/notifications", name: "Calendar" },
  { icon: <FaTasks className="w-7 h-7" />, link: "/tasks", name: "Tasks" },
  { icon: <LuGoal className="w-8 h-8" />, link: "/goals", name: "Goals" },
  { icon: <TiArrowRepeatOutline className="w-8 h-8" />, link: "/habits", name: "Habits" },
];

const SideIcons: React.FC = () => {
  const router = useRouter();

  const handleNavigation = useCallback((link: string) => {
    router.push(link);
  }, [router]);

  return (
    <div className="flex flex-col justify-between h-full py-8">
      <div className="flex flex-col items-center space-y-5">
        {ICONS.map(({ icon, link, name }, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(link)}
            className="relative p-2 text-[var(--color-accent-secondary)] cursor-pointer group"
            aria-label={name}
          >
            {icon}
            <span className="absolute left-full px-2 py-1 
            bg-[var(--color-bg-secondary)] text-[var(--color-text)] 
            border-2 border-[var(--color-text)] rounded 
            font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            whitespace-nowrap z-2000 cursor-none">
              {name}
            </span>
          </button>
        ))}
      </div>
      
      <button
        onClick={() => console.log("Logging out...")}
        className="relative p-2 text-[var(--color-accent-secondary)] cursor-pointer group self-center"
        aria-label="Logout"
      >
        <RiLogoutBoxLine className="w-8 h-8" />
        <span className="absolute left-full px-2 py-1 
        bg-[var(--color-bg-secondary)] text-[var(--color-text)] 
        border-2 border-[var(--color-text)] rounded font-bold opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 z-2000 cursor-none">
          Logout
        </span>
      </button>
    </div>
  );
};

export default SideIcons;