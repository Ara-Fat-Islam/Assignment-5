import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NavLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <img
              src={NavLogo}
              alt="Dev Stack"
              className="w-32 brightness-0 invert"
            />

            <p className="mt-4 text-sm text-gray-400 leading-6 max-w-sm">
              Build and explore modern development stacks by comparing
              technologies and choosing the tools that fit your projects.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold">Product</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#technologies" className="hover:text-white transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#license" className="hover:text-white transition">
                  License
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;