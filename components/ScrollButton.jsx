"use client";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine the scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Show or hide the button based on the scroll position
      setIsVisible(currentScrollY > 100);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (scrollDirection === "down") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`fixed right-4 bottom-4 bg-slate-100  p-3 rounded-full shadow-lg transition-transform transform ${
        isVisible ? "scale-100" : "scale-0"
      }`}
      onClick={handleClick}
      aria-label={
        scrollDirection === "down" ? "Scroll to Top" : "Scroll to Bottom"
      }
    >
      {scrollDirection === "down" ? (
        <ChevronUpIcon className="w-10 h-10 md:w-10 md:h-10 text-primary" />
      ) : (
        <ChevronDownIcon className="w-10 h-10 text-primary" />
      )}
    </button>
  );
};

export default ScrollButton;
