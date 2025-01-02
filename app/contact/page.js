import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactCards = () => {
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-16 w-16 text-primary" />,
      title: "Address",
      details: "123 Main Street, City, Country",
    },
    {
      icon: <PhoneIcon className="h-16 w-16 text-primary" />,
      title: "Call Us",
      details: "+2547 83 202 527",
    },
    {
      icon: (
        <ChatBubbleOvalLeftEllipsisIcon className="h-16 w-16 text-primary" />
      ),
      title: "WhatsApp",
      details: "+254 712 345678",
    },
    {
      icon: <EnvelopeIcon className="h-16 w-16 text-primary" />,
      title: "Email",
      details: "support@nethub.com",
    },
  ];

  return (
    <section className="">
      <div className="bg-white h-[200px] mb-6 flex flex-col items-center justify-center">
        <h2 className="text-primary mb-4">Contact US</h2>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi
          illum saepe aut ut!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center border border-slate-200 bg-white p-6 rounded-lg hover:shadow-md hover:border-primary transition-shadow duration-300 ease-in-out"
            >
              <div>{item.icon}</div>
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
              <p className="text-gray-600 mt-2 text-center">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-evenly items-center">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-secondaryText">
            Get in Touch with Nethub
          </h2>
          <form className="w-full md:min-w-1.5 border border-gray-200 p-4  rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white w-full md:w-1/2 text-secondaryText p-4">
          <div className="mb-4">
            <h6 className="text-2xl mb-6 font-bold ">NetHub</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              magnam repellendus praesentium neque temporibus ex maxime qui
              similique assumenda numquam
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-secondaryText">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-primary hover:text-gray-800"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-primary hover:text-gray-800"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-primary hover:text-gray-800"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
