import type { Metadata } from "next";
import { Inter, Rowdies, Italianno } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

export const metadata: Metadata = {
  title: "South Delta",
  description: "A Next.js application",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rowdies.variable} ${italianno.variable} antialiased`}>{children}</body>
    </html>
  );
}
