import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — ResaleAgent",
  description:
    "Answers to common questions about Resale Agent — how it works, pricing, supported marketplaces, and more.",
};

export default function FaqPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-[720px] mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-heading font-extrabold text-heading mb-12">
          Frequently Asked Questions
        </h1>

        <FaqAccordion />
      </div>

      <Footer />
    </main>
  );
}
