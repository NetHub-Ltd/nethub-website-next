// "use client";
// import React from "react";

// const appPackages = [
//   {
//     title: "Startup Package",
//     price: "KSh 30,000",
//     description: "Ideal for small businesses or MVP development.",
//     features: [
//       "Cross-Platform Compatibility",
//       "Basic UI/UX Design",
//       "Essential Features Only",
//       "2 Revisions Included",
//     ],
//   },
//   {
//     title: "Growth Package",
//     price: "KSh 80,000",
//     description:
//       "Designed for growing businesses needing advanced functionalities.",
//     features: [
//       "Custom UI/UX Design",
//       "API Integrations",
//       "User Authentication",
//       "SEO-Optimized Web Apps",
//       "3 Revisions Included",
//     ],
//   },
//   {
//     title: "Enterprise Package",
//     price: "KSh 150,000",
//     description:
//       "Complete app development with enterprise-level features and support.",
//     features: [
//       "Advanced Custom Development",
//       "Scalable Backend",
//       "Full API Integration",
//       "Continuous Maintenance & Support",
//       "Priority Support",
//       "Unlimited Revisions",
//     ],
//   },
// ];

// const AppDevelopmentServices = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
//       {/* Header Section */}
//       <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
//         App Development Services
//       </h1>
//       <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
//         Transform your ideas into powerful digital solutions with Nethub's
//         expert app development services. Designed to help you grow and succeed.
//       </p>

//       {/* Cards Section */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {appPackages.map((packageData, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all bg-white"
//           >
//             <h3 className="text-2xl font-semibold text-green-700">
//               {packageData.title}
//             </h3>
//             <p className="text-xl font-bold text-gray-900 mt-2">
//               {packageData.price}
//             </p>
//             <p className="text-gray-700 my-4">{packageData.description}</p>
//             <ul className="text-sm text-gray-600 space-y-2">
//               {packageData.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
//               Get Started
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="mt-16 text-center">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//           Why Choose Nethub?
//         </h2>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
//           Our expert developers build scalable and high-performing apps that
//           empower businesses to reach their full potential. We ensure
//           user-centered design and modern technology solutions for lasting
//           impact.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AppDevelopmentServices;

"use client";
import React from "react";
import {
  AiOutlineMobile,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { BiBrush } from "react-icons/bi";
import { FiPlug } from "react-icons/fi";
import { RiServerLine, RiCustomerService2Line } from "react-icons/ri";

const appPackages = [
  {
    title: "Startup Package",
    price: "KSh 30,000",
    description: "Ideal for small businesses or MVP development.",
    features: [
      { text: "Cross-Platform Compatibility", icon: <AiOutlineMobile /> },
      { text: "Basic UI/UX Design", icon: <BiBrush /> },
      { text: "Essential Features Only", icon: <FiPlug /> },
      { text: "2 Revisions Included", icon: <AiOutlineStar /> },
    ],
  },
  {
    title: "Growth Package",
    price: "KSh 80,000",
    description:
      "Designed for growing businesses needing advanced functionalities.",
    features: [
      { text: "Custom UI/UX Design", icon: <BiBrush /> },
      { text: "API Integrations", icon: <FiPlug /> },
      { text: "User Authentication", icon: <RiServerLine /> },
      { text: "SEO-Optimized Web Apps", icon: <AiOutlineSearch /> },
      { text: "3 Revisions Included", icon: <AiOutlineStar /> },
    ],
  },
  {
    title: "Enterprise Package",
    price: "KSh 150,000",
    description:
      "Complete app development with enterprise-level features and support.",
    features: [
      { text: "Advanced Custom Development", icon: <RiServerLine /> },
      { text: "Scalable Backend", icon: <RiServerLine /> },
      { text: "Full API Integration", icon: <FiPlug /> },
      {
        text: "Continuous Maintenance & Support",
        icon: <RiCustomerService2Line />,
      },
      { text: "Priority Support", icon: <AiOutlineStar /> },
      { text: "Unlimited Revisions", icon: <AiOutlineStar /> },
    ],
  },
];

const AppDevelopmentServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        App Development Services
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Transform your ideas into powerful digital solutions with Nethub's
        expert app development services. Designed to help you grow and succeed.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {appPackages.map((packageData, index) => (
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
                  <span className="text-green-700">{feature.icon}</span>{" "}
                  {feature.text}
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
