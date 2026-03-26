"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Platforms", href: "#platforms" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="ResaleAgent"
            width={500}
            height={130}
            className="h-[130px] w-auto"
            priority
          />
        </a>

        <div className="hidden tablet:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body hover:text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://t.me/ResaleAgentBot?start=website"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden tablet:inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform"
        >
          Start Listing
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="tablet:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-heading transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="tablet:hidden fixed inset-0 top-16 bg-white z-50 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold text-heading hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/ResaleAgentBot?start=website"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center px-8 py-3 bg-primary text-white text-base font-semibold rounded-full"
          >
            Start Listing
          </a>
        </div>
      )}
    </nav>
  );
}
