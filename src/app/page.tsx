"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file selection via input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Process the selected file
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    setIsUploading(true);

    // Create URL for preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setUploadedImage(e.target.result);
        setIsUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const resetUpload = () => {
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className={`pt-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-12">
        {/* Left Column - Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Create powerful
            <br />
            prompts for AI
            <br />
            coding tools
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-xl animate-slide-up`} style={{ animationDelay: "0.2s" }}>
            Built for the next generation of AI coders. Upload images
            of full applications, UI mockups, or custom designs and
            use our generated prompts to build your apps faster.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-auto rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
              View Demo
            </Button>
          </div>
        </div>

        {/* Right Column - Upload/Sign In Box */}
        <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800/60' : 'bg-gray-100/80 border-gray-200/60'} backdrop-blur-sm border rounded-lg overflow-hidden max-w-md mx-auto`}>
            <div className="p-8">
              {!uploadedImage ? (
                <>
                  <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
                    Sign in to continue
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6 text-center`}>
                    Enter your email to get started
                  </p>

                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      className={`${theme === 'dark' ? 'bg-gray-800/70 border-gray-700 text-white' : 'bg-white/90 border-gray-300 text-gray-900'} py-6 h-auto`}
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 h-auto">
                      Continue
                    </Button>
                  </div>

                  <div className="mt-12">
                    {/* Drag & Drop Area */}
                    <div
                      className={`w-full min-h-[200px] border-2 border-dashed rounded-lg
                                  ${dragActive
                                    ? 'border-blue-500'
                                    : theme === 'dark'
                                      ? 'border-gray-700'
                                      : 'border-gray-300'}
                                  flex flex-col items-center justify-center p-4 relative
                                  ${theme === 'dark' ? 'bg-gray-800/40' : 'bg-gray-200/40'}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Drag & drop your image here
                      </p>
                      <p className={`text-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        or click to browse
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm mb-2`}>Select Project Type</p>
                      <div className="relative">
                        <select className={`w-full ${theme === 'dark' ? 'bg-gray-800/70 border-gray-700 text-white' : 'bg-white/90 border-gray-300 text-gray-800'} border rounded-lg py-3 px-4 appearance-none`}>
                          <option>Landing Page</option>
                          <option>Web Application</option>
                          <option>Mobile UI</option>
                          <option>Dashboard</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
                    Image Uploaded
                  </h3>

                  <div className="w-full max-h-72 overflow-hidden rounded-lg mb-6 relative">
                    <Image
                      src={uploadedImage}
                      alt="Uploaded Preview"
                      width={400}
                      height={300}
                      className="object-contain w-full"
                    />
                  </div>

                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      onClick={resetUpload}
                      className={`flex-1 ${theme === 'dark' ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Generate Prompt
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
