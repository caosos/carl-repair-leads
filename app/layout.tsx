import type { Metadata } from "next";
import { Barlow, DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CARL | Central Arkansas Repair Leads",
  description:
    "A local connection for drywall repair, small home repairs, contractors, handymen, and same-day labor in Central Arkansas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${dmSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
