"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SideIcons from "./SideIcons";
import BottomNav from "./BottomNav";

const Sidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sidebarRef.current) {
      if (isMobile) {
        gsap.to(sidebarRef.current, { x: -100, opacity: 0, duration: 0.3 });
      } else {
        gsap.fromTo(sidebarRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
      }
    }
  }, [isMobile]);

  return (
    <>
      {/* Sidebar for md and larger screens */}
      <div
        ref={sidebarRef}
        className={`hidden md:flex fixed left-4 top-4 bottom-4 w-20 
        bg-[var(--color-text)] rounded-2xl border border-[var(--color-border)]
        items-center transition-transform duration-300`}
      >
        <SideIcons />
      </div>

      {/* Bottom Navigation for small screens */}
      {isMobile && <BottomNav />}
    </>
  );
};

export default Sidebar;
