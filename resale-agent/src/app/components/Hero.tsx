"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FULL_DESCRIPTION =
  "Brand new with tags, unworn and in perfect condition. Funnel neck with button detail. Single-breasted button front. Cropped relaxed silhouette.";

const PLATFORMS = ["eBay", "StockX", "Depop", "and more"];

export default function Hero() {
  const [descExpanded, setDescExpanded] = useState(false);
  const [descHovered, setDescHovered] = useState(false);
  const [publishState, setPublishState] = useState<
    "idle" | "publishing" | "success"
  >("idle");

  useEffect(() => {
    if (descHovered) {
      setDescExpanded(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let cancelled = false;

    const runCycle = () => {
      setDescExpanded(false);
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        setDescExpanded(true);
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          runCycle();
        }, 3000);
      }, 5000);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [descHovered]);

  const handlePublish = () => {
    if (publishState !== "idle") return;
    setPublishState("publishing");
    setTimeout(() => {
      setPublishState("success");
      setTimeout(() => {
        setPublishState("idle");
      }, 4000);
    }, 800);
  };

  const cardClass =
    "absolute z-20 bg-white border border-border rounded-[14px] px-2.5 py-2 sm:px-4 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]";

  const floatAnim = { y: [0, -4, 0] };
  const floatTrans = (delay: number) => ({
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  });

  return (
    <section className="relative bg-white min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading leading-tight mb-6">
            Turn product photos into listings in seconds.
          </h1>
          <p className="text-body text-base md:text-lg mb-8 leading-relaxed">
            Upload a photo, let AI generate your listing, and publish instantly
            to resale marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
            <a
              href="https://t.me/ResaleAgentBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Start Listing for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 border-[1.5px] border-heading text-heading font-semibold rounded-full hover:scale-105 transition-transform"
            >
              See How It Works
            </a>
          </div>
          <p className="text-xs text-trust">
            Works in Telegram · Pay per listing · Free to start
          </p>
        </motion.div>

        {/* Right — Product Showcase + Publish */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="relative w-full max-w-lg lg:max-w-xl min-h-[580px] scale-[0.65] sm:scale-[0.8] md:scale-100 origin-top -mb-[203px] sm:-mb-[116px] md:mb-0">
            {/* Radial gradient backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-gray-100 to-transparent opacity-60" />
            </div>

            {/* Jacket image */}
            <motion.div
              className="relative z-10 flex justify-center pt-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/visuals/jacket.webp"
                alt="Product — Zara Wool Blend Coat"
                width={400}
                height={500}
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>

            {/* Brand — top-left */}
            <motion.div
              className={`${cardClass} max-w-[130px]`}
              style={{ top: "18%", left: "25%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div animate={floatAnim} transition={floatTrans(0)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Brand
                </p>
                <p className="text-xs font-semibold text-heading leading-snug">
                  Zara
                </p>
              </motion.div>
            </motion.div>

            {/* Title — top-right */}
            <motion.div
              className={`${cardClass} max-w-[220px]`}
              style={{ top: "10%", right: "3%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div animate={floatAnim} transition={floatTrans(0.5)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Title
                </p>
                <p className="text-xs font-semibold text-heading leading-snug">
                  Wool Blend Short Coat Beige Funnel Neck Button Front
                </p>
              </motion.div>
            </motion.div>

            {/* Condition — left, below Brand */}
            <motion.div
              className={`${cardClass} max-w-[160px]`}
              style={{ top: "38%", left: "3%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div animate={floatAnim} transition={floatTrans(1)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Condition
                </p>
                <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                  New with tags
                </span>
              </motion.div>
            </motion.div>

            {/* Category — right, vertically centered */}
            <motion.div
              className={`${cardClass} max-w-[140px]`}
              style={{ top: "34%", right: "3%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.div animate={floatAnim} transition={floatTrans(1.5)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Category
                </p>
                <p className="text-xs font-semibold text-heading leading-snug">
                  Outerwear
                </p>
              </motion.div>
            </motion.div>

            {/* Suggested Price — bottom-left */}
            <motion.div
              className={`${cardClass} max-w-[150px]`}
              style={{ bottom: "13%", left: "5%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.div animate={floatAnim} transition={floatTrans(0.3)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Suggested Price
                </p>
                <p className="text-xs font-semibold text-heading leading-snug">
                  $45
                </p>
                <p className="text-[10px] text-body mt-0.5">$35–$60</p>
              </motion.div>
            </motion.div>

            {/* Description — bottom-right, auto-expand */}
            <motion.div
              className={`${cardClass} max-w-[220px]`}
              style={{ bottom: "10%", right: "3%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              onMouseEnter={() => setDescHovered(true)}
              onMouseLeave={() => setDescHovered(false)}
            >
              <motion.div animate={floatAnim} transition={floatTrans(0.8)}>
                <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                  Description
                </p>
                <div
                  className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
                  style={{ maxHeight: descExpanded ? "12rem" : "2rem" }}
                >
                  <p className="text-xs font-semibold text-heading leading-snug">
                    {FULL_DESCRIPTION}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Chrome particles */}
            {[
              { size: 8, x: "10%", y: "20%", delay: 0 },
              { size: 6, x: "85%", y: "15%", delay: 1 },
              { size: 10, x: "75%", y: "70%", delay: 2 },
              { size: 5, x: "20%", y: "80%", delay: 0.5 },
              { size: 7, x: "90%", y: "45%", delay: 1.5 },
            ].map((p, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full chrome-gradient opacity-60 z-0"
                style={{
                  width: p.size,
                  height: p.size,
                  left: p.x,
                  top: p.y,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Publish to all marketplaces */}
          <div className="-mt-14 relative z-30 flex justify-center min-h-[56px] w-full px-4 sm:px-0">
            <AnimatePresence mode="wait">
              {publishState === "idle" && (
                <motion.button
                  key="publish-idle"
                  onClick={handlePublish}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-[14px] bg-white text-[#2D354C] border-[1.5px] border-[#2D354C] rounded-[60px] font-semibold hover:bg-[#2D354C] hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  Publish to all marketplaces
                </motion.button>
              )}

              {publishState === "publishing" && (
                <motion.button
                  key="publish-loading"
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-[14px] bg-[#2D354C] text-white border-[1.5px] border-[#2D354C] rounded-[60px] font-semibold opacity-80 cursor-wait"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Publishing…
                </motion.button>
              )}

              {publishState === "success" && (
                <motion.div
                  key="publish-success"
                  className="w-full sm:w-auto inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-green-800">
                      Published successfully to
                    </p>
                    <p className="flex flex-wrap gap-x-1 mt-0.5">
                      {PLATFORMS.map((name, i) => (
                        <motion.span
                          key={name}
                          className="text-sm font-medium text-green-700"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 * (i + 1) }}
                        >
                          {i < PLATFORMS.length - 2 ? `${name},` : name}
                        </motion.span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
