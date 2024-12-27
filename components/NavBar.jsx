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
          <Link className="text-xl" href={"/register"}>
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

// "use client";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import Image from "next/image";
// import MobileMenu from "./MobileMenu";

// const NavBar = () => {
//   const links = {
//     Home: "/",
//     Services: "/services",
//     About: "/about",
//     Contact: "/contact",
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-white h-20 z-50 flex justify-between items-center px-4 md:px-8 shadow-sm">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="w-12 h-12 overflow-hidden">
//           <Image
//             className="px-2"
//             src="./images/logo-v3.svg"
//             alt="NetHubLogo"
//             width={50}
//             height={50}
//           />
//         </div>
//         <Link
//           className="hidden md:block text-xl font-semibold ml-2 text-gray-800"
//           href="/"
//         >
//           Nethub
//         </Link>
//       </div>

//       {/* Links Section */}
//       <div className="hidden md:flex items-center space-x-6">
//         {Object.keys(links).map((link) => (
//           <Link
//             className="text-lg text-gray-700 hover:text-primary transition"
//             href={links[link]}
//             key={link}
//           >
//             {link}
//           </Link>
//         ))}
//         <div className="hidden lg:flex items-center space-x-4">
//           <Link
//             className="text-lg text-white px-4 py-2 rounded-md bg-primary hover:bg-primary-dark transition"
//             href="/login"
//           >
//             Login
//           </Link>
//           <Link
//             className="text-lg text-gray-700 hover:text-primary transition"
//             href="/register"
//           >
//             Signup
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="flex md:hidden items-center">
//         <MobileMenu />
//       </div>
//     </div>
//   );
// };

// export default NavBar;
