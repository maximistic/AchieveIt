"use client";
import * as React from "react";
import NotificationIcon from "./NotificationIcon";
import UserDropdown from "./UserDropdown";
import ThemeToggleButton from "../ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="bg-[var(--color-bg)] p-8 text-[var(--color-text)]">
      <nav className="bg-[var(--color-bg-secondary)] p-5 flex justify-between items-center rounded-xl">
        <div className="flex items-center gap-4">
          <HamburgerMenu />
          <b>ACHIEVEIT</b>
        </div>

        <div className="flex items-center gap-4">
          <NotificationIcon />
          <ThemeToggleButton />
          <UserDropdown />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

/*
Navbar icons - logo, notifications/remainders (bell icon), user profile -> click -> drop down -> log out, settings, theme toggle button

Mobile view:
hamburger, notifs, profile icon, theme toggle button (or floating action button)
*/