"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type LinkProps = {
  url: string;
  text: string;
  externalLink: boolean;
};

const Header = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/navigation-links");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const navLinks = await response.json();
      setNavLinks(navLinks?.data.links);
    };
    getData();
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-orange-600 text-white py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Brand Name - Left */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white-400">Who Cooks 🍽</h1>
          </Link>
        </div>

        {/* Desktop Menu - Center */}

        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          {navLinks?.map((link: LinkProps, index) => (
            <Link
              key={index}
              href={link?.url}
              target={link.externalLink ? "_blank" : ""}
              className="text-lg hover:text-green-400 transition duration-300"
            >
              {link?.text}
            </Link>
          ))}
        </nav>

        {/* Logo/Action Button - Right */}
        <div className="flex items-center hidden md:block">
          {/* Login Button with Outline */}
          <button className="px-4 py-2 border-2 border-yellow-500 rounded-md text-white-500 hover:bg-yellow-500 hover:text-white transition duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Button - Hamburger SVG */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {/* Hamburger SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-orange-700 text-white mt-4 space-y-4 px-6 py-4">
          {navLinks?.map((link: LinkProps, index) => (
            <Link
              key={index}
              href={link?.url}
              target={link.externalLink ? "_blank" : ""}
              className="block text-lg hover:text-green-400"
            >
              {link?.text}
            </Link>
          ))}

          {/* Login Button inside Mobile Menu with Outline */}
          <button className="w-full px-4 py-2 border-2 border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
