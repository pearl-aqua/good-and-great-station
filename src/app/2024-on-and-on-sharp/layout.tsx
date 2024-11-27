import RootLayout from "@/components/layout/index";

export default function PollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      <div className="container mx-auto pt-5 pb-14 text-zinc-600 w-full">
        {children}
      </div>
    </RootLayout>
  );
}
