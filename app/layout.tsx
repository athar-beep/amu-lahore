import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Àmú Lahore | French Fine Dining in Gulberg",
  description:
    "Àmú Lahore — an intimate French table in Gulberg II. Friday–Saturday tasting dinner and Saturday–Sunday brunch. Enquire by phone or WhatsApp.",
  openGraph: {
    title: "Àmú Lahore | French Fine Dining in Gulberg",
    description:
      "Intimate French dining in Lahore — tasting dinners and weekend brunch. Reserve by enquiry.",
    type: "website",
    images: [{ url: "/images/hero-table.jpg", width: 1920, height: 1280 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Verified-only structured data: no hours/geo/rating fabricated.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Àmú Lahore",
    servesCuisine: "French",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6-A Canal Park, Gulberg II",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    telephone: "+92-300-8180918",
  };
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
