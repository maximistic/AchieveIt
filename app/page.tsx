"use client";
import * as React from 'react';
import ThemeToggleButton from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
      <ThemeToggleButton />
    </div> 
  );
};
