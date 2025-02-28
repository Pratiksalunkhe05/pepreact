import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown, FaHome, FaInfoCircle, FaPlane, FaBlog } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaInfoCircle /> },
  { name: "Blogs", link: "/blogs", icon: <FaBlog /> },
  { name: "Best Places", link: "/best-places", icon: <FaPlane /> },
];

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg text-black">
        {/* Top bar gradient */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-1 text-center text-sm">
          <p>Explore the world with us! Limited-time travel offers available.</p>
        </div>

        {/* Navbar content */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-12" />
              <span className="font-bold text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Travel Explorer
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavbarLinks.map((item) => (
                  <li key={item.name} className="group relative">
                    <NavLink
                      to={item.link}
                      className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all"
                      activeClassName="active"
                    >
                      {item.icon} {item.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative">
                  <a
                    href="/#home"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all"
                  >
                    Quick Links <FaCaretDown />
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded-lg shadow-lg mt-2">
                    <ul className="p-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            href={data.link}
                            className="block px-4 py-2 hover:bg-gray-200 rounded-lg"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Buttons and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
                onClick={() => handleOrderPopup()}
              >
                Book Now
              </button>
              <div className="md:hidden">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer text-gray-700"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer text-gray-700"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
