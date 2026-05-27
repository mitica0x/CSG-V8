import { createFileRoute } from "@tanstack/react-router";
import BlogIndexPage from "@/components/pages/BlogIndexPage";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      { title: "Blog — EU Market Intel Decoded | CoinSiglieri" },
      {
        name: "description",
        content:
          "Field notes from the CoinSiglieri research desk. MiCAR analysis, exchange comparisons, EU market intelligence for crypto operators.",
      },
    ],
  }),
});
