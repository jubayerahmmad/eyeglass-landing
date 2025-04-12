import { useState } from "react";
import { IoLocationOutline, IoChevronDown, IoClose } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiDownload,
  FiMenu,
} from "react-icons/fi";
import { SlEyeglass } from "react-icons/sl";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="hidden md:block text-xs text-gray-600 bg-gray-200">
        <div className="container mx-auto px-4 py-1 ">
          <div className="flex justify-between items-center">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
                <IoLocationOutline size={20} />
                <span>Find Store</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
                <MdOutlineEmail size={20} />
                <span>admin@trynow.com</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
                <span>English</span>
                <IoChevronDown />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
                <span>USD</span>
                <IoChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="text-3xl font-bold cursor-pointer flex items-center gap-2">
              <span className="">
                <SlEyeglass />
              </span>
              <p>
                <span className="text-gray-800">try</span>
                <span className="text-cyan-500">Now</span>
              </p>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 lg:hidden">
              <div className="flex items-center space-x-3 text-gray-700">
                <FiUser
                  size={20}
                  className="cursor-pointer hover:text-cyan-600"
                />
                <FiHeart
                  size={20}
                  className="cursor-pointer hover:text-cyan-600"
                />
                <div className="relative cursor-pointer hover:text-cyan-600">
                  <FiShoppingBag size={20} />
                </div>
              </div>
              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-cyan-600"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <IoClose size={28} />
                ) : (
                  <FiMenu size={28} />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar*/}
          <div className="w-full flex items-center justify-start border border-gray-300 rounded-md overflow-hidden">
            <button className="bg-gray-800 text-white px-3 md:px-4 py-2 flex items-center space-x-1 text-sm whitespace-nowrap hover:bg-gray-700">
              <span>All Categories</span>
              <IoChevronDown className="ml-1 md:ml-0" />
            </button>
            <input
              type="text"
              placeholder="Search products"
              className="flex-grow p-2 text-sm outline-none"
            />
            <button className="bg-gray-800 text-white px-3 md:px-4 py-2 hover:bg-gray-700">
              <IoSearchOutline size={20} />
            </button>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4 text-gray-700 ">
            <FiUser size={22} className="cursor-pointer hover:text-cyan-600" />
            <FiHeart size={22} className="cursor-pointer hover:text-cyan-600" />
            <div className="relative cursor-pointer hover:text-cyan-600">
              <FiShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="hidden lg:block container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <button className="bg-gray-800 text-white px-5 py-3 rounded-2xl flex items-center space-x-2 hover:bg-gray-700">
            <span>Categories by Brand</span>
            <IoChevronDown />
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 font-medium text-gray-700">
            <a href="#" className="hover:text-cyan-600">
              Home
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-cyan-600"
            >
              <span>Shop</span>
              <IoChevronDown size={14} />
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-cyan-600"
            >
              <span>Eyeglasses</span>
              <IoChevronDown size={14} />
            </a>
            <a href="#" className="hover:text-cyan-600">
              About Us
            </a>
          </nav>

          {/* Download App */}
          <button className="bg-gray-800 text-white px-10 py-4 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl flex items-center space-x-2 text-sm hover:bg-gray-700 cursor-pointer">
            <FiDownload />
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold">Get 50% off on the App</p>
              <p className="text-xs">Download Now</p>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}

      <div
        className={`lg:hidden absolute top-full z-50 left-0 w-full bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-3 text-gray-700">
          {/* Mobile Nav Links */}
          <a href="#" className="hover:text-cyan-600 font-medium">
            Home
          </a>
          <a
            href="#"
            className="flex justify-between items-center hover:text-cyan-600 font-medium"
          >
            <span>Shop</span>
            <IoChevronDown size={16} />
          </a>
          <a
            href="#"
            className="flex justify-between items-center hover:text-cyan-600 font-medium"
          >
            <span>Eyeglasses</span>
            <IoChevronDown size={16} />
          </a>
          <a href="#" className="hover:text-cyan-600 font-medium">
            About Us
          </a>

          <button className="bg-gray-800 text-white w-full px-4 py-2 rounded-md flex items-center justify-center space-x-2 text-sm hover:bg-gray-700">
            <span>Categories by Brand</span>
            <IoChevronDown />
          </button>

          <button className="bg-gray-800 text-white px-10 py-4 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl flex items-center space-x-2 text-sm hover:bg-gray-700 cursor-pointer">
            <FiDownload />
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold">Get 50% off on the App</p>
              <p className="text-xs">Download Now</p>
            </div>
          </button>

          <div className="flex justify-between items-center pt-4 text-sm">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
              <span>English</span>
              <IoChevronDown />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
              <span>USD</span>
              <IoChevronDown />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
