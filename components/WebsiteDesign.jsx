"use client";
import React from "react";

const tiers = [
  {
    title: "Basic Plan",
    price: "KSh 15,000",
    description: "Perfect for small businesses starting online.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
    ],
  },
  {
    title: "Pro Plan",
    price: "KSh 35,000",
    description: "Ideal for growing businesses seeking more visibility.",
    features: [
      "Up to 10 Pages",
      "Advanced SEO Setup",
      "E-commerce Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Premium Plan",
    price: "KSh 75,000",
    description: "Best for large businesses needing full custom solutions.",
    features: [
      "Unlimited Pages",
      "Custom UI/UX Design",
      "Priority Support",
      "Full SEO & Analytics Setup",
    ],
  },
];

const digitalShelf = {
  title: "Digital Shelves",
  price: "KSh 50,000",
  description:
    "Expand your digital presence with custom digital shelves for showcasing your products.",
  features: [
    "Custom Product Layout",
    "Product Management System",
    "SEO-Optimized Listings",
    "User-Friendly Design",
  ],
};

const Card = ({ title, price, description, features }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all bg-white">
      <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
      <p className="text-xl font-bold text-gray-900 mt-2">{price}</p>
      <p className="text-gray-700 my-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
        Get Started
      </button>
    </div>
  );
};

const WebsiteDesign = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Website Design Services
      </h1>
      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <Card key={index} {...tier} />
        ))}
      </div>

      {/* Digital Shelves Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Digital Shelves Service
        </h2>
        <div className="max-w-lg mx-auto">
          <Card {...digitalShelf} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
