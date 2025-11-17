"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-950 text-white pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LOGO + ABOUT */}
        <div className="space-y-5">
          <div className="flex items-center gap-6 flex-wrap">
            <img
              src="/images/logoeden.png"
              className="w-28 sm:w-32 object-contain"
              alt="Eden Company"
            />
            <img
              src="/images/Jagmohan-Sing.png"
              className="w-28 sm:w-32 object-contain"
              alt="Jagmohan Singh"
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            We are a trusted immigration consultancy providing transparent, 
            reliable & professional visa support services to clients worldwide.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            Contact Us
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">+1 579 899 5786</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300 break-all">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">
                sardarjagmohansingh2714@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">
                2714 St Clair Ave E Toronto, ON-M4B 1M6 Canada
              </span>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Canada Visa Apply — All Rights Reserved.
      </div>
    </motion.footer>
  );
}
