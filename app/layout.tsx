import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeProvider"; 
import "./globals.css";

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
      <body className={`antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}