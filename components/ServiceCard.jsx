"use client";

const ServiceCard = ({ title, price, description, features, seo }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      {/* Service Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Service Price */}
      <p className="text-lg font-bold text-green-700 mb-4">{price}</p>

      {/* Service Description */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features List */}
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="text-sm">
            {feature}
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <a
          href={seo.ogUrl}
          className="inline-block py-2 px-6 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
