import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const acme = { fontFamily: "Acme, sans-serif" };
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the Acme font family to the body */}
      <body className={inter.className} style={acme}>
        {children}
      </body>
    </html>
  );
}
