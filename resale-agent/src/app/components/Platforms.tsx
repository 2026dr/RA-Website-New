"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const platforms = [
  { name: "eBay", status: "live" },
  { name: "StockX", status: "live" },
  { name: "Depop", status: "coming" },
  { name: "Poshmark", status: "coming" },
  { name: "Vinted", status: "coming" },
  { name: "Vestiaire Collective", status: "coming" },
  { name: "Mercari", status: "coming" },
];

export default function Platforms() {
  return (
    <section id="platforms" className="bg-white py-10 md:py-[60px]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <motion.h2
          className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-heading text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sell on the platforms you already use
        </motion.h2>
        <motion.p
          className="text-body text-base md:text-lg text-center mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          List to multiple marketplaces at once — no switching tabs, no copy-pasting.
        </motion.p>

        {/* Desktop: image left, platforms right | Mobile: stacked */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/visuals/one-click-all-marketplaces.webp"
              alt="Phone on a glass table showing Digital Acquisitions Confirmed with eBay, Depop, Poshmark, and StockX; headline One Click. All Marketplaces."
              width={822}
              height={1024}
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Platform list — single column */}
          <motion.div
            className="flex flex-col gap-3 w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                className="flex items-center justify-between bg-surface rounded-xl px-5 py-4 border border-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold text-heading">
                  {platform.name}
                </span>
                {platform.status === "live" ? (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-lime text-heading">
                    Live
                  </span>
                ) : (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-body">
                    Coming soon
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
