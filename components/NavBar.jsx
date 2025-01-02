"use client";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ensure this is imported correctly
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const links = {
    Home: "/",
    Services: "/services",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 h-[80px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-8 h-8 overflow-hidden">
            <Image
              src="./images/logo-v3.svg"
              alt="NetHub Logo"
              width={48}
              height={48}
            />
          </div>
          <Link
            href="/"
            className="text-2xl  hidden md:block ml-2 hover:text-blue-500 transition"
          >
            Nethub
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {Object.keys(links).map((link) => (
            <Link
              href={links[link]}
              key={link}
              className="text-xl hover:text-accent transition-all duration-300 focus:text-primary"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden lg:flex flex-row justify-between items-center gap-4">
          <Link
            className="bg-accent  text-xl px-4 p-1 rounded-full text-white hover:bg-transparent hover:text-accent transition-all duration-300 ease-out"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="border border-accent bg-transparent text-accent px-4 py-1 rounded-full hover:text-white hover:bg-accent transition-all duration-300 ease-out"
            href={"/register"}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
