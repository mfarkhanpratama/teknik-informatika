import React from "react";
import { Link } from "react-router-dom";
import { ChevronUpIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  // Array of footer links
  const footerLinks = [
    {
      label: "Products",
      links: [
        { title: "All Products", to: "/products" },
        { title: "Featured", to: "/featured" },
        { title: "New Arrivals", to: "/new-arrivals" },
        { title: "Sale", to: "/sale" },
      ],
    },
    {
      label: "About",
      links: [
        { title: "Company", to: "/company" },
        { title: "Team", to: "/team" },
        { title: "Careers", to: "/careers" },
        { title: "Contact", to: "/contact" },
      ],
    },
    {
      label: "Legal",
      links: [
        { title: "Terms of Service", to: "/terms-of-service" },
        { title: "Privacy Policy", to: "/privacy-policy" },
        { title: "Refund Policy", to: "/refund-policy" },
        { title: "Shipping Policy", to: "/shipping-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col justify-center items-center md:justify-start">
            <Link to="/" className="flex items-center text-white">
              <GlobeAltIcon
                className="h-6 w-6 text-gray-300"
                aria-hidden="true"
              />
              <span className="font-bold ml-2">Your Company</span>
            </Link>
            <div className="flex justify-center mt-8">
              <FiInstagram className="h-6 w-6 text-gray-300 hover:text-white mr-4" />
              <FiFacebook className="h-6 w-6 text-gray-300 hover:text-white mr-4" />
              <FiTwitter className="h-6 w-6 text-gray-300 hover:text-white" />
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <div className="text-white" key={index}>
                  <h3 className="text-sm font-medium">{section.label}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-gray-300 hover:text-white"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-base text-gray-400 md:text-center">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
