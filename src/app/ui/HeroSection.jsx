"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image with Animation */}
      <motion.img
        src="/images/edenherosection.jpg"     // 👉 apni image yahan rakho (public folder me)
        alt="Hero Image"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 space-y-3 leading-tight"
        >
         WELCOME TO THE 	​OFFICIAL WEBSITE <br /> OF EDEN COMPANY CANADA
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl text-lg md:text-xl opacity-90"
        >
          A LEADER WITH VISION AND INTEGRITY

        </motion.p>
      </div>
    </section>
  );
}
