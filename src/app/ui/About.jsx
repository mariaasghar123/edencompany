"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Shield } from "lucide-react";

export default function About() {
  const features = [
    { icon: Shield, text: "Trusted Immigration Consultancy" },
    { icon: Users, text: "Expert Legal Guidance" },
    { icon: Globe, text: "Global Success Stories" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
      
      <div className=" mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section with Modern Design */}
          <motion.div
            initial={{ x: -30, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
              <img
                src="/images/edenherosection.jpg"
                alt="Canada Immigration Services"
                className="w-full h-96 lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 px-4 py-2 rounded-full"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                <span className="text-blue-700 font-semibold text-sm tracking-wider">
                  WHO WE ARE
                </span>
              </motion.div>

              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Canada Immigration
                </span>
              </h3>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 leading-relaxed text-lg bg-white/50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <strong>Canada Visa Apply</strong> is a premier immigration consultancy offering expert 
                guidance for Canada immigration visas. Our seasoned team possesses extensive experience 
                in immigration law and citizenship processes, specializing in skilled worker programs, 
                business migration, and international education opportunities.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                We believe in personalized service, working closely with each client to understand their 
                unique aspirations and circumstances. Our tailored solutions and professional representation 
                within the legal framework ensure you achieve your Canadian dream with confidence and clarity.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => setOpen(false)}
              >
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                onClick={() => setOpen(false)}
              >
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}