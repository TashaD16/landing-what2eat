import Nav from "@/components/nav";
import VideoBanner from "@/components/video-banner";
import Hero from "@/components/hero";
import ProofBar from "@/components/proof-bar";
import Features from "@/components/features";
import TinderBanner from "@/components/tinder-banner";
import Benefits from "@/components/benefits";
import Pricing from "@/components/pricing";
import CtaBanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <VideoBanner />
      <main>
        <Hero />
        <ProofBar />
        <Features />
        <TinderBanner />
        <Benefits />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
