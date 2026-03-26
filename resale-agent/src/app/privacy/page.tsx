import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ResaleAgent",
  description:
    "How Resale Agent collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <article className="max-w-[720px] mx-auto px-6 pt-32 pb-20 text-[#4B5563]">
        <p className="text-sm text-body mb-2">Last updated: March 2026</p>
        <h1 className="text-4xl font-heading font-extrabold text-heading mb-8">
          Privacy Policy
        </h1>

        <p className="leading-relaxed mb-4">
          Resale Agent (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          operates the Resale Agent Telegram bot and the website
          theresaleagent.com (the &ldquo;Service&rdquo;). This page informs you
          of our policies regarding the collection, use, and disclosure of
          personal data when you use our Service.
        </p>

        {/* ── Information We Collect ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Information We Collect
        </h2>

        <h3 className="text-lg font-heading font-semibold text-heading mt-8 mb-2">
          Telegram Account Data
        </h3>
        <p className="leading-relaxed mb-4">
          When you interact with our bot, we receive your Telegram user ID and
          username. We do not receive your phone number, contacts, or messages
          outside of our bot conversation.
        </p>

        <h3 className="text-lg font-heading font-semibold text-heading mt-8 mb-2">
          Product Photos
        </h3>
        <p className="leading-relaxed mb-4">
          Photos you send to the bot are processed by our AI to generate
          listings. Photos are used solely for creating your listings and are not
          shared with third parties. Photos may be temporarily stored during
          processing and are not retained long-term.
        </p>

        <h3 className="text-lg font-heading font-semibold text-heading mt-8 mb-2">
          Marketplace Account Connections
        </h3>
        <p className="leading-relaxed mb-4">
          When you connect your eBay or StockX account, we receive an OAuth
          access token that allows us to publish listings on your behalf. We do
          not receive or store your marketplace passwords. You can disconnect
          your accounts at any time through the bot.
        </p>

        <h3 className="text-lg font-heading font-semibold text-heading mt-8 mb-2">
          Usage Analytics
        </h3>
        <p className="leading-relaxed mb-4">
          We use PostHog and Microsoft Clarity to understand how people use our
          Service. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Pages visited on our website</li>
          <li>
            Clicks, scrolls, and interactions (Clarity heatmaps and session
            recordings)
          </li>
          <li>
            Bot usage events (listing created, listing published, etc.)
          </li>
          <li>Device type, browser, and approximate location</li>
        </ul>
        <p className="leading-relaxed mb-4">
          Analytics data is aggregated and used to improve the Service. Clarity
          session recordings may capture mouse movements and clicks on our
          website but do not capture any text you type.
        </p>

        {/* ── How We Use Your Data ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          How We Use Your Data
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            To create and publish marketplace listings on your behalf
          </li>
          <li>To process payments for the Service</li>
          <li>To send you notifications when items are sold</li>
          <li>To improve and optimize the Service</li>
          <li>To provide customer support</li>
        </ul>

        {/* ── Data Sharing ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Data Sharing
        </h2>
        <p className="leading-relaxed mb-4">
          We do not sell your personal data. We share data only with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong className="text-heading">
              Connected marketplaces (eBay, StockX, and others as they become
              available)
            </strong>{" "}
            — listing data and photos, when you publish to these platforms
          </li>
          <li>
            <strong className="text-heading">Anthropic (Claude AI)</strong> —
            product photos are sent to generate listing details. Anthropic does
            not retain this data.
          </li>
          <li>
            <strong className="text-heading">Analytics providers</strong> —
            PostHog and Microsoft Clarity receive anonymized usage data
          </li>
          <li>
            <strong className="text-heading">Supabase</strong> — our database
            provider, stores account and listing data
          </li>
          <li>
            <strong className="text-heading">Railway</strong> — our hosting
            provider
          </li>
        </ul>

        {/* ── Data Retention ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Data Retention
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Account data is retained as long as your account is active
          </li>
          <li>
            Product photos are processed and not retained long-term
          </li>
          <li>
            Analytics data is retained according to each provider&apos;s
            policies
          </li>
          <li>
            You can request deletion of your data by contacting us
          </li>
        </ul>

        {/* ── Your Rights ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Your Rights
        </h2>
        <p className="leading-relaxed mb-4">You can:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Request a copy of your data</li>
          <li>Request deletion of your account and data</li>
          <li>Disconnect marketplace accounts at any time</li>
          <li>Opt out of analytics by using browser privacy settings</li>
        </ul>

        {/* ── Security ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Security
        </h2>
        <p className="leading-relaxed mb-4">
          We use industry-standard security measures including encrypted
          connections (HTTPS), secure OAuth flows for marketplace connections,
          and access-controlled databases.
        </p>

        {/* ── Changes ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Changes
        </h2>
        <p className="leading-relaxed mb-4">
          We may update this policy from time to time. We will notify users of
          significant changes through the Telegram bot.
        </p>

        {/* ── Contact ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Contact
        </h2>
        <p className="leading-relaxed mb-4">
          For privacy questions or data requests, contact us at{" "}
          <a
            href="https://t.me/resaleagent_support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @resaleagent_support
          </a>{" "}
          on Telegram.
        </p>
      </article>

      <Footer />
    </main>
  );
}
