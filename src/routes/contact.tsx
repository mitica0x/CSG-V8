import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project — C0insiglieri" },
      {
        name: "description",
        content:
          "Tell us about your project. We'll review your needs and come back with an initial assessment and budget.",
      },
    ],
  }),
  component: () => (
    <div style={{ background: "#0a0e1a", minHeight: "100vh" }}>
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
