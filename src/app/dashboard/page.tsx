"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import ProjectCard from "@/components/ProjectCard";

// Sample projects data
const SAMPLE_PROJECTS = [
  {
    id: "1",
    title: "E-commerce Landing Page",
    type: "Landing Page",
    imageUrl: "https://ext.same-assets.com/0/3963349356.svg", // Placeholder
    date: "Apr 1, 2025"
  },
  {
    id: "2",
    title: "Admin Dashboard",
    type: "Dashboard",
    imageUrl: "https://ext.same-assets.com/0/3963349356.svg", // Placeholder
    date: "Mar 28, 2025"
  },
  {
    id: "3",
    title: "Mobile App UI",
    type: "App UI",
    imageUrl: "https://ext.same-assets.com/0/3963349356.svg", // Placeholder
    date: "Mar 25, 2025"
  }
];

export default function DashboardPage() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState<typeof SAMPLE_PROJECTS>([]);
  const [showSamples, setShowSamples] = useState(false);

  const loadSampleProjects = () => {
    setProjects(SAMPLE_PROJECTS);
    setShowSamples(true);
  };

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} pt-24 transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-12 max-w-5xl animate-fade-in">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-10">
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length > 0 ? (
              projects.map(project => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  type={project.type}
                  imageUrl={project.imageUrl}
                  date={project.date}
                />
              ))
            ) : (
              // Empty state - no projects
              <div className={`col-span-full flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900/30 border-gray-800/50' : 'bg-gray-100/50 border-gray-200/50'} border rounded-lg p-12 text-center animate-slide-up`}>
                <div className={`mb-4 p-4 rounded-full ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-100'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>No projects yet</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} max-w-md mb-6`}>
                  Upload an image of your UI design and get a prompt for your favorite AI coding tool.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                    Create New Project
                  </Button>
                  {!showSamples && (
                    <Button
                      variant="outline"
                      onClick={loadSampleProjects}
                      className={`${theme === 'dark' ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                      Load Sample Projects
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
