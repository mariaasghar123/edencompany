"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500); // 2.5 seconds then hide

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.7 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
    >
      <motion.img
        src="/images/Jagmohan-Sing.png"   // 👉 apna logo 'public' folder me rakho
        alt="Logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-100 h-100 object-contain"
      />
    </motion.div>
  );
}
