"use client";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ title, description, features, link, icon: Icon }) => {
  return (
    <div
      className="group bg-white p-8 rounded-xl shadow-md border border-gray-200 
                    hover:shadow-2xl transition-all duration-300 transform hover:scale-105 
                    relative overflow-hidden"
    >
      {/* Icon Section */}
      <div className="flex justify-center items-center mb-4">
        <Icon className="text-4xl text-green-600" />
      </div>

      {/* Title Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Description Section */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features List */}
      <ul className="space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <FaCheckCircle className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      {link && (
        <div className="mt-6 text-center">
          <a
            href={link}
            className="inline-block py-3 px-6 bg-green-600 text-white rounded-lg 
                       hover:bg-green-700 transition duration-200"
          >
            Learn More
          </a>
        </div>
      )}

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 blur-2xl z-[-1]"
      ></div>
    </div>
  );
};

export default Card;
