import { createFileRoute } from "@tanstack/react-router";
import BlogMicarPage from "@/components/pages/BlogMicarPage";

export const Route = createFileRoute("/blog/best-micar-licensed-crypto-exchanges-eu-2026")({
  component: BlogMicarPage,
  head: () => ({
    meta: [
      { title: "Best MiCAR Licensed Crypto Exchanges in EU 2026" },
      {
        name: "description",
        content:
          "Complete guide to MiCAR-compliant crypto exchanges in Europe. C0insiglieri Score rankings, compliance analysis, and EU regulatory status.",
      },
    ],
  }),
});
