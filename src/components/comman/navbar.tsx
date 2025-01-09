"use client";
import { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/img/logo.svg"
            alt="IrishCafe Logo"
            className="h-8 w-auto ml-4 sm:ml-8 lg:ml-32"
          />
        </Link>

        <nav className="hidden md:flex ml-8">
          <ul className="flex space-x-2">
            {["Home", "About", "Drinks", "Food", "Store", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"  // Home links to the homepage
                      : item === "Drinks"
                      ? "/drinks"
                      : item === "About"
                      ? "/about"
                      : item === "Store"
                      ? "/store"
                      : item === "Contact"
                      ? "/contact"  // Contact links to the contact page
                      : "#"
                  }
                  className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto mr-4 sm:mr-8 lg:mr-32 hidden md:block">
          <button
            className="w-full sm:w-auto bg-[#18C67E] hover:bg-emerald-600 text-white font-medium px-6 py-2 text-md rounded-md transition-colors duration-200 uppercase tracking-wide"
          >
            Order Online
          </button>
        </div>

        <div className="ml-auto md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md md:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {["Home", "About", "Drinks", "Food", "Store", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"  // Home links to the homepage
                      : item === "Drinks"
                      ? "/drinks"
                      : item === "About"
                      ? "/about"
                      : item === "Store"
                      ? "/store"
                      : item === "Contact"
                      ? "/contact"  // Contact links to the contact page
                      : "#"
                  }
                  className="block rounded-md px-4 py-2 text-sm font-medium text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="block text-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition"
              >
                ORDER ONLINE
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
