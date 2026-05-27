import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HomeHero from "@/components/sections/HomeHero";
import Stack from "@/components/sections/Stack";
import Operator from "@/components/sections/Operator";
import TrackRecord from "@/components/sections/TrackRecord";
import ServicesLine from "@/components/sections/ServicesLine";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen" style={{ background: "#09090b" }}>
      <LoadingScreen isVisible={loading} onComplete={() => setLoading(false)} />
      <Navigation />
      <main>
        <HomeHero />
        <Stack />
        <Operator />
        <TrackRecord />
        <ServicesLine />
      </main>
      <Footer />
    </div>
  );
}
