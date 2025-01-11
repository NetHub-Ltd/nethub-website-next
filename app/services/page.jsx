"use client";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import CustomServiceRequest from "@components/CustomService";
import Link from "@node_modules/next/link";

const Services = () => {
  const services = [
    {
      title: "Website Design",
      description:
        "We offer professional website design services that capture your brand's essence and create a stunning online presence.",
      features: [
        "Responsive Design",
        "Custom Designs",
        "SEO Optimized",
        "User-Centric UI/UX",
      ],
      link: "/services/website-design",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website's visibility with our expert SEO services that help you rank higher on search engines.",
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Content Optimization",
      ],
      link: "/services/seo-services",
    },
    {
      title: "App Development",
      description:
        "We build custom mobile and web applications tailored to your business needs, enhancing your operational efficiency.",
      features: [
        "Custom App Development",
        "Cross-Platform Support",
        "Scalable Solutions",
        "API Integration",
      ],
      link: "/services/app-development",
    },
    {
      title: "MPesa Integration",
      description:
        "Seamlessly integrate MPesa into your website or app for secure, fast payments and efficient transactions.",
      features: [
        "Lipa Na MPesa Integration",
        "Payment Gateway Setup",
        "Secure Transactions",
        "Quick Setup",
      ],
      link: "/services/mpesa-integration",
    },
    {
      title: "Custom Service",
      description:
        "Need something unique? Request a fully customized service tailored specifically for your business needs.",
      features: [
        "Flexible Solutions",
        "Expert Consultation",
        "Custom Pricing",
        "Business-Oriented",
      ],
      link: "#custom-service-request",
      custom: true,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 lg:px-8 bg-background">
      {/* Hero Section */}
      <div className="md:text-center mb-12 bg-primary/5 p-8 ">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Our Professional Services
        </h1>
        <p className="text-lg text-secondaryText leadding-relaxed max-w-2xl mx-auto">
          At Nethub, we provide top-tier digital solutions that help businesses
          grow online. Explore our range of services designed to boost your
          presence and operations.
        </p>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-102 hover:shadow-md hover:border-accent ${
              service.custom
                ? "bg-gradient-to-br from-purple-50 to-blue-100"
                : ""
            }`}
          >
            {/* Card Content */}
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
              {service.custom ? (
                <FaPlusCircle className="text-4xl text-primary" />
              ) : (
                <FaCheckCircle className="text-4xl text-primary" />
              )}
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 text-lg"
                >
                  <FaCheckCircle className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-auto relative z-10">
              <Link
                href={service.link}
                className={`inline-block w-full text-center cursor-pointer py-3 px-6 rounded-lg text-white text-lg font-semibold transition duration-300 ${
                  service.custom
                    ? "bg-primary hover:bg-blue-700"
                    : "bg-accent hover:bg-blue-700"
                }`}
              >
                {service.custom ? "Request Custom Service" : "Learn More"}
              </Link>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 bg-primary/5 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Why Choose Nethub?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Nethub, we prioritize your business success. Our services are
          tailored to meet your needs, with a focus on customer satisfaction,
          scalability, and security. Let’s work together to bring your business
          vision to life.
        </p>
      </div>
    </div>
  );
};

export default Services;
