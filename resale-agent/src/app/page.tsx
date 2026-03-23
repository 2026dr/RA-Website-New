import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoVideo from "./components/DemoVideo";
import Platforms from "./components/Platforms";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import WhoItsFor from "./components/WhoItsFor";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DemoVideo />
      <Comparison />
      <Platforms />
      <Features />
      <Reviews />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </main>
  );
}
