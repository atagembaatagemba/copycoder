"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
import { useTheme } from "@/contexts/ThemeContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = theme === 'dark'
      ? "antialiased bg-black text-white"
      : "antialiased bg-white text-black";
  }, [theme]);

  return (
    <body
      className={`antialiased ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex flex-col`}
      suppressHydrationWarning
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatBubble />
    </body>
  );
}
