import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jasmine V Ngo | AI Product Manager",
  description: "AI product strategy, education research, and thoughtful technology by Jasmine V Ngo.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Jasmine V Ngo | AI Product Manager",
    description: "AI Strategy · Education Research · Product Leadership",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jasmine V Ngo, AI Product Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasmine V Ngo | AI Product Manager",
    description: "AI Strategy · Education Research · Product Leadership",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
