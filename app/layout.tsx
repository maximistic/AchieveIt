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
      <body className="antialiased flex min-h-screen">
            <Navbar />
            <Sidebar />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
      </body>
    </html>
  );
}
