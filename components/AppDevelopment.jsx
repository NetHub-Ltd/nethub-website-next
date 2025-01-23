"use client";
import React from "react";
import {
  FiCode,
  FiMonitor,
  FiUsers,
  FiGlobe,
  FiCloud,
  FiCheckCircle,
} from "react-icons/fi";

import { FaCheckCircle } from "@node_modules/react-icons/fa";

const appPackages = [
  {
    title: "Startup Plan",
    price: "KSh 30,000",
    description: "Ideal for small businesses or MVP development.",
    features: [
      { text: "Cross-Platform Compatibility", icon: <FiMonitor /> },
      { text: "Basic UI/UX Design", icon: <FiCode /> },
      { text: "Essential Features Only", icon: <FiCheckCircle /> },
      { text: "2 Revisions Included", icon: <FiUsers /> },
    ],
  },
  {
    title: "Growth Package",
    price: "KSh 80,000",
    description:
      "Designed for growing businesses needing advanced functionalities.",
    features: [
      { text: "Custom UI/UX Design", icon: <FiCode /> },
      { text: "API Integrations", icon: <FiCloud /> },
      { text: "User Authentication", icon: <FiUsers /> },
      { text: "SEO-Optimized Web Apps", icon: <FiGlobe /> },
      { text: "3 Revisions Included", icon: <FiUsers /> },
    ],
  },
  {
    title: "Enterprise Package",
    price: "KSh 150,000",
    description:
      "Complete app development with enterprise-level features and support.",
    features: [
      { text: "Advanced Custom Development", icon: <FiCode /> },
      { text: "Scalable Backend", icon: <FiCloud /> },
      { text: "Full API Integration", icon: <FiMonitor /> },
      { text: "Continuous Maintenance & Support", icon: <FiUsers /> },
      { text: "Priority Support", icon: <FiUsers /> },
      { text: "Unlimited Revisions", icon: <FiCheckCircle /> },
    ],
  },
];

const AppDevelopmentServices = () => {
  return (
    <div className="min-h-screen py-12 px-2 md:px-4 lg:px-24">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        App Development Services
      </h1>
      <p className="text-xl md:text-center leading-relaxed max-w-2xl mx-auto mb-12">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Transform your ideas into powerful digital solutions with Nethub's
        expert app development services. Designed to help you grow and succeed.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {appPackages.map((packageData, index) => (
          <div
            key={index}
            className="border hover:border-accent hover:bg-primary/5 duration-300 rounded-lg p-8  shadow-lg hover:shadow-xl transition-all transform hover:scale-105 bg-white"
          >
            <h3 className="text-2xl mb-4 font-semibold text-primary">
              {packageData.title}
            </h3>
            <p className="text-2xl font-bold mb-4">{packageData.price}</p>
            <p className="mb-4 text-xl leading-relaxed">
              {packageData.description}
            </p>
            <ul className="text-xl mb-4 space-y-4">
              {packageData.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary text-xl pr-2">
                    {<FaCheckCircle />}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <button
              aria-label={`Get Started with ${packageData.title}`}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Why Choose Nethub?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          Our expert developers build scalable and high-performing apps that
          empower businesses to reach their full potential. We ensure
          user-centered design and modern technology solutions for lasting
          impact.
        </p>
      </div>
    </div>
  );
};

export default AppDevelopmentServices;
