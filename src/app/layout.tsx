import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CopyCoder",
  description: "Create powerful prompts for AI coding tools",
  icons: {
    icon: "https://ext.same-assets.com/2700823494/849522504.png",
    apple: "https://ext.same-assets.com/2700823494/849522504.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ThemeProvider>
        <ClientBody>{children}</ClientBody>
      </ThemeProvider>
    </html>
  );
}
