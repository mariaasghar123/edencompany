"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaUserTie, FaBuilding, FaExclamationTriangle } from "react-icons/fa";


export default function PersonTribute() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className=" mx-auto px-6 lg:px-8">
        
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-gray-100"
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/picperson.jpg"
              alt="Late Sardar Jagmohan Singh"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            
            {/* SMALL TITLE */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-widest text-sky-600 uppercase"
            >
              <FaShieldAlt size={18} />
              A Tribute to a Legend
            </motion.h2>

            {/* NAME */}
             <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-sky-700 to-gray-700 bg-clip-text text-transparent leading-tight"
            >
               Sardar Jagmohan Singh
            </motion.h3>

            {/* MAIN PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-gray-700 text-lg leading-relaxed mt-4"
            >
              <span className="font-semibold text-sky-700">Born on December 8, 1980</span>, Sardar Jagmohan Singh was a remarkable individual who left a lasting impact on people from all walks of life. with his warm and soulful nature, sardar jagmohan singh touched the hearts of millions worldwide. his legacy of trust and reliability continues to inspire, especially in canada, where he made significant contributions through his work.
            </motion.p>

            {/* COMPANY TITLE + ICON */}
            <motion.h4
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xl font-bold text-gray-900 flex items-center gap-2 mt-5"
            >
              <FaBuilding size={22} className="text-indigo-400" />
              Eden Company Canada
            </motion.h4>


            {/* DETAILS */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              As a <strong className="text-gray-900">Senior Supervisor</strong>, at eden company, sardar jagmohan singh played a key role in various projects, particularly in canada. his leadership in overseeing construction work and managing food packing services helped elevate his reputation as a dedicated and skilled professional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              Today, people often search for sardar jagmohan singh's company in canada or seek to contact him for professional inquiries, including his whatsapp number and contact details.
            </motion.p>
          </div>
        </motion.div>

        {/* WARNING BOX */}
         {/* Warning Alert */}
        
      </div>
    </section>
  );
}
