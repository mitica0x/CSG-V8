import { createFileRoute } from "@tanstack/react-router";
import FindMyExchangePage from "@/components/pages/FindMyExchangePage";

export const Route = createFileRoute("/find-my-exchange")({
  component: FindMyExchangePage,
  head: () => ({
    meta: [
      { title: "Find My Exchange — C0insiglieri Match Engine | CoinSiglieri" },
      {
        name: "description",
        content:
          "Answer 5 questions and get your personalized crypto exchange match. Scored by C0insiglieri algorithm.",
      },
    ],
  }),
});
