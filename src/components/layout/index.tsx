import Link from "next/link";
import Image from "next/image";

import topbar from "../../image/topbar-lf.jpg";
import Nav from "@/components/nav/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-20 lg:h-28 relative">
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

      {children}
      <div className="py-4">
        <Nav />
      </div>
    </>
  );
}
