import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomurcuk 🌱 | Alışkanlık Kazan, Tomurcuklan",
  description:
    "Bilimsel alışkanlık takibi + gerçek dünya etkisi. Her alışkanlık bir tomurcuk, sabırla besle, çiçek açsın.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-tomurcuk-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
