import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cockpit — Clément Mourlon",
  description: "Dashboard personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
