"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/public";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About Kudan", href: "/about" },
    { name: "Government", href: "/government" },
    { name: "Projects", href: "/projects" },
    { name: "Agriculture", href: "/agriculture" },
    { name: "News & Events", href: "/news" },
  ];

  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Kudan Logo"
              width={80}
              height={80}
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation - Enhanced responsive spacing */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm lg:text-base font-semibold text-white relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:transition-all hover:after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Responsive sizing */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-green-700 hover:bg-green-600 text-white text-sm lg:text-base px-6 py-3 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Always visible on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-green-700 h-10 w-10 rounded-md transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced responsive behavior */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-800 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-semibold text-white relative hover:after:absolute hover:after:bottom-2 hover:after:left-4 hover:after:w-[calc(100%-2rem)] hover:after:h-[2px] hover:after:bg-white hover:after:transition-all hover:after:duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-2 bg-green-700 hover:bg-green-600 text-white py-3 text-base font-semibold rounded-md transition-colors duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;