import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — ResaleAgent",
  description:
    "Terms governing your use of Resale Agent, including the Telegram bot and theresaleagent.com.",
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <article className="max-w-[720px] mx-auto px-6 pt-32 pb-20 text-[#4B5563]">
        <p className="text-sm text-body mb-2">Last updated: March 2026</p>
        <h1 className="text-4xl font-heading font-extrabold text-heading mb-8">
          Terms of Service
        </h1>

        <p className="leading-relaxed mb-4">
          These terms govern your use of Resale Agent, including the Telegram
          bot and the website theresaleagent.com.
        </p>
        <p className="leading-relaxed mb-4">
          By using the Service, you agree to these terms. If you do not agree,
          do not use the Service.
        </p>

        {/* ── What Resale Agent Does ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          What Resale Agent Does
        </h2>
        <p className="leading-relaxed mb-4">
          Resale Agent is an AI-powered tool that helps you create and publish
          listings on resale marketplaces from product photos. The Service
          generates listing titles, descriptions, pricing suggestions, and
          publishes listings to connected marketplace accounts. We currently
          support eBay and StockX, with more platforms being added regularly.
        </p>

        {/* ── Your Account ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Your Account
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>You must have a Telegram account to use the Service</li>
          <li>
            You are responsible for maintaining the security of your marketplace
            account connections
          </li>
          <li>You must be at least 18 years old to use the Service</li>
          <li>One account per person</li>
        </ul>

        {/* ── Your Responsibilities ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Your Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            You are responsible for all listings published through your
            connected marketplace accounts
          </li>
          <li>
            You must ensure that items you list are accurately represented and
            legally yours to sell
          </li>
          <li>
            You must comply with the terms of service of each marketplace (eBay,
            StockX, etc.)
          </li>
          <li>
            You are responsible for fulfilling orders, shipping items, and
            handling returns
          </li>
          <li>
            AI-generated listing content is provided as a starting point — you
            should review and edit before publishing
          </li>
        </ul>

        {/* ── AI-Generated Content ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          AI-Generated Content
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Listing titles, descriptions, and pricing suggestions are generated
            by AI and may not always be accurate
          </li>
          <li>
            You should review all AI-generated content before publishing
          </li>
          <li>
            We are not responsible for errors in AI-generated listings
          </li>
          <li>
            Pricing suggestions are based on market data and are not financial
            advice
          </li>
        </ul>

        {/* ── Payments and Tokens ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Payments and Tokens
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The Service uses a token-based system</li>
          <li>Tokens are consumed when listings are created</li>
          <li>Token purchases are non-refundable once used</li>
          <li>
            We reserve the right to change pricing with reasonable notice
          </li>
          <li>
            Free tokens provided through promotions cannot be transferred or
            exchanged
          </li>
        </ul>

        {/* ── Marketplace Connections ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Marketplace Connections
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Publishing listings requires connecting to a supported marketplace
            account
          </li>
          <li>
            We publish listings on your behalf using connected accounts
          </li>
          <li>
            We are not responsible for marketplace account suspensions, policy
            violations, or disputes between you and buyers
          </li>
          <li>
            You can disconnect your marketplace accounts at any time
          </li>
        </ul>

        {/* ── Sold Notifications and Auto-Delist ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Sold Notifications and Auto-Delist
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            We monitor your connected accounts for sold items and send
            notifications
          </li>
          <li>
            When an item sells on one platform, we attempt to remove it from
            other platforms
          </li>
          <li>
            This feature depends on marketplace API availability and may not
            always work in real-time
          </li>
          <li>
            We are not responsible for overselling if auto-delist fails
          </li>
        </ul>

        {/* ── Intellectual Property ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Intellectual Property
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            You retain ownership of all photos you upload and listings you
            create
          </li>
          <li>
            We retain ownership of the Service, including our AI models, code,
            and design
          </li>
          <li>
            You grant us a limited license to process your photos and data for
            the purpose of providing the Service
          </li>
        </ul>

        {/* ── Limitation of Liability ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            The Service is provided &ldquo;as is&rdquo; without warranties
          </li>
          <li>
            We are not liable for marketplace account issues, incorrect
            AI-generated content, failed transactions, or any indirect damages
          </li>
          <li>
            Our total liability is limited to the amount you paid for the
            Service in the past 12 months
          </li>
        </ul>

        {/* ── Termination ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Termination
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            You can stop using the Service at any time by stopping interaction
            with the bot
          </li>
          <li>
            We may suspend or terminate accounts that violate these terms
          </li>
          <li>
            Upon termination, your data will be deleted upon request
          </li>
        </ul>

        {/* ── Changes ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Changes
        </h2>
        <p className="leading-relaxed mb-4">
          We may update these terms. Continued use of the Service after changes
          constitutes acceptance.
        </p>

        {/* ── Contact ── */}
        <h2 className="text-2xl font-heading font-bold text-heading mt-12 mb-4">
          Contact
        </h2>
        <p className="leading-relaxed mb-4">
          Questions about these terms? Contact us at{" "}
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
