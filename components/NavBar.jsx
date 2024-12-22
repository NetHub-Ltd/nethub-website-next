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
        <Image
          className="px-2"
          src="./images/logo-v3.svg"
          alt="NetHubLogo"
          width={50}
          height={50}
        />
        <h1 className="hidden md:block font-bold text-2xl">NetHub</h1>
      </Flex>

      {/* links */}
      <Flex
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        alignItems={"center"}
        gap={4}
      >
        {Object.keys(links).map((link) => (
          <Link
            className="text-2xl hover:text-accent"
            href={links[link]}
            key={link}
          >
            <Text>{link}</Text>
          </Link>
        ))}

        <a href="#">Hire Now</a>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} alignItems={"center"}>
        <MobileMenu />
      </Flex>
    </Flex>
  );
};

export default NavBar;
