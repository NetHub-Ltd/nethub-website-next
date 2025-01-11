"use client";
import React from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

const tiers = [
  {
    title: "Basic Plan",
    price: "KSh 8,000",
    description: "Perfect for small businesses starting online.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
    ],
    icon: <FaLaptopCode className="text-primary text-4xl" />,
  },
  {
    title: "Pro Plan",
    price: "KSh 20,000",
    description: "Ideal for growing businesses seeking more visibility.",
    features: [
      "Up to 10 Pages",
      "Advanced SEO Setup",
      "E-commerce Integration",
      "Performance Optimization",
    ],
    icon: <FaBriefcase className="text-primary text-4xl" />,
  },
  {
    title: "Premium Plan",
    price: "KSh 50,000",
    description: "Best for large businesses needing full custom solutions.",
    features: [
      "Unlimited Pages",
      "Custom UI/UX Design",
      "Priority Support",
      "Full SEO & Analytics Setup",
    ],
    icon: <FaStar className="text-primary text-4xl" />,
  },
];

const Card = ({ title, price, description, features, icon }) => (
  <div className="border rounded-lg p-8 shadow-lg hover:bg-primary/5 hover:border-accent hover:scale-105 transition-all duration-300  hover:shadow-xl bg-white">
    <div className="flex items-center gap-4 mb-4">
      {icon} <h3 className="text-2xl font-semibold text-primary">{title}</h3>
    </div>
    <p className="text-xl font-bold mt-2">{price}</p>
    <p className="my-4 text-xl">{description}</p>
    <ul className="text-sm space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex hover:bg-accent/5   gap-2">
          <FaCheckCircle className="flex text-2xl mb-4  items-center  text-primary" />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full bg-accent text-white py-2 rounded hover:bg-blue-700 transition-all">
      Get Started
    </button>
  </div>
);

const WebsiteDesign = () => (
  <div className="min-h-screen py-12 px-2 lg:px-24">
    <h1 className="text-4xl font-bold text-center text-primary mb-6">
      Website Design Services
    </h1>
    <p className="text-lg text-center text-secondaryText max-w-2xl mx-auto mb-12">
      We offer a variety of website design packages tailored to suit businesses
      of all sizes. Choose a plan that best fits your needs and establish a
      strong online presence today.
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card key={index} {...tier} />
      ))}
    </div>
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Why Choose Nethub?
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
        At Nethub, we prioritize your business success. Our services are
        tailored to meet your needs, with a focus on customer satisfaction,
        scalability, and security. Let’s work together to bring your business
        vision to life.
      </p>
    </div>
  </div>
);

export default WebsiteDesign;
