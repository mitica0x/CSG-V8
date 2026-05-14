import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: 'C0insiglieri — Bridging Vision and Execution in Web3' },
      { name: 'description', content: 'Web3-native since 2017. Ecosystem operator — licensing, tokenomics, fundraising, smart contracts, crypto payments, and go-to-market.' },
      { name: 'author', content: 'C0insiglieri' },
      { property: 'og:title', content: 'C0insiglieri — Bridging Vision and Execution in Web3' },
      { property: 'og:description', content: 'Web3-native since 2017. Ecosystem operator with real market presence.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc887afe-6a66-4174-b53e-50a1d954952e/id-preview-0e6c22e8--3c9bc1a9-de50-4c8a-ace5-1dd2d060d8da.lovable.app-1776770993361.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@C0insiglieriRO' },
      { name: 'twitter:title', content: 'C0insiglieri — Bridging Vision and Execution in Web3' },
      { name: 'twitter:description', content: 'Web3-native since 2017. Ecosystem operator with real market presence.' },
      { name: 'twitter:image', content: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc887afe-6a66-4174-b53e-50a1d954952e/id-preview-0e6c22e8--3c9bc1a9-de50-4c8a-ace5-1dd2d060d8da.lovable.app-1776770993361.png' },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
