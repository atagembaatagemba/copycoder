"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity z-50 animate-pulse-slow"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-80 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} border z-50 overflow-hidden animate-fade-in`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <h3 className="text-white font-semibold">Chat with Us</h3>
          </div>
          <div className={`p-4 h-80 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} flex flex-col gap-3`}>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg p-3 self-start max-w-[80%] animate-slide-up`}>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-sm`}>Hi there! How can I help you today?</p>
            </div>
            <div className="bg-blue-600 rounded-lg p-3 self-end max-w-[80%] animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-white text-sm">This is a demo chat bubble.</p>
            </div>
          </div>
          <div className={`p-3 border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} flex gap-2`}>
            <input
              type="text"
              placeholder="Type your message..."
              className={`flex-1 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
