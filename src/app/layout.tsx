import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import topbar from "../image/topbar-d.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goo and Gree",
  description: "Goo and Gree",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/">
          <Image src={topbar} alt="top bar" sizes="100vw" />
        </Link>
        <div className="container mx-auto py-10 text-zinc-700">{children}</div>
      </body>
    </html>
  );
}
