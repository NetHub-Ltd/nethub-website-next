import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-4  mx-auto text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand Information */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">NetHub</h2>
            <p className="text-gray-400 mb-4">
              Building the tools you need for growth, innovation, and success.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://web.facebook.com/nethub.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-accent transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-accent transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: support@nethub.co.ke</p>
            <p className="text-gray-400 mb-2">Phone: +254 83 202 527</p>
            <p className="text-gray-400">Address: Nairobi, Kenya</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NetHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
