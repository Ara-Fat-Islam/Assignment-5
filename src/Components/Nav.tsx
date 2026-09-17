import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import NavLogo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>

        <img
          src={NavLogo}
          alt="Dev Stack"
          className="w-32"
        />

        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li>
            <a href="#" className="text-pink-600">
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-3 font-semibold">
          <button className="px-3 md:px-4 py-2 text-gray-700 hover:text-pink-600 transition">
            Sign In
          </button>

          <button className="px-4 md:px-5 py-2 rounded-full text-white brand-gradient hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 px-6 py-4 space-y-4 font-semibold bg-white">
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-pink-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;