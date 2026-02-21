// Allows users to navigate through the site, and displays the site logo

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Dropdown toggle

  const links = [
    { name: "Home", href: "/" },
    { name: "Executive Board", href: "/executive_board" },
    { name: "Events", href: "/events" },
    { name: "Dues & Membership", href: "/dues_and_membership" },
    // { name: "Campus Events", href: "/club_feed" },

  ];

  const resourceLinks = [
    { name: "General Resources", href: "/resources/general_resources" },
    { name: "BIT CMA Resources", href: "/resources/bit_cma_resources" },
    { name: "BIT DSS Resources", href: "/resources/bit_dss_resources" },
    { name: "BIT OSM Resources", href: "/resources/bit_osm_resources" },
  ];

  return (
    <nav className="bg-[#fe9659] py-2 px-4 md:px-8 sticky top-0 z-50">
      {/* MENU FOR DESKTOP LAYOUTS */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="hidden md:flex space-x-6 text-lg sm:text-xl items-center font-normal relative">
          {/* Regular links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
              className="relative text-white hover:text-white/80 transition-colors duration-300"
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white"></span>
              )}
            </Link>
          ))}

          {/* RESOURCES DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="text-white hover:text-[#FDF8E8]/80 transition-colors duration-300 flex items-center"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              Resources{" "}
              <span className="ml-1 text-3xl"> {/* The text-3xl modifies the size of the triangles used in the dropdowns */}
                {isResourcesOpen ? "▾" : "▸"}
              </span>
            </button>

            {/* ACTUAL DROPDOWN MENU */}
            {isResourcesOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-[#FDF8E8] rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseLeave={() => setIsResourcesOpen(false)} // optional: close on hover leave
              >
                {resourceLinks.map((res) => (
                  <Link
                    key={res.href}
                    href={res.href}
                    onClick={() => setIsResourcesOpen(false)} // closes when link clicked
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#fe9659] transition-colors duration-200"
                    style={{
                      fontFamily:
                        "var(--font-encode-sans-condensed), sans-serif",
                    }}
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MENU ICON FOR MOBILE LAYOUTS */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#fe9659] z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-white text-3xl"
        >
          ✕
        </button>

        <div className="flex flex-col pt-20 px-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:text-white/80 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="text-white text-2xl flex items-center hover:text-white/80 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              Resources{" "}
              <span className="ml-1 text-lg">
                {isResourcesOpen ? "▾" : "▸"}
              </span>
            </button>

            {isResourcesOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {resourceLinks.map((res) => (
                  <Link
                    key={res.href}
                    href={res.href}
                    onClick={() => {
                      setIsResourcesOpen(false);
                      setIsOpen(false);
                    }}
                    className="text-white text-xl hover:text-white/80 transition-colors duration-200"
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}