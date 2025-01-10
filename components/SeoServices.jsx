"use client";
import React from "react";

const seoPackages = [
  {
    title: "Basic SEO Package",
    price: "KSh 20,000",
    description: "Perfect for small businesses starting their SEO journey.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Google Analytics Setup",
      "Basic Reporting",
    ],
  },
  {
    title: "Pro SEO Package",
    price: "KSh 50,000",
    description: "Ideal for growing businesses looking to expand reach.",
    features: [
      "Advanced Keyword Research",
      "On-Page & Technical SEO",
      "Content Optimization",
      "Monthly SEO Reports",
      "Link Building",
    ],
  },
  {
    title: "Premium SEO Package",
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
  },
];

const SEOServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        SEO Services
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Boost your online visibility and rank higher with expert SEO strategies
        from Nethub. Our data-driven techniques help you reach your audience
        effectively.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {seoPackages.map((packageData, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <h3 className="text-2xl font-semibold text-green-700">
              {packageData.title}
            </h3>
            <p className="text-xl font-bold text-gray-900 mt-2">
              {packageData.price}
            </p>
            <p className="text-gray-700 my-4">{packageData.description}</p>
            <ul className="text-sm text-gray-600 space-y-2">
              {packageData.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  ✅ {feature}
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
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          Our proven strategies are tailored for your business growth. Whether
          you're a startup or an established enterprise, we ensure long-term
          success through our customized SEO services.
        </p>
      </div>
    </div>
  );
};

export default SEOServices;
