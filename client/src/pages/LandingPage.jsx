import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <CTA />

      <Footer />

    </div>
  );
};

export default LandingPage;