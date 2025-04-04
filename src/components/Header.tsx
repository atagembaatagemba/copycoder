"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-800/55' : 'border-gray-200/55'} z-20`}>
      <div className="max-w-7xl mx-auto px-4 h-16 relative flex items-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <Image
            src="https://ext.same-assets.com/2700823494/849522504.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-auto h-8"
          />
          <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>CopyCoder</span>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className={`group relative px-4 py-2 text-sm rounded-lg ${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-black/90 hover:text-black'} transition-colors`}
          >
            <div className={`absolute inset-0 rounded-lg border ${theme === 'dark' ? 'border-[#383838]' : 'border-[#d4d4d4]'}`} />
            <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-lg overflow-hidden">
              <div className={`absolute inset-x-0 -bottom-[2px] h-[4px] bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/30' : 'via-black/10'} to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-blue-400/80 group-hover:to-transparent blur-[2px] group-hover:blur-[3px] transition-all duration-500 ease-in-out`} />
              <div className={`absolute inset-x-[20%] -bottom-[4px] h-[6px] bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'} to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-purple-500/40 group-hover:to-transparent blur-[4px] group-hover:blur-[5px] transition-all duration-500 ease-in-out`} />
            </div>
            <span className={`relative z-10 bg-gradient-to-r ${theme === 'dark' ? 'from-blue-500/40 via-blue-500/20' : 'from-blue-500/30 via-blue-500/10'} to-transparent bg-clip-text`}>Dashboard</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
