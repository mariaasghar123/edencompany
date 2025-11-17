"use client";

import { motion } from "framer-motion";

export default function Cards() {
  const images = [
    "/images/pass1.webp",
    "/images/pass2.webp",
    "/images/pass3.webp",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Card ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
