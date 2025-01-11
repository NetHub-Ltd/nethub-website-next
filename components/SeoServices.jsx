"use client";
import React from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

const seoPackages = [
  {
    title: "Basic Package",
    price: "KSh 20,000",
    description: "Perfect for small businesses starting their SEO journey.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Google Analytics Setup",
      "Basic Reporting",
    ],
    icon: <FaLaptopCode className="text-primary text-4xl" />,
  },
  {
    title: "Pro Package",
    price: "KSh 50,000",
    description: "Ideal for growing businesses looking to expand reach.",
    features: [
      "Advanced Keyword Research",
      "On-Page & Technical SEO",
      "Content Optimization",
      "Monthly SEO Reports",
      "Link Building",
    ],
    icon: <FaBriefcase className="text-primary text-4xl" />,
  },
  {
    title: "Premium Package",
    price: "KSh 100,000",
    description:
      "Best for large businesses seeking full SEO dominance and visibility.",
    features: [
      "Comprehensive SEO Audit",
      "Competitor Analysis",
      "Ongoing Content Strategy",
      "Monthly Analytics Review",
      "Advanced Link Building",
      "Priority Support",
    ],
    icon: <FaStar className="text-primary text-4xl" />,
  },
];

const SEOServices = () => {
  return (
    <div className=" min-h-screen py-12 px-2 md:px-6 lg:px-24">
      {/* Header Section */}
      <h1 className="text-4xl font-bold md:text-center text-primary mb-6">
        SEO Services
      </h1>
      <p className="text-lg md:text-center leading-relaxed  max-w-2xl mx-auto mb-12">
        Boost your online visibility and rank higher with expert SEO strategies
        from Nethub. Our data-driven techniques help you reach your audience
        effectively.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {seoPackages.map((packageData, index) => (
          <div
            key={index}
            className="border rounded-lg p-8 shadow-lg hover:shadow-xl duration-300 hover:border-accent hover:scale-105 hover:bg-primary/5 transition-all bg-white"
          >
            <div className="flex items-center gap-4 mb-4">
              {packageData.icon}{" "}
              <h3 className="text-2xl font-semibold text-primary">
                {packageData.title}
              </h3>
            </div>
            <p className="text-xl font-bold mt-2">{packageData.price}</p>
            <p className=" my-4 text-xl">{packageData.description}</p>
            <ul className="text-xl mb-4 text-gray-600 space-y-4">
              {packageData.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 hover:bg-primary/5 transition-all p-2 rounded-lg"
                >
                  <FaCheckCircle className="text-primary text-xl" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
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
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-lg text-gray-700 text-left md:text-center max-w-3xl mx-auto mb-4">
          Our proven strategies are tailored for your business growth. Whether
          you're a startup or an established enterprise, we ensure long-term
          success through our customized SEO services.
        </p>
      </div>
    </div>
  );
};

export default SEOServices;
