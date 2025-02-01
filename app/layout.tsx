import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeProvider"; 
import "./globals.css";

import Sidebar from "./components/sidebar/page";
import Navbar from "./components/navbar/page";
import BottomNav from "./components/sidebar/BottomNav";

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
        <ThemeProvider>
          <Sidebar />
          <div className="flex flex-col flex-1 min-h-screen">
            <Navbar />
            <main className="flex-1 p-4 overflow-auto">
              {children}
            </main>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
