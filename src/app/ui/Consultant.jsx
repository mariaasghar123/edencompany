"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Users } from "lucide-react";

export default function Consultant() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-gray-100 relative overflow-hidden">
      {/* Floating blurred shapes for modern feel */}
      <div className="absolute top-[-4rem] left-0 w-96 h-96 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-2rem] right-[-2rem] w-56 h-56 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="space-y-8 rounded-2xl p-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-indigo-700 to-gray-900 mb-3">
            ALL COUNTRY APPLY CANADA
          </h2>

          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            VISA, TICKET, <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-2 py-0.5 rounded-md">FREE</span>.
          </p>
          <p className="text-base md:text-lg font-semibold text-indigo-600">
            HAPPY FAMILY WITH US.
          </p>

          {/* Feature Box 1 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex items-start gap-5 p-5 bg-gradient-to-r from-sky-50 to-white/80 rounded-xl shadow-xl border border-gray-100 hover:scale-105 transition"
          >
            <ClipboardCheck className="text-sky-600 w-12 h-12 mb-1 drop-shadow" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Accurate Guidance
              </h3>
              <p className="text-gray-700">
                Reliable experts guide every applicant step-by-step.
              </p>
            </div>
          </motion.div> */}

          {/* Feature Box 2 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex items-start gap-5 p-5 bg-gradient-to-r from-sky-50 via-indigo-50 to-white/80 rounded-xl shadow-xl border border-gray-100 hover:scale-105 transition"
          >
            <Users className="text-sky-600 w-12 h-12 mb-1 drop-shadow" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Global Presence
              </h3>
              <p className="text-gray-700">
                Offices and agents worldwide to serve you anytime.
              </p>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Right Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Main Large Image */}
          <div className="w-[340px] h-[440px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white/30 flex items-center justify-center">
            <img
              src="/images/4.webp"
              alt="Consultation"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          {/* Floating smaller images — glassmorphism effect */}
          <div className="absolute right-[-70px] top-16 flex flex-col space-y-8 z-20">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="rounded-xl shadow-2xl border-2 border-white bg-white/40 backdrop-blur-lg"
            >
              <img
                src="/images/5.webp"
                className="w-[170px] h-[170px] rounded-xl object-cover"
                alt="Passport"
              />
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.46 }}
              className="rounded-xl shadow-2xl border-2 border-white bg-white/40 backdrop-blur-lg"
            >
              <img
                src="/images/6.webp"
                className="w-[170px] h-[170px] rounded-xl object-cover"
                alt="Tourist Visa"
              />
            </motion.div>
          </div>
          {/* Decorative glowing ring behind collage */}
          <div className="absolute left-20 bottom-12 w-56 h-56 bg-sky-400 rounded-full blur-2xl opacity-10 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
