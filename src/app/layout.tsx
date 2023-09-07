import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import topbar from "../image/topbar-lf.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little&Freaks",
  description: "Little&Freaks",
  openGraph: {
    title: "Little&Freaks",
    description: "Little&Freaks",
    siteName: "Little&Freaks 입사 지원 시스템",
    images: [
      {
        url: "../image/lf-144.png",
        width: 144,
        height: 144,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Little&Freaks",
    description: "Little&Freaks 입사 지원 시스템",
    images: [
      {
        url: "../image/lf-144.png",
        width: 144,
        height: 144,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-20 lg:h-32 relative">
          <Link href="/">
            <Image
              src={topbar}
              alt="top bar"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        </div>

        <div className="container mx-auto py-10 text-zinc-700">{children}</div>
      </body>
    </html>
  );
}
