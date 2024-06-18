import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const acme = { fontFamily: "sans-serif" };
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamlined Coaching for Creatives | Plotix",
  description:
    "Supercharge your coaching business and help fellow creatives through 1:1 sessions and more. Plotix streamlines your online coaching by simplifying admin tasks and facilitating sessions, all in one place.",
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
