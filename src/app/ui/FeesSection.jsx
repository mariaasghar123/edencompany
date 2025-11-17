"use client";

import { motion } from "framer-motion";

export default function FeesSection() {
  const feesData = [
    { title: "Selection Fees", amount: "$21,500" },
    { title: "Job Offer Letter Fees", amount: "$25,000" },
    { title: "Work Permit Fees", amount: "$175,000" },
    { title: "Appointment Fees", amount: "$80,000" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-16 -left-10 w-96 h-96 bg-sky-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-indigo-700 to-gray-900"
        >
          Fees & Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mt-4 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
        >
          Detailed fee structure for visa and work permit processing
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {feesData.map((fee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center cursor-default hover:scale-105 hover:shadow-4xl transition transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{fee.title}</h3>
              <p className="text-indigo-600 font-bold text-xl mt-4">{fee.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
