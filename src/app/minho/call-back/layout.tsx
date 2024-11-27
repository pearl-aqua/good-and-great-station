import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Always&Hope",
  description: "Always&Hope",
  openGraph: {
    title: "Always&Hope",
    description: "2024 Always&Hope",
    siteName: "Always&Hope",
    images: [
      {
        url: "https://little-and-freaks.vercel.app/ff-99.png",
        width: 144,
        height: 144,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Always&Hope",
    description: "2024 Always&Hope",
    images: [
      {
        url: "https://little-and-freaks.vercel.app/ff-99.png",
        width: 144,
        height: 144,
      },
    ],
  },
};

export default function MyApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full justify-center">{children}</div>;
}
