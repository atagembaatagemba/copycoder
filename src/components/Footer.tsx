"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`w-full ${theme === 'dark' ? 'bg-black border-gray-800/55' : 'bg-white border-gray-200/55'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-center gap-2">
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/70'} text-sm text-center`}>Connect with us or join our growing community!</p>
        <div className="flex items-center gap-4 my-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === 'dark' ? 'text-gray-400 hover:text-[#1DA1F2]' : 'text-gray-500 hover:text-[#1DA1F2]'} transition-colors duration-200`}
            href="https://x.com/CopyCoderAI"
            aria-label="X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === 'dark' ? 'text-gray-400 hover:text-[#5865F2]' : 'text-gray-500 hover:text-[#5865F2]'} transition-colors duration-200`}
            href="https://discord.gg/8UC2c23BMf"
            aria-label="Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === 'dark' ? 'text-gray-400 hover:text-[#EA4335]' : 'text-gray-500 hover:text-[#EA4335]'} transition-colors duration-200`}
            href="mailto:info@copycoder.ai"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors duration-200 text-xs`} href="/privacy">
            Privacy
          </Link>
          <Link className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors duration-200 text-xs`} href="/affiliate">
            Affiliate Program
          </Link>
          <Link className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors duration-200 text-xs`} href="/terms">
            Terms
          </Link>
        </div>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-xs`}>© 2025 CopyCoder AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
