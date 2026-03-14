import Nav from "@/components/nav";
import VideoBanner from "@/components/video-banner";
import Hero from "@/components/hero";
import ProofBar from "@/components/proof-bar";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <VideoBanner />
        <Hero />
        <ProofBar />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
