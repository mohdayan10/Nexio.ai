import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeCards from "@/components/ThreeCards";
import AgenticApps from "@/components/AgenticApps";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThreeCards />
        <AgenticApps />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
