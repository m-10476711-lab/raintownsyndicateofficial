
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raintown Syndicate | Komuniti Permotoran",
  description:
    "Komuniti permotoran Raintown Syndicate. Berkongsi minat, persahabatan, pertandingan dan ganjaran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
