import * as React from 'react';
import DashBoard from "./dashboard/page"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
      <DashBoard/>
    </div> 
  );
};
