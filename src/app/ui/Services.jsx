"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Clock, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Software Engineer",
      salary: "CAD 9,000-10,000/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"4",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
    {
      title: "Chemical Engineer",
      salary: "CAD 9,000-9,500/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"21",
      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
    {
      title: "StoreKeepers",
      salary: "$4000/Month",
      currency: "CANADIAN DOLLAR",
      Contract:" 2 years",
      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
    {
      title: "Cleaners",
      salary: "$3500",

      currency: "CANADIAN DOLLAR",
      Contract:" 2 years",
      vaccancies:"633",
      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
     {
      title: "Fruit Packing",
      salary: "$3500",

      currency: "CANADIAN DOLLAR",
      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
     {
      title: "Nurse",
      salary: "CAD 4,500-5,000/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"31",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    }, 
    {
      title: "Security Guard",
      salary: "$3500/Month",

      currency: "CANADIAN DOLLAR",
      Contract:" 2 years",
      vaccancies:"19",

      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
    {
      title: "Construction Worker",
      salary: "CAD 3,500-4,500/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"321",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    }, 
    {
      title: "AC/ HVAC Technician/ Mechanic",
      salary: "CAD 4,500-5,500/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"16",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    }, 
    {
      title: "Plumbers",
      salary: "$4000/Month",
      currency: "CANADIAN DOLLAR",
      Contract:" 2 years",
      vaccancies:"45",
      Address: "9519 Keele St, Maple, ON L6A 4A2",

      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
    {
      title: "Electricians",
      salary: "$4000/Month",

      currency: "CANADIAN DOLLAR",
      Contract:" 2 years",
      vaccancies:"54",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
     {
      title: "Electrical Engineer",
      salary: "CAD 9,000-9,500/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"9",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },
     {
      title: "Mechanical Engineer",
      salary: "CAD 8,000-9,000/Month",
      currency: "CANADIAN DOLLAR",
      vaccancies:"17",
      Address: "9519 Keele St, Maple, ON L6A 4A2",
      // dutyTime: "8 HOURS",
      image: "/images/canada.png", // Add your image path
      description: "Eden company canada"
    },

  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-2xl shadow-lg mb-6"
          >
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold text-sm tracking-wide">
              TRUSTED IMMIGRATION SERVICES
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Career Opportunities in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Canada
            </span>
          </h2>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  IMPORTANT NOTICE
                </h3>
                <p className="text-green-700 leading-relaxed">
                  <strong>SARDAR JAGMOHAN SINGH DOES NOT CHARGE FOR VISA SERVICES.</strong> For any inquiries 
                  related to Sardar Jagmohan Singh's company in Canada, WhatsApp number, or contact details, 
                  feel free to visit our official website. All legitimate information regarding our services 
                  is provided here. Don't fall victim to scams—always verify through trusted sources.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full bg-black brightness-50 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Title Overlay */}
                <div className=" bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className=" bottom-4 left-4 right-4">
                  <h3 className="text-4xl font-bold text-red-700 text-center drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
                {/* Salary Info */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="text-center flex-1">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-2xl font-bold text-gray-900">{service.salary}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{service.currency}</span>
                  </div>
                </div>

                {/* vaccanicies Time */}
                <div className="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900">Vaccancies</div>
                    <div className="text-lg font-bold text-blue-600">{service.vaccancies}</div>
                  </div>
                </div>
                {/* vaccanicies Time */}
                <div className="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900">Contract</div>
                    <div className="text-lg font-bold text-blue-600">{service.Contract}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Canadian Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today for genuine immigration consultation and career opportunities in Canada. 
              No hidden fees, no false promises—just honest, professional guidance.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}