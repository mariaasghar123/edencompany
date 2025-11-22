"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, XCircle, Search } from "lucide-react";

export default function FeesSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [reference, setReference] = useState("");
  const [result, setResult] = useState("");

  // Reference number to fees mapping
  const referenceFees = {
    CAN6738494716CN11: "Selection Fees: 21,500",
    CAN462839837CN00: "Job Offer Letter Fees: 25,000",
    CAN75241800740001: "Work Permit Fees: 175,000",
    CAN86251692073666: "Appointment Fees: 80,000",
  };

  const handleCheck = () => {
    if (referenceFees[reference]) {
      setResult({ type: "success", msg: referenceFees[reference] });
    } else {
      setResult({ type: "error", msg: "Invalid reference number. Please try again." });
    }
  };

  const titles = [
    "Selection Fees",
    "Job Offer Letter Fees",
    "Work Permit Fees",
    "Appointment Fees",
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-sky-50 via-white to-gray-100 overflow-hidden">
      <div className="absolute -top-20 -left-14 w-96 h-96 bg-sky-300 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-indigo-300 rounded-full opacity-10 blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-indigo-700 to-gray-900 mb-3"
        >
          Fees & Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
        >
          Enter your reference number to view your applicable service fees.
        </motion.p>

        {/* TITLES LIST */}
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 justify-center">
          {titles.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-xl shadow px-5 py-3 text-left mx-auto md:mx-0"
            >
              <BadgeCheck className="text-indigo-400 w-6 h-6" />
              <span className="font-semibold text-gray-700 text-lg">{t}</span>
            </div>
          ))}
        </div> */}

        {/* BUTTON */}
        <motion.button
          onClick={() => setShowPopup(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 bg-gradient-to-r from-indigo-600 to-sky-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl flex justify-center items-center gap-2 hover:scale-105 transition"
        >
          <Search className="w-6 h-6" />
          Enter your reference number to see your services and feeses
        </motion.button>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md w-full border border-indigo-100"
          >
            <h3 className="text-2xl font-bold mb-3 text-indigo-700 flex items-center gap-2">
              <Search className="w-7 h-7" />
              Enter Reference Number
            </h3>

            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-semibold text-lg mt-1"
              placeholder="e.g. CAN11......16CN11"
            />

            <button
              onClick={handleCheck}
              className="mt-5 w-full bg-gradient-to-r from-indigo-600 to-sky-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
            >
              Check Fees
            </button>

            {/* Result Message */}
            {result?.msg && (
              <div className="mt-6 flex flex-col items-center gap-2">
                {result.type === "success" ? (
                  <BadgeCheck className="text-green-500 w-10 h-10" />
                ) : (
                  <XCircle className="text-red-500 w-10 h-10" />
                )}
                <p
                  className={`mt-2 text-center font-medium text-lg ${
                    result.type === "success" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {result.msg}
                </p>
              </div>
            )}

            <button
              onClick={() => {
                setShowPopup(false);
                setReference("");
                setResult("");
              }}
              className="mt-8 w-full text-indigo-600 font-semibold hover:text-indigo-900 text-base"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
