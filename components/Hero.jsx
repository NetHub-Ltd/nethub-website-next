import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  // The 5 sets of texts and subtexts
  const textSets = [
    {
      mainText: "Welcome to NetHub",
      subText: "Where Innovation Meets Design",
    },
    {
      mainText: "Exceptional Web Development",
      subText: "We create digital experiences that drive growth.",
    },
    {
      mainText: "App Development at Its Best",
      subText: "Innovative, scalable solutions to empower your business.",
    },
    {
      mainText: "SEO Services That Work",
      subText: "Let us help you grow your visibility and reach online.",
    },
    {
      mainText: "MPesa Integration Made Simple",
      subText: "Secure and seamless payment solutions for your business.",
    },
  ];

  // State to manage which text set is being displayed
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    // Change the text set every 8 seconds (5 seconds for text, 3 seconds delay to read)
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % textSets.length);
    }, 9000); // 8 seconds: 5 seconds for typing and 3 seconds of pause after

    // Clear the interval on component unmount
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate the typing speed for the text
  const calculateSpeed = (text) => {
    const baseSpeed = 60; // Base typing speed in milliseconds per character
    const lengthFactor = 5; // Adjust this factor for how quickly you want the text to type
    const timeToType = text.length * lengthFactor;
    return Math.max(baseSpeed, timeToType);
  };

  const mainTextSpeed = calculateSpeed(textSets[currentSet].mainText);
  const subTextSpeed = calculateSpeed(textSets[currentSet].subText);

  return (
    <div className="flex flex-col justify-center p-2 h-[200px]">
      {" "}
      {/* Fixed height for consistency */}
      {/* Main Text Animation */}
      <h1 className="font-bold text-primary mb-4">
        <Typewriter
          options={{
            strings: [textSets[currentSet].mainText],
            autoStart: true,
            loop: false,
            delay: mainTextSpeed, // Main text speed based on text length
          }}
        />
      </h1>
      {/* Subtext Animation */}
      <h4 className="text-gray-600">
        <Typewriter
          options={{
            strings: [textSets[currentSet].subText],
            autoStart: true,
            loop: false,
            delay: mainTextSpeed, // Set subtext delay to match main text speed
          }}
        />
      </h4>
    </div>
  );
};

export default Hero;
