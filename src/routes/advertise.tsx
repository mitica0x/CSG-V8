import { createFileRoute } from "@tanstack/react-router";
import AdvertisePage from "@/components/pages/AdvertisePage";

export const Route = createFileRoute("/advertise")({
  component: AdvertisePage,
  head: () => ({
    meta: [
      { title: "Advertise on CoinSiglieri — Reach EU Exchange Operators" },
      {
        name: "description",
        content:
          "Six placement types to reach EU crypto exchange operators, CMOs, and compliance teams. Custom packages, response within 24h. C0insiglieri Score independence guaranteed.",
      },
    ],
  }),
});
