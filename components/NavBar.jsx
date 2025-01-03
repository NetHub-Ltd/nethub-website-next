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
    <nav className="max-w-6xl flex flex-row mx-auto  p-4 h-16 items-center">
      <div></div>
      <div className="flex items-center flex-row gap-1">
        <Link href="/">
          <Image src="/images/logo-v3.svg" width={36} height={36} alt="Logo" />
        </Link>
        <Link href="/" className="text-xl">
          NetHub
        </Link>
      </div>

      {/* links */}
      <div className="hidden md:flex items-center flex-row gap-4 ml-auto">
        {Object.entries(links).map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className="text-xl hover:text-accent transition-colors"
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="md:hidden sm:flex">
        <MobileMenu links={links} />
      </div>

      <div className="hidden md:flex items-center flex-row gap-4 mx-4">
        <Link href="/login">
          <button className="bg-accent text-white rounded-full px-4 py-1 hover:bg-darkGray transition-colors duration-300">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-transparent border border-accent text-accent rounded-full px-4 py-1 hover:bg-accent hover:text-white transition-colors duration-300">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
