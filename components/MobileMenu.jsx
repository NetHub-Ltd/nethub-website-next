"use client";
import Image from "@node_modules/next/image";

import { useState } from "react";
import {
  Bars3Icon,
  ArrowLeftIcon,
  PhoneArrowUpRightIcon,
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger and Back Arrow Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50 relative">
        {isOpen ? null : <Bars3Icon className="h-8 w-8" />}
      </button>

      {/* Sliding Full-Height Menu */}
      <div
        className={`fixed top-0 left-0 w-[80%] h-screen bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex bg-slate-50 h-[80px] p-4 justify-between items-center">
          <h1 className="text-primary font-bold text-2xl">NetHub</h1>
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="fixed right-2 top-4 h-8 w-8 text-gray-800"
          />
        </div>
        <nav className="flex flex-col h-full p-6 space-y-4">
          <a
            href="/"
            className="flex items-center gap-2 py-3 text-xl focus:text-primary focus:px-2 transition-all active:text-accent hover:bg-gray-50"
          >
            <HomeIcon className="h-6 w-6" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-3 text-xl focus:text-primary focus:px-2 transition-all active:text-accent hover:bg-gray-50"
          >
            <InformationCircleIcon className="h-6 w-6" />
            About
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-3 text-xl focus:text-primary focus:px-2 transition-all active:text-accent hover:bg-gray-50"
          >
            <CogIcon className="h-6 w-6" />
            Services
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-3 text-xl focus:text-primary focus:px-2 transition-all active:text-accent hover:bg-gray-50"
          >
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
            Contact
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-3 text-xl focus:text-primary focus:px-2 transition-all active:text-accent hover:bg-gray-50"
          >
            <QuestionMarkCircleIcon className="h-6 w-6" />
            FAQs
          </a>
        </nav>
      </div>

      {/* Overlay to close the menu when clicked outside */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default MobileMenu;
