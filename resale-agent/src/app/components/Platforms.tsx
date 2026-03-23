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
    <section id="platforms" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sell on the platforms you already use
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/visuals/Global_Reach_in_One_Tap_version_1.webp"
              alt="Sell globally with one tap"
              width={600}
              height={400}
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                className="flex items-center justify-between bg-surface rounded-xl px-5 py-4 border border-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
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
