import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import topbar from "../image/topbar-lll.jpg";

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
        <div className="w-screen h-20 lg:h-32 relative">
          <Link href="/">
            <Image
              src={topbar}
              alt="top bar"
              fill
              // sizes="100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </Link>
        </div>

        <div className="container mx-auto py-10 text-zinc-700">{children}</div>
      </body>
    </html>
  );
}
