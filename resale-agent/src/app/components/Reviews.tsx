"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I listed my entire sneaker collection in 20 minutes. This used to take me an entire weekend.",
    name: "Alex M.",
    role: "Sneaker reseller",
  },
  {
    quote:
      "The AI gets the titles right every time. My eBay listings look way more professional now.",
    name: "Jordan K.",
    role: "Vintage seller",
  },
  {
    quote:
      "Cross-listing from eBay to StockX saved me so much time. Game changer.",
    name: "Sam R.",
    role: "Full-time reseller",
  },
  {
    quote:
      "I was skeptical about AI listings but the descriptions are better than what I write manually.",
    name: "Priya T.",
    role: "Thrift flipper",
  },
  {
    quote:
      "Finally something that actually works from my phone. No laptop needed.",
    name: "Marcus D.",
    role: "Side hustler",
  },
  {
    quote:
      "Listed 40 items in one evening. My Depop is gonna love this when it launches.",
    name: "Olivia H.",
    role: "Closet cleaner",
  },
  {
    quote:
      "The pricing suggestions are spot on. Saves me from having to research comps every time.",
    name: "Tyler W.",
    role: "Sneaker reseller",
  },
  {
    quote:
      "Sold notifications across platforms is the feature I didn't know I needed.",
    name: "Aisha B.",
    role: "Multi-platform seller",
  },
  {
    quote:
      "I switched from List Perfectly and I'm saving $29/month. Plus it's faster.",
    name: "Jake F.",
    role: "Full-time reseller",
  },
  {
    quote:
      "My wife sends photos, I hit publish. We cleared out our garage in a week.",
    name: "Chris L.",
    role: "Casual seller",
  },
  {
    quote:
      "The StockX integration is seamless. Identifies the exact colorway every time.",
    name: "Devon R.",
    role: "Sneaker reseller",
  },
  {
    quote:
      "I run a vintage shop and this cut my listing time by 80%. Not exaggerating.",
    name: "Nina S.",
    role: "Vintage store owner",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-[260px] md:w-[320px] bg-white rounded-[14px] border border-border p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group hover:shadow-lg transition-shadow relative">
      <span className="absolute top-4 left-5 text-4xl text-gray-100 font-serif leading-none">
        &ldquo;
      </span>

      <div className="relative z-10">
        <StarRating />
        <p className="text-sm text-heading leading-relaxed mb-4">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full chrome-gradient flex items-center justify-center">
            <span className="text-xs font-bold text-white">{initials}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-heading">
              {testimonial.name}
            </p>
            <p className="text-xs text-body">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(6, 12);

  return (
    <section id="reviews" className="bg-surface py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 mb-12">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What resellers are saying
        </motion.h2>
      </div>

      {/* Mobile: single scrollable row */}
      <div className="md:hidden overflow-x-auto scrollbar-hide px-6 pb-4">
        <div className="flex gap-4">
          {testimonials.map((t, i) => (
            <ReviewCard key={`mobile-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Desktop: two-row marquee */}
      <div className="hidden md:block">
        <div className="relative mb-6">
          <div className="flex animate-marquee-left gap-6 hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((t, i) => (
              <ReviewCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex animate-marquee-right gap-6 hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((t, i) => (
              <ReviewCard key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
