// Allows users to navigate through the site, and displays the site logo

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Executive Board", href: "/executive_board" },
    { name: "Events", href: "/events" },
    { name: "Dues & Membership", href: "/dues_and_membership" },
  ];

  return (
    <nav className="bg-[#fe9659] py-2 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-lg sm:text-xl items-center font-normal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontFamily: "var(--font-encode-sans-condensed), sans-serif" }}
              className="relative text-white hover:text-white/80 transition-colors duration-300"
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#fe9659] z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button at top-left */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-white text-3xl"
        >
          ✕
        </button>

        {/* Menu items */}
        <div className="flex flex-col pt-20 px-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ fontFamily: "var(--font-encode-sans-condensed), sans-serif" }}
              className="text-white text-2xl hover:text-white/80 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}