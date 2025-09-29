// Allows users to navigate through the site, and displays the site logo

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // detects current page

  return (
    <nav className="bg-[#fe9659] py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-start h-16">
        <div className="flex space-x-6 text-lg sm:text-xl items-center font-normal">
          {[
            { name: "Home", href: "/" },
            { name: "Executive Board", href: "/executive_board" },
            { name: "Events", href: "/events" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontFamily: "var(--font-encode-sans-condensed), sans-serif" }}
              className="relative text-white hover:text-white/80 transition-colors duration-300"
            >
              {link.name}
              {/* Only show underline if this is the current page */}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}