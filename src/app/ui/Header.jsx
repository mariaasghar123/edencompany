"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="relative">
              <img
                src="/images/Edencompany.webp"
                alt="Tournament Logo"
                className="relative w-40 h-20"
              />
            </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-sky-600 transition">Home</Link>
          <Link  href="#about" className="hover:text-sky-600 transition"   onClick={() => setOpen(false)}>About</Link>
          <Link href="#services" className="hover:text-sky-600 transition"   onClick={() => setOpen(false)}>Services</Link>
          <Link href="#contact" className="hover:text-sky-600 transition"   onClick={() => setOpen(false)}>Contact</Link>
        </div>
        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md px-5 pb-4"
        >
          <Link
            href="/"
            className="block py-3 border-b hover:text-sky-600 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-3 border-b hover:text-sky-600 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-3 hover:text-sky-600 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
