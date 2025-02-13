import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar/page";
import Sidebar from "./components/Sidebar/page";

export const metadata: Metadata = {
  title: "AchieveIt",
  description: "Crafted by Sri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="flex min-h-screen p-4">
          <Sidebar />
          <div className="flex-1 flex flex-col md:pl-20">
            <Navbar />
            <main className="flex-1 overflow-auto pt-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}