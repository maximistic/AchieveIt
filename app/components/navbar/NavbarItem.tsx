"use client";
import * as React from "react";

interface NavbarItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavbarItem = ({ children, onClick, className }: NavbarItemProps) => {
    return (
      <div
        onClick={onClick}
        className={`p-2 cursor-pointer hover:bg-[var(--color-accent)] rounded-md ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default NavbarItem;