"use client";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ensure this is imported correctly
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import {
  HStack,
  Box,
  Text,
  Icon,
  Center,
  Flex,
  Link as chakraLink,
} from "@chakra-ui/react";

const NavBar = () => {
  const links = {
    Home: "/",
    Services: "/services",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <Flex
      p={2}
      boxShadow={"md"}
      bg={"white"}
      justify={"space-between"}
      direction={"row"}
      h={"80px"}
      pos={"fixed"}
      width={"100%"}
      zIndex={1000}
    >
      <Flex direction={"row"} alignItems={"center"}>
        <div className="w-[50] h-[50] overflow-hidden">
          <Image
            className="px-2"
            src="./images/logo-v3.svg"
            alt="NetHubLogo"
            width={50}
            height={50}
          />
        </div>
        <Link className="text-xl hidden md:block link-style" href="/">
          Nethub
        </Link>
      </Flex>

      {/* links */}
      <Flex
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        alignItems={"center"}
        gap={4}
      >
        {Object.keys(links).map((link) => (
          <Link className="text-xl link-style" href={links[link]} key={link}>
            {link}
          </Link>
        ))}
        <div className="hidden lg:flex gap-4">
          <Link
            className="text-xl text-white px-4 rounded-md bg-primary"
            href={"/login"}
          >
            Login
          </Link>
          <Link className="text-xl" href={"/signup"}>
            Signup
          </Link>
        </div>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} alignItems={"center"}>
        <MobileMenu />
      </Flex>
    </Flex>
  );
};

export default NavBar;
