"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Find Doctors", href: "/#find-doctors" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 drop-shadow-md">
            BlueMed
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 font-medium drop-shadow-md transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-900 hover:text-blue-600 font-medium drop-shadow-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white/90 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white drop-shadow-md transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none drop-shadow-md"
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-md shadow-lg border-t border-white/30">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-medium drop-shadow-md"
              >
                {link.name}
              </Link>
            ))}

            <hr className="border-white/30" />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block text-gray-900 font-medium drop-shadow-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold drop-shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
