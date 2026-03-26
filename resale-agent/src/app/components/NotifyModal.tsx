"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvwpozz";

interface NotifyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NotifyModal({ open, onClose }: NotifyModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting" || status === "success") return;

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "platforms_notify" }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    if (status !== "submitting") {
      setTimeout(() => {
        setEmail("");
        setStatus("idle");
      }, 300);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={handleClose}
          />

          {/* Modal card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-8"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-body hover:text-heading transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="#2D354C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-heading mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-body text-sm">
                  We&apos;ll let you know when new marketplaces go live.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-bold text-heading mb-2 pr-6">
                  Get notified when new platforms launch
                </h3>
                <p className="text-body text-sm mb-6">
                  We&apos;ll send you one email when new marketplaces are added.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-heading text-sm placeholder:text-trust outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />

                  {status === "error" && (
                    <p className="text-red-500 text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-primary text-white font-semibold py-3 text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Submitting..." : "Notify Me"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
