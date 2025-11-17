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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-2xl shadow-lg relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-800">
                Important Security Notice
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-red-700 leading-relaxed text-lg font-medium">
                Beware of scammers using my name for fraudulent activities
              </p>
              
              <div className="bg-white/50 p-4 rounded-xl border border-red-200">
                <p className="text-red-600 leading-relaxed">
                  Recently, it has come to our attention that some individuals are fraudulently using 
                  Sardar Jagmohan Singh's name to deceive people with false promises of Canada visas or 
                  job offers. If anyone contacts you claiming to be him and demands money for a visa or 
                  job, please be aware that these are scams.
                </p>
              </div>

              <div className="flex items-center gap-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Never share personal information</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Never transfer money to unknown persons</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Verify all job offers through official channels</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
