"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductData {
  image: string;
  alt: string;
  brand: string;
  title: string;
  category: string;
  condition: string;
  conditionBg: string;
  conditionText: string;
  price: string;
  priceRange: string;
  description: string;
  imageScale: number;
}

const PRODUCTS: ProductData[] = [
  {
    image: "/visuals/chromehearts.png",
    alt: "Chrome Hearts Cross Patch Denim Shorts",
    brand: "Chrome Hearts",
    title:
      "Chrome Hearts Cross Patch Denim Shorts Men Black Streetwear New",
    category: "Bottoms",
    condition: "New without box/tags",
    conditionBg: "#FFF7ED",
    conditionText: "#D97706",
    price: "$499",
    priceRange: "$450–$650",
    description: `New without tags, no visible flaws.

Details:
· Four white cross leather patches
· Washed black denim
· Five-pocket classic cut
· Silver-tone button and rivets

Shipping:
Fast shipping within 2 business days.`,
    imageScale: 1.4,
  },
  {
    image: "/visuals/chanel.png",
    alt: "Chanel CC Cap Toe Classic Ballet Flats",
    brand: "Chanel",
    title:
      "Chanel CC Cap Toe Classic Ballet Flats Leather Light Pink Women Pre-Owned",
    category: "Shoes",
    condition: "Pre-owned - Fair",
    conditionBg: "#F3F4F6",
    conditionText: "#6B7280",
    price: "$420",
    priceRange: "$320–$520",
    description: `Pre-owned in fair condition.

Details:
· CC logo stitched cap toe
· Bow detail at vamp
· Grosgrain ribbon trim
· Leather upper
· Made in Italy

Shipping:
Fast shipping within 2 business days.`,
    imageScale: 1.2,
  },
  {
    image: "/visuals/hermes.png",
    alt: "Hermès Birkin 35 Shiny Niloticus Crocodile Bag",
    brand: "Hermès",
    title:
      "Hermès Birkin 35 Shiny Niloticus Crocodile Top Handle Bag Dark Brown Gold HW",
    category: "Bags",
    condition: "Pre-owned - Excellent",
    conditionBg: "#ECFDF5",
    conditionText: "#059669",
    price: "$45,000",
    priceRange: "$38,000–$65,000",
    description: `Pre-owned excellent condition.

Details:
· Shiny crocodile leather
· Gold hardware
· Signature turn-lock closure
· Padlock and keys included

Shipping:
Fast shipping within 2 business days.`,
    imageScale: 1.2,
  },
  {
    image: "/visuals/jacket.webp",
    alt: "Zara Wool Blend Short Coat Beige",
    brand: "Zara",
    title:
      "Wool Blend Short Coat Beige Funnel Neck Button Front",
    category: "Outerwear",
    condition: "New with tags",
    conditionBg: "#ECFDF5",
    conditionText: "#059669",
    price: "$45",
    priceRange: "$35–$60",
    description: `Brand new with tags, unworn and in perfect condition.

Details:
· Funnel neck with button detail
· Single-breasted button front
· Wool blend fabric
· Relaxed fit

Shipping:
Fast shipping within 2 business days.`,
    imageScale: 1.4,
  },
];

const PLATFORMS = ["eBay", "StockX", "Depop", "and more"];

const ROTATION_INTERVAL = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);
  const [descHovered, setDescHovered] = useState(false);
  const [showcaseHovered, setShowcaseHovered] = useState(false);
  const [publishState, setPublishState] = useState<
    "idle" | "publishing" | "success"
  >("idle");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const product = PRODUCTS[activeIndex];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  }, []);

  const goToIndex = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  useEffect(() => {
    if (showcaseHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(goToNext, ROTATION_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [showcaseHovered, goToNext]);

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
    <section className="relative bg-white pt-24 pb-16 [overflow-x:clip]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-heading leading-tight mb-6">
            Turn product photos into listings in seconds.
          </h1>
          <p className="text-body text-base md:text-lg mb-8 leading-relaxed">
            Upload a photo, let AI generate your listing, and publish instantly
            to resale marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start gap-4 mb-6">
            <a
              href="https://t.me/ResaleAgentBot?start=website"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center justify-center w-full sm:w-auto max-w-[340px] px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Start Listing for Free
            </a>
            <a
              href="#how-it-works"
              className="cta-btn inline-flex items-center justify-center w-full sm:w-auto max-w-[340px] px-8 py-3.5 border-[1.5px] border-heading text-heading font-semibold rounded-full hover:scale-105 transition-transform"
            >
              See How It Works
            </a>
          </div>
          <p className="text-xs text-trust">
            Works in Telegram · Pay per listing · Free to start
          </p>
        </motion.div>

        {/* Right — Product Showcase */}
        <div
          className="flex-1 flex flex-col items-center w-full"
          onMouseEnter={() => setShowcaseHovered(true)}
          onMouseLeave={() => setShowcaseHovered(false)}
        >
          <div className="hero-showcase-wrapper w-full max-w-lg lg:max-w-xl -mb-[128px] sm:-mb-[87px] md:-mb-[46px] tablet:mb-0">
            <div className="hero-showcase relative w-full min-h-[580px] scale-[0.78] sm:scale-[0.85] md:scale-[0.92] tablet:scale-100 origin-top overflow-visible">
              {/* Radial gradient backdrop */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-gray-100 to-transparent opacity-60" />
              </div>

              {/* Product image + card tags — crossfade together */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0 overflow-visible"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Product image */}
                  <div className="relative z-10 flex justify-center pt-10 pointer-events-none">
                    <div className="pointer-events-auto">
                      <div className="relative mx-auto w-[min(400px,85vw)] h-[500px] flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          width={400}
                          height={500}
                          className="hero-product-img object-contain drop-shadow-lg w-full h-full"
                          style={{ transform: `scale(${product.imageScale})` }}
                          priority={activeIndex === 0}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Brand — top-left */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-brand max-w-[130px]`}
                    style={{ top: "18%", left: "25%" }}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(0)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Brand
                      </p>
                      <p className="text-xs font-semibold text-heading leading-snug">
                        {product.brand}
                      </p>
                    </motion.div>
                  </div>

                  {/* Title — top-right */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-title max-w-[220px]`}
                    style={{ top: "10%", right: "3%" }}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(0.5)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Title
                      </p>
                      <p className="text-xs font-semibold text-heading leading-snug">
                        {product.title}
                      </p>
                    </motion.div>
                  </div>

                  {/* Condition — left, below Brand */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-condition max-w-[160px]`}
                    style={{ top: "38%", left: "3%" }}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(1)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Condition
                      </p>
                      <span
                        className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: product.conditionBg,
                          color: product.conditionText,
                        }}
                      >
                        {product.condition}
                      </span>
                    </motion.div>
                  </div>

                  {/* Category — right, vertically centered */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-category max-w-[140px]`}
                    style={{ top: "34%", right: "3%" }}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(1.5)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Category
                      </p>
                      <p className="text-xs font-semibold text-heading leading-snug">
                        {product.category}
                      </p>
                    </motion.div>
                  </div>

                  {/* Suggested Price — bottom-left */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-price max-w-[150px]`}
                    style={{ bottom: "13%", left: "5%" }}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(0.3)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Suggested Price
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-heading leading-snug">
                          {product.price}
                        </p>
                        <p className="text-[10px] text-body mt-0.5">
                          {product.priceRange}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Description — bottom-right, auto-expand */}
                  <div
                    className={`${cardClass} hero-tag hero-tag-desc max-w-[220px]`}
                    style={{ bottom: "10%", right: "3%" }}
                    onMouseEnter={() => setDescHovered(true)}
                    onMouseLeave={() => setDescHovered(false)}
                  >
                    <motion.div animate={floatAnim} transition={floatTrans(0.8)}>
                      <p className="text-[10px] font-medium text-trust uppercase tracking-wider mb-1">
                        Description
                      </p>
                      <div
                        className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
                        style={{ maxHeight: descExpanded ? "20rem" : "2rem" }}
                      >
                        <p className="text-xs font-semibold text-heading leading-snug whitespace-pre-line">
                          {product.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Publish button + dots — static, don't fade */}
              <div className="relative z-30 flex justify-center pt-10 pointer-events-none">
                <div className="pointer-events-auto flex flex-col items-center w-[min(400px,85vw)]">
                  <div className="h-[500px]" />
                  <div className="-mt-14 relative w-full h-[80px] shrink-0 px-1 sm:px-0">
                    <AnimatePresence mode="wait">
                      {publishState === "idle" && (
                        <motion.button
                          key="publish-idle"
                          type="button"
                          onClick={handlePublish}
                          className="hero-publish-btn absolute bottom-0 left-1/2 w-[85%] sm:w-max inline-flex items-center justify-center gap-2.5 px-9 py-[14px] bg-white text-[#2D354C] border-[1.5px] border-[#2D354C] rounded-[60px] font-semibold hover:bg-[#2D354C] hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9, x: "-50%" }}
                          animate={{ opacity: 1, scale: 1, x: "-50%" }}
                          exit={{ opacity: 0, scale: 0.9, x: "-50%" }}
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
                          type="button"
                          disabled
                          className="hero-publish-btn absolute bottom-0 left-1/2 w-[85%] sm:w-max inline-flex items-center justify-center gap-2.5 px-9 py-[14px] bg-[#2D354C] text-white border-[1.5px] border-[#2D354C] rounded-[60px] font-semibold opacity-80 cursor-wait"
                          initial={{ opacity: 0, x: "-50%" }}
                          animate={{ opacity: 0.9, x: "-50%" }}
                          exit={{ opacity: 0, x: "-50%" }}
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
                          className="absolute bottom-0 left-1/2 w-max max-w-[min(340px,calc(100vw-2rem))] inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
                          initial={{ opacity: 0, scale: 0.8, x: "-50%" }}
                          animate={{ opacity: 1, scale: 1, x: "-50%" }}
                          exit={{ opacity: 0, scale: 0.9, x: "-50%" }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
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
                          <div className="text-left min-w-0">
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
                                  {i < PLATFORMS.length - 2
                                    ? `${name},`
                                    : name}
                                </motion.span>
                              ))}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Dot indicators */}
                  <div className="mt-4 flex items-center gap-2">
                    {PRODUCTS.map((_, idx) => (
                      <button
                        key={`dot-${idx}`}
                        type="button"
                        onClick={() => goToIndex(idx)}
                        className="w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer"
                        style={{
                          backgroundColor:
                            idx === activeIndex ? "#4F35EB" : "#D1D5DB",
                        }}
                        aria-label={`Go to product ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
