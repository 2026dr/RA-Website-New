"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          className="bg-heading rounded-3xl px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D354C] to-[#1A1A2E] rounded-3xl" />

          <div className="relative z-10">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              We handle the listings.
              <br />
              You handle the business.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto">
              Your first listings are free. No credit card required.
            </p>
            <a
              href="https://t.me/ResaleAgentBot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-white font-semibold rounded-full text-base sm:text-lg hover:scale-105 transition-transform"
            >
              Start Listing for Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
