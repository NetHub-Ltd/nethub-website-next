// "use client";
// import React from "react";

// const mpesaPackages = [
//   {
//     title: "Basic Integration",
//     price: "KSh 5,000",
//     description: "Simple MPesa payment integration for small businesses.",
//     features: [
//       "Lipa Na MPesa Integration",
//       "Basic API Setup",
//       "Transaction Notifications",
//       "1 Revision Included",
//     ],
//   },
//   {
//     title: "Standard Integration",
//     price: "KSh 10,000",
//     description:
//       "Advanced MPesa integration for growing businesses needing callback support.",
//     features: [
//       "Lipa Na MPesa + STK Push",
//       "Callback URL Handling",
//       "Payment Reconciliation",
//       "3 Revisions Included",
//     ],
//   },
//   {
//     title: "Enterprise Integration",
//     price: "KSh 20,000",
//     description:
//       "Full MPesa integration with automation, scalability, and advanced security features.",
//     features: [
//       "Custom MPesa API Integration",
//       "Automated Payment Confirmations",
//       "Advanced Error Handling",
//       "Priority Support",
//       "Unlimited Revisions",
//     ],
//   },
// ];

// const MpesaIntegrationServices = () => {
//   return (
//     <div className=" min-h-screen py-12 px-6 lg:px-24">
//       {/* Header Section */}
//       <h1 className="text-4xl font-bold text-center text-primary mb-6">
//         MPesa Integration Services
//       </h1>
//       <p className="text-lg text-center text-secondaryText max-w-2xl mx-auto mb-12">
//         Secure and efficient MPesa integration to simplify payments and
//         streamline your business operations with Nethub's expert services.
//       </p>

//       {/* Cards Section */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {mpesaPackages.map((packageData, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all bg-white"
//           >
//             <h3 className="text-2xl font-semibold text-primary">
//               {packageData.title}
//             </h3>
//             <p className="text-xl font-bold text-secondaryText mt-2">
//               {packageData.price}
//             </p>
//             <p className=" my-4">{packageData.description}</p>
//             <ul className="text-sm  space-y-2">
//               {packageData.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-6 w-full bg-accent text-white py-2 rounded hover:bg-blue-700 transition-all">
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
//           Trust Nethub for secure and seamless MPesa integration. Our
//           professional team ensures a smooth payment experience with robust
//           technology and excellent support.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MpesaIntegrationServices;

"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const mpesaPackages = [
  {
    title: "Basic Integration",
    price: "KSh 5,000",
    description: "Simple MPesa payment integration for small businesses.",
    features: [
      "Lipa Na MPesa Integration",
      "Basic API Setup",
      "Transaction Notifications",
      "1 Revision Included",
    ],
  },
  {
    title: "Standard Integration",
    price: "KSh 10,000",
    description:
      "Advanced MPesa integration for growing businesses needing callback support.",
    features: [
      "Lipa Na MPesa + STK Push",
      "Callback URL Handling",
      "Payment Reconciliation",
      "3 Revisions Included",
    ],
  },
  {
    title: "Enterprise Integration",
    price: "KSh 20,000",
    description:
      "Full MPesa integration with automation, scalability, and advanced security features.",
    features: [
      "Custom MPesa API Integration",
      "Automated Payment Confirmations",
      "Advanced Error Handling",
      "Priority Support",
      "Unlimited Revisions",
    ],
  },
];

const MpesaIntegrationServices = () => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-24">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        MPesa Integration Services
      </h1>
      <p className="text-lg text-center text-secondaryText max-w-2xl mx-auto mb-12">
        Secure and efficient MPesa integration to simplify payments and
        streamline your business operations with Nethub's expert services.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {mpesaPackages.map((packageData, index) => (
          <div
            key={index}
            className="border rounded-lg p-8 hover:border-accent hover:scale-105 hover:bg-primary/5 duration-300 shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <h3 className="text-2xl font-semibold text-primary">
              {packageData.title}
            </h3>
            <p className="text-xl font-bold  mt-2">{packageData.price}</p>
            <p className="my-4 text-xl">{packageData.description}</p>
            <ul className="text-xl space-y-4">
              {packageData.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 hover:bg-primary-light transition-all p-2 rounded-lg"
                >
                  <FaCheckCircle className="text-primary text-xl" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-accent text-white py-2 rounded hover:bg-blue-700 transition-all">
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
          Trust Nethub for secure and seamless MPesa integration. Our
          professional team ensures a smooth payment experience with robust
          technology and excellent support.
        </p>
      </div>
    </div>
  );
};

export default MpesaIntegrationServices;
