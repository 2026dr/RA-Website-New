"use client";

import { motion } from "framer-motion";

const innerPills = [
  { label: "Sneaker resellers", angle: 0 },
  { label: "Vintage sellers", angle: 90 },
  { label: "Thrift flippers", angle: 180 },
  { label: "Closet cleaners", angle: 270 },
];

const outerPills = [
  { label: "Side hustlers", angle: 0 },
  { label: "Full-time resellers", angle: 120 },
  { label: "Bulk sellers", angle: 240 },
];

const allPills = [...innerPills, ...outerPills];

function posOnCircle(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + 50 * Math.sin(rad)}%`,
    top: `${50 - 50 * Math.cos(rad)}%`,
  };
}

export default function WhoItsFor() {
  return (
    <section className="bg-white py-10 md:py-[60px] overflow-hidden">
      {/* Mobile: flex-wrap grid */}
      <div className="md:hidden px-6 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl font-bold text-heading leading-tight mb-2">
            Built for every kind of reseller
          </h2>
          <p className="text-sm text-body leading-relaxed">
            No matter what you sell or where you sell it.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {allPills.map((pill, i) => (
            <motion.span
              key={pill.label}
              className="orbit-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {pill.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Desktop: orbital animation */}
      <div className="hidden md:flex justify-center items-center">
        <div
          className="relative transition-transform"
          style={{ width: 600, height: 600 }}
        >
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <motion.div
              className="text-center"
              style={{ maxWidth: 260 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-heading font-bold text-heading leading-tight mb-2"
                style={{ fontSize: 24 }}
              >
                Built for every kind of reseller
              </h2>
              <p className="text-sm text-body leading-relaxed">
                No matter what you sell or where you sell it.
              </p>
            </motion.div>
          </div>

          {/* Inner ring — 440px, clockwise, 40s */}
          <div
            className="absolute"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div
              className="orbit-spin-cw relative"
              style={{
                width: 440,
                height: 440,
                border: "0.5px dashed #D1D5DB",
                borderRadius: "50%",
              }}
            >
              {innerPills.map((pill) => {
                const pos = posOnCircle(pill.angle);
                return (
                  <div
                    key={pill.label}
                    className="absolute"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="orbit-counterspin-cw">
                      <span className="orbit-pill">{pill.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Outer ring — 600px, counter-clockwise, 60s */}
          <div
            className="absolute"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div
              className="orbit-spin-ccw relative"
              style={{
                width: 600,
                height: 600,
                border: "0.5px dashed #D1D5DB",
                borderRadius: "50%",
              }}
            >
              {outerPills.map((pill) => {
                const pos = posOnCircle(pill.angle);
                return (
                  <div
                    key={pill.label}
                    className="absolute"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="orbit-counterspin-ccw">
                      <span className="orbit-pill">{pill.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
