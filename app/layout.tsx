import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Message Priority Router – Auto-route urgent Slack messages",
  description: "AI analyzes Slack messages and automatically moves urgent ones to priority channels, tags relevant people. Built for engineering and support teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81685c7c-b95d-48b2-a999-dda86e61ffb6"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
