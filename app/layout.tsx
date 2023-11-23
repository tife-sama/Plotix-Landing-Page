import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const acme = { fontFamily: "Acme, sans-serif" };
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Level up your stories with real pros and real fun!",
  description:
    "A  dynamic platform connecting writers with industry pros for live sessions. Elevate your storytelling, find joy in the craft, and level up your writing journey with personalized guidance from real experts.",
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
