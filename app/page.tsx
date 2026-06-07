import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeCards from "@/components/ThreeCards";
import Enterprises from "@/components/Enterprises";
import AgenticApps from "@/components/AgenticApps";
import Gartner from "@/components/Gartner";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
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
        <Enterprises />
        <AgenticApps />
        <Gartner />
        <Testimonials />
        <Partners />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
