"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { RiLogoutBoxLine } from "react-icons/ri";
import gsap from "gsap";

// Reuse the same ICONS array
const ICONS = [
  { icon: <MdOutlineDashboard className="w-6 h-6" />, link: "/search", name: "Dashboard" },
  { icon: <IoCalendarNumberOutline className="w-6 h-6" />, link: "/notifications", name: "Calendar" },
  { icon: <FaTasks className="w-6 h-6" />, link: "/tasks", name: "Tasks" },
  { icon: <LuGoal className="w-6 h-6" />, link: "/goals", name: "Goals" },
  { icon: <TiArrowRepeatOutline className="w-6 h-6" />, link: "/habits", name: "Habits" },
  { icon: <RiLogoutBoxLine className="w-6 h-6" />, link: "/logout", name: "Logout" },
];

const BottomNav: React.FC = () => {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--color-text)] border-t border-[var(--color-border)] py-3"
    >
      <div className="flex justify-around items-center">
        {ICONS.map(({ icon, link, name }, index) => (
          <button
            key={index}
            onClick={() => router.push(link)}
            className="flex flex-col items-center text-[var(--color-accent-secondary)] group"
            aria-label={name}
          >
            {icon}
            <span className="text-xs opacity-70">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
