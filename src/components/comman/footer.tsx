import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white mt-12 mr-52 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/img/logo.svg"
              alt="IrishCafe Logo"
              className="h-14 w-auto ml-4 sm:ml-8 lg:ml-32"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  Drinks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Food
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" className=" transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className=" transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className=" transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="text-center mt-24 ml-64 text-gray-400 text-sm">
          Copyright © 2025 Pub and Bar
        </div>
      </div>
    </footer>
  );
}
