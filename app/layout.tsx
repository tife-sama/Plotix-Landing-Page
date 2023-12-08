import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const acme = { fontFamily: "Acme, sans-serif" };
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unlock early access: Join Plotix waitlist for writers success",
  description:
    "Join the Plotix waitlist for early access and be part of a platform that supports writers to succeed and earn sharing their experience.",
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
