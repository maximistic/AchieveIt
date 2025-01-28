"use client";
import * as React from "react";
import NavbarItem from "./NavbarItem";
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useClickOutside from "@/app/hooks/useClickOutside";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <NavbarItem onClick={() => setIsOpen(!isOpen)}>
        <FaUserCircle size={24} className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors" />
      </NavbarItem>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] rounded-md shadow-lg overflow-hidden z-50">
          <NavbarItem className="flex items-center gap-2 p-3 hover:bg-[var(--color-accent)] transition-colors">
            <IoSettings size={20} className="text-[var(--color-text)]" />
            <span className="text-[var(--color-text)]">Settings</span>
          </NavbarItem>
          <NavbarItem className="flex items-center gap-2 p-3 hover:bg-[var(--color-accent)] transition-colors">
            <BiLogOut size={20} className="text-[var(--color-text)]" />
            <span className="text-[var(--color-text)]">Log Out</span>
          </NavbarItem>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;