"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative floating blurred shapes */}
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-sky-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-indigo-700 to-gray-900"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-gray-600 mt-4 text-lg max-w-xl mx-auto"
        >
          We are always here to help you with your immigration journey.
        </motion.p>

        {/* Contact Box Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              id: "phone",
              icon: <Phone className="mx-auto w-14 h-14 text-sky-600 drop-shadow-lg" />,
              title: "Phone",
              info: "+15798995786",
            },
            {
              id: "email",
              icon: <Mail className="mx-auto w-14 h-14 text-sky-600 drop-shadow-lg" />,
              title: "Email",
              info: "sardarjagmohansingh2714@gmail.com",
            },
            {
              id: "address",
              icon: <MapPin className="mx-auto w-14 h-14 text-sky-600 drop-shadow-lg" />,
              title: "Address",
              info: "2714 St Clair Ave E Toronto, ON-M4B 1M6 Canada",
            },
          ].map(({ id, icon, title, info }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * parseInt(id, 10) }}
              className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center cursor-pointer hover:shadow-4xl hover:scale-[1.05] transition transform duration-300"
            >
              {icon}
              <h3 className="text-2xl font-semibold mt-6 text-gray-900">{title}</h3>
              <p className="text-gray-700 mt-3">{info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
