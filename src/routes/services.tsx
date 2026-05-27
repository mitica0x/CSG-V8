import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — C0insiglieri" },
      {
        name: "description",
        content:
          "Full-spectrum Web3 execution: legal, tokenomics, smart contracts, marketing, crypto payments, and more.",
      },
    ],
  }),
  component: () => (
    <div style={{ background: "#0a0e1a", minHeight: "100vh" }}>
      <Navigation />
      <main>
        <WhoWeServe />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </div>
  ),
});
