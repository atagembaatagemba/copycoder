"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  date: string;
}

export default function ProjectCard({ id, title, type, imageUrl, date }: ProjectCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}
                 transition-all duration-300 ${isHovered ? 'transform translate-y-[-4px] shadow-lg' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={225}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/80 to-transparent' : 'from-black/60 to-transparent'}`} />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-medium">{title}</p>
          <p className="text-gray-300 text-sm">{type}</p>
        </div>
      </div>
      <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-3">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Created on {date}
          </p>
          <span className={`inline-flex items-center justify-center rounded-full px-2 py-1 text-xs
                          ${type === 'Landing Page'
                            ? 'bg-green-500/20 text-green-500'
                            : type === 'Dashboard'
                              ? 'bg-blue-500/20 text-blue-500'
                              : 'bg-purple-500/20 text-purple-500'}`}>
            {type}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`flex-1 ${theme === 'dark' ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
          >
            View
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Edit Prompt
          </Button>
        </div>
      </div>
    </div>
  );
}
