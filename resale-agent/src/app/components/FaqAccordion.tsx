"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const faqData: FaqSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is Resale Agent?",
        answer:
          "Resale Agent is a Telegram bot that uses AI to create marketplace listings from product photos. Send a photo, and AI generates the title, description, item specifics, and pricing — then publishes to your connected marketplaces in one tap.",
      },
      {
        question: "How do I start using it?",
        answer:
          "Open Telegram, search for @ResaleAgentBot, and press Start. That's it — you can send your first photo right away.",
      },
      {
        question: "Is it free to try?",
        answer:
          "Yes. You get free listings when you sign up so you can try the Service before purchasing more.",
      },
      {
        question: "Do I need to install anything?",
        answer:
          "No. Resale Agent works entirely inside Telegram — no app downloads, no desktop software.",
      },
    ],
  },
  {
    title: "Listings & AI",
    items: [
      {
        question: "How does the AI work?",
        answer:
          "You send a photo of your item. Our AI analyzes it to identify the brand, model, condition, color, and other details. It then generates a professional listing title, description, and suggests a price based on current market data.",
      },
      {
        question: "How accurate is the AI?",
        answer:
          "The AI is highly accurate for popular brands and categories like sneakers, clothing, bags, and accessories. We recommend reviewing the generated listing before publishing, especially for rare or unusual items.",
      },
      {
        question: "Can I edit the listing before publishing?",
        answer:
          "Yes. After the AI generates your listing, you can edit the title, description, price, and other details before publishing.",
      },
      {
        question: "How many photos can I send?",
        answer:
          "You can send up to 24 photos per listing. More photos typically lead to faster sales.",
      },
      {
        question: "What categories work best?",
        answer:
          "Resale Agent is designed for fashion and streetwear items — sneakers, clothing, bags, accessories, and shoes. Items outside of these categories (electronics, home goods, etc.) are not supported and will not be processed by the bot.",
      },
    ],
  },
  {
    title: "Marketplaces",
    items: [
      {
        question: "Which marketplaces are supported?",
        answer:
          "Currently eBay and StockX. More platforms are being added regularly — follow us for updates.",
      },
      {
        question: "How do I connect my marketplace account?",
        answer:
          "The bot will guide you through connecting your accounts securely. You'll be redirected to the marketplace to log in and authorize access. We never see your passwords.",
      },
      {
        question: "Can I disconnect my accounts?",
        answer: "Yes, at any time through the bot.",
      },
      {
        question:
          "Can I try it without connecting my own marketplace account?",
        answer:
          "Yes. We offer a trial option where we can publish to a shared marketplace account so you can see how the Service works before connecting your own.",
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      {
        question: "How much does it cost?",
        answer: (
          <>
            <p className="mb-3">
              Resale Agent uses a pay-as-you-go model. No monthly subscriptions.
              You can buy individual listings or save with packages:
            </p>
            <ul className="list-none space-y-2 mb-1">
              <li className="flex items-center gap-3">
                <span className="inline-block w-24 font-semibold text-heading">
                  1 listing
                </span>
                <span>$1</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-24 font-semibold text-heading">
                  20 listings
                </span>
                <span>$15</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-24 font-semibold text-heading">
                  50 listings
                </span>
                <span>$25</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-24 font-semibold text-heading">
                  100 listings
                </span>
                <span>$49</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes. You get free listings when you sign up so you can try the Service before purchasing.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. You pay per listing. Marketplace fees (eBay, StockX, etc.) are separate and charged by those platforms directly.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        question: "How do I get help?",
        answer: (
          <>
            Contact us on Telegram at{" "}
            <a
              href="https://t.me/resaleagent_support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @resaleagent_support
            </a>
            .
          </>
        ),
      },
      {
        question: "I found a bug. How do I report it?",
        answer: (
          <>
            Send a message to{" "}
            <a
              href="https://t.me/resaleagent_support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @resaleagent_support
            </a>{" "}
            on Telegram with a description and screenshots if possible.
          </>
        ),
      },
    ],
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {faqData.map((section) => (
        <div key={section.title} className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-body mb-4">
            {section.title}
          </h2>

          <div className="divide-y divide-border border-t border-border">
            {section.items.map((item) => {
              const id = `${section.title}-${item.question}`;
              const isOpen = openId === id;

              return (
                <div key={id}>
                  <button
                    onClick={() => toggle(id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-heading">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-xl leading-none text-body select-none"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 text-[#4B5563] leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
