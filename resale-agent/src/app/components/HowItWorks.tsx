"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: 1,
    title: "Snap a photo",
    description:
      "Take a photo of your item and send it to the bot in Telegram.",
  },
  {
    number: 2,
    title: "AI creates your listing",
    description:
      "Brand, title, description, pricing — all generated in seconds.",
  },
  {
    number: 3,
    title: "Publish everywhere",
    description: "Choose your platforms and go live with one tap.",
  },
];

export default function HowItWorks() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    if (isInView) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="how-it-works" className="bg-white py-10 md:py-[60px]">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Left — Phone mockup (45%) */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-[250px] md:w-[280px] max-w-[320px] rounded-[40px] border-2 border-gray-900 bg-black p-[6px] shadow-xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-[22px] bg-black rounded-full z-10" />

            <div
              className="relative rounded-[36px] overflow-hidden bg-black cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/visuals/demo-chat.mp4"
                loop
                playsInline
                preload="metadata"
                poster="/visuals/demo-chat-poster.webp"
                className="w-full aspect-[9/19] object-cover"
                suppressHydrationWarning
              />

              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  {isPlaying ? (
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-900 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Steps content (55%) */}
        <motion.div
          className="w-full md:w-[55%]"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-heading mb-3">
            How it works
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed max-w-md mb-10">
            From photo to published listing in under 60 seconds.
          </p>

          {/* Vertical timeline steps */}
          <div className="relative pl-[42px] mb-10">
            <div
              className="absolute left-[13px] top-[14px] w-[2px] bg-gray-200"
              style={{ height: "calc(100% - 28px)" }}
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                >
                  <div
                    className="absolute flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center z-10"
                    style={{
                      backgroundColor: "#4F35EB",
                      left: "-42px",
                      top: "0px",
                    }}
                  >
                    <span className="text-white text-xs font-bold">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{
                        fontSize: "16px",
                        color: "#2D354C",
                        lineHeight: "28px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#6B7280" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <a
            href="https://t.me/ResaleAgentBot?start=website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform"
            style={{ backgroundColor: "#4F35EB" }}
          >
            Try it yourself
          </a>
        </motion.div>
      </div>
    </section>
  );
}
