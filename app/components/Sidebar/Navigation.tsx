"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { RiLogoutBoxLine } from "react-icons/ri";
import gsap from "gsap";

interface NavigationProps {
  layout: "vertical" | "horizontal"; // Determines Sidebar vs BottomNav
}

const ICONS = [
  { icon: <MdOutlineDashboard className="w-8 h-8" />, link: "/search", name: "Dashboard" },
  { icon: <IoCalendarNumberOutline className="w-8 h-8" />, link: "/notifications", name: "Calendar" },
  { icon: <FaTasks className="w-7 h-7" />, link: "/tasks", name: "Tasks" },
  { icon: <LuGoal className="w-8 h-8" />, link: "/goals", name: "Goals" },
  { icon: <TiArrowRepeatOutline className="w-8 h-8" />, link: "/habits", name: "Habits" },
  { icon: <RiLogoutBoxLine className="w-8 h-8" />, link: "/logout", name: "Logout" },
];

const Navigation: React.FC<NavigationProps> = ({ layout }) => {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavigation = useCallback((link: string) => {
    router.push(link);
  }, [router]);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: layout === "horizontal" ? 100 : 0, x: layout === "vertical" ? -100 : 0 },
      { opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [layout]);

  return (
    <div ref={navRef} className={layout === "vertical" ? "flex flex-col h-full py-8" : "flex justify-around py-3"}>
      {ICONS.map(({ icon, link, name }, index) => (
        <button
          key={index}
          onClick={() => handleNavigation(link)}
          className={`relative p-2 text-[var(--color-accent-secondary)] cursor-pointer group 
          ${layout === "vertical" ? "flex flex-col items-center space-y-5" : "flex flex-col items-center"}`}
          aria-label={name}
        >
          {icon}
          <span className={`absolute ${layout === "vertical" ? "left-full" : "top-full"} px-2 py-1 
          bg-[var(--color-bg-secondary)] text-[var(--color-text)] border-2 border-[var(--color-text)] rounded 
          font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-2000 whitespace-nowrap`}>
            {name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Navigation;