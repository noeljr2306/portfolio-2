import { useState } from "react";
import { navLinks } from "../constants";
import { RiCloseLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const NavItems = () => {
    return (
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className="text-zinc-400 hover:text-white font-poppins max-sm:hover:bg-black/70 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
          >
            <a
              href={href}
              className="text-sm md:text-base hover:text-white transition-colors"
              onClick={() => {}}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto">
          <a href="/" className="text-2xl text-zinc-500 font-semibold">
            Noel Jr.<span className="waving">✌🏾</span>
          </a>
          <button
            onClick={toggleMenu}
            className="text-sky-100 hover:text-white focus:outline-none sm:hidden flex"
          >
            {isOpen ? <RiCloseLine /> : <FaBars />}
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-black-900 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
