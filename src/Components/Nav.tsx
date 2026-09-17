import { HiOutlineBars3 } from "react-icons/hi2";
import NavLogo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Mobile Menu */}
        <HiOutlineBars3 className="text-3xl md:hidden" />

        {/* Logo */}
        <img
          src={NavLogo}
          alt="Dev Stack"
          className="w-32"
        />

        {/* Desktop Navigation */}
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

        {/* Authentication */}
        <div className="flex items-center gap-3 font-semibold">
          <button className="px-4 py-2 text-gray-700 hover:text-pink-600 transition">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;