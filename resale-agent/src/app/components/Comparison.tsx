"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CellValue = "yes" | "no" | "partial";

interface ComparisonRow {
  feature: string;
  manual: CellValue;
  other: CellValue;
  ra: CellValue;
}

const rows: ComparisonRow[] = [
  { feature: "AI product identification", manual: "no", other: "partial", ra: "yes" },
  { feature: "Auto-generated title", manual: "no", other: "no", ra: "yes" },
  { feature: "Auto-generated description", manual: "no", other: "no", ra: "yes" },
  { feature: "Smart pricing suggestion", manual: "no", other: "no", ra: "yes" },
  { feature: "Cross-listing", manual: "no", other: "yes", ra: "yes" },
  { feature: "Sold notifications", manual: "no", other: "yes", ra: "yes" },
  { feature: "Auto-delist when sold", manual: "no", other: "partial", ra: "yes" },
  { feature: "Works from phone (Telegram)", manual: "no", other: "no", ra: "yes" },
];

function Check() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#059669" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 mx-auto opacity-40" fill="none" viewBox="0 0 24 24" stroke="#EF4444" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Partial() {
  return <span className="text-[10px] sm:text-sm font-medium" style={{ color: "#D97706" }}>Partial</span>;
}

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes") return <Check />;
  if (value === "no") return <Cross />;
  return <Partial />;
}

export default function Comparison() {
  return (
    <section className="py-10 md:py-[60px]" style={{ background: "#F3F7FB" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-heading text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Stop wasting time on manual listings
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left — Image (hidden on mobile/tablet) */}
          <motion.div
            className="hidden lg:block lg:w-[40%] flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/visuals/End_the_manual_data_entry_grind_version_1.webp"
              alt="End the manual data entry grind"
              width={600}
              height={800}
              className="w-full h-full object-cover"
              style={{ borderRadius: 16 }}
              sizes="40vw"
            />
          </motion.div>

          {/* Right — Comparison table */}
          <div className="w-full lg:w-[60%] min-w-0">
            <div className="bg-white rounded-2xl shadow-sm overflow-visible">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_auto_auto_auto]">
                <div className="p-2 sm:p-4 rounded-tl-2xl" />

                <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 text-center">
                  <span className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-500">
                    Manual Listing
                  </span>
                </div>

                <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 text-center">
                  <span className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-500">
                    Other Tools
                  </span>
                  <span className="hidden sm:block text-[11px] text-gray-400 mt-0.5">
                    List Perfectly, Vendoo, etc.
                  </span>
                </div>

                {/* Resale Agent header */}
                <div
                  className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 text-center relative rounded-tr-2xl"
                  style={{
                    background: "#F8F5FF",
                    borderTop: "2px solid #4F35EB",
                    borderLeft: "2px solid #4F35EB",
                    borderRight: "2px solid #4F35EB",
                    borderTopRightRadius: 12,
                  }}
                >
                  <div
                    className="absolute top-0 right-0 text-white text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-bl-lg tracking-wide"
                    style={{ background: "#4F35EB" }}
                  >
                    AI-POWERED
                  </div>
                  <span className="text-[10px] sm:text-sm md:text-base font-semibold" style={{ color: "#4F35EB" }}>
                    Resale Agent
                  </span>
                </div>
              </div>

              {/* Data rows */}
              {rows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  className="grid grid-cols-[1fr_auto_auto_auto] border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                >
                  <div className="p-2 sm:p-3 md:p-4 flex items-center">
                    <span className="text-[11px] sm:text-sm text-heading font-medium">{row.feature}</span>
                  </div>

                  <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-3 md:p-4 flex items-center justify-center">
                    <CellContent value={row.manual} />
                  </div>

                  <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-3 md:p-4 flex items-center justify-center">
                    <CellContent value={row.other} />
                  </div>

                  <div
                    className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-3 md:p-4 flex items-center justify-center"
                    style={{
                      background: "#F8F5FF",
                      borderLeft: "2px solid #4F35EB",
                      borderRight: "2px solid #4F35EB",
                    }}
                  >
                    <CellContent value={row.ra} />
                  </div>
                </motion.div>
              ))}

              {/* Bottom row — time summary */}
              <motion.div
                className="grid grid-cols-[1fr_auto_auto_auto] border-t-2 border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.06 * rows.length }}
              >
                <div className="p-2 sm:p-4 flex items-center rounded-bl-2xl">
                  <span className="text-[11px] sm:text-sm font-semibold text-heading">Time per listing</span>
                </div>

                <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 flex items-center justify-center">
                  <span className="text-[10px] sm:text-sm font-semibold text-gray-500">~5 min</span>
                </div>

                <div className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 flex items-center justify-center">
                  <span className="text-[10px] sm:text-sm font-semibold text-gray-500">~5 min</span>
                </div>

                <div
                  className="w-[72px] sm:w-[110px] md:w-[140px] p-2 sm:p-4 flex items-center justify-center"
                  style={{
                    background: "#F8F5FF",
                    borderLeft: "2px solid #4F35EB",
                    borderRight: "2px solid #4F35EB",
                    borderBottom: "2px solid #4F35EB",
                    borderRadius: "0 0 16px 0",
                  }}
                >
                  <span className="text-[10px] sm:text-sm font-bold" style={{ color: "#4F35EB" }}>
                    Under 60s
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://t.me/ResaleAgentBot?start=website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Try It for Free
          </a>
        </div>
      </div>
    </section>
  );
}
