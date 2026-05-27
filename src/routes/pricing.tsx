import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "@/components/pages/PricingPage";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Free / Signal / Intelligence | CoinSiglieri" },
      {
        name: "description",
        content:
          "Three tiers for crypto market intelligence. Free directory access, $19/mo Signal alerts, $699/mo full C0insiglieri Intelligence terminal for operators.",
      },
    ],
  }),
});
