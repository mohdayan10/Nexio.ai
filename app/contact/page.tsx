import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in touch — Nexio",
  description:
    "Talk to the Nexio team about deploying purpose-built AI agents across your customer and employee experiences. Book a demo of the Artemis agent platform.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="ripple min-h-screen pb-24 pt-32 md:pt-36">
        <div className="container-px">
          <div className="mx-auto max-w-xl text-center">
            <p className="label-mono">Get in touch</p>
            <h1 className="display mt-4 text-4xl text-[#14171f] sm:text-5xl">
              Let&apos;s build with certainty.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-slate-500">
              Tell us a little about you and we&apos;ll connect you with the right team to
              get a demo of the Nexio agent platform.
            </p>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
