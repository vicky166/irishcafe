import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <img
              src="/img/logo.svg"
              alt="IrishCafe Logo"
              className="h-14 w-auto"
            />
          </Link>

          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap items-center gap-6 justify-center">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/drinks"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/food"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-20 md:ml-32 text-center text-gray-400 text-sm">
          <p>Copyright © 2025 Pub and Bar </p>
        </div>
      </div>
    </footer>
  );
}
