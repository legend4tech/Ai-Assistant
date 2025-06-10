"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Bot, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 p-1.5">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-purple-500">SolanaAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link href="/chat">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0">
                Try Chat
              </Button>
            </Link>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 backdrop-blur-lg rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link href="/chat" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white border-0">
                  Try Chat
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
