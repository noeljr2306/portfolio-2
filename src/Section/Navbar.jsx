import { useState } from "react";
import PropTypes from "prop-types";
import { navLinks } from "../constants";
import { RiCloseLine } from "react-icons/ri";
import { FaBars, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const NavItems = ({ isMobile }) => {
    return (
      <ul
        className={`flex flex-col items-center gap-4 sm:flex-row md:gap-8 relative z-20 ${isMobile ? "w-full" : ""}`}
      >
        {navLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className="text-zinc-400 hover:text-white font-poppins transition-all max-sm:w-full text-center"
          >
            <a
              href={href}
              className="text-sm md:text-base block py-2 max-sm:hover:bg-white/5 max-sm:rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </a>
          </li>
        ))}
        {isMobile && (
          <li className="w-full pt-2">
            <a
              href="https://github.com/noeljr2306"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium text-sm"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        )}
      </ul>
    );
  };

  NavItems.propTypes = {
    isMobile: PropTypes.bool.isRequired,
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-50">
        <div className="bg-black/60 backdrop-blur-xl rounded-full shadow-lg border border-white/10">
          <div className="flex justify-between items-center py-3 px-6">
            <a href="/" className="text-xl md:text-2xl text-white font-bold">
              Noel Jr.<span className="waving ml-1">✌🏾</span>
            </a>

            <nav className="hidden sm:flex items-center">
              <NavItems isMobile={false} />
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/noeljr2306"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all border border-white/10"
              >
                <FaGithub size={20} />
              </a>

              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none sm:hidden p-1"
              >
                {isOpen ? <RiCloseLine size={24} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute left-5 right-5 bg-zinc-900/98 backdrop-blur-2xl transition-all duration-300 ease-in-out overflow-hidden z-[60] mx-auto sm:hidden block rounded-3xl border border-white/10 mt-3 ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="px-6">
          <NavItems isMobile={true} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
