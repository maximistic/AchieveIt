"use client";
import * as React from "react";
import NavbarItem from "./NavbarItem";
import { FaUserCircle } from "react-icons/fa";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* User Profile Icon */}
      <NavbarItem onClick={() => setIsOpen(!isOpen)}>
        <FaUserCircle size={24} />
      </NavbarItem>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] rounded-md shadow-lg">
          <NavbarItem>Settings</NavbarItem>
          <NavbarItem>Log Out</NavbarItem>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;