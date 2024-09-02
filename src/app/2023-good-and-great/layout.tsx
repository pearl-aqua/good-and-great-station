export default function PollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto pt-5 pb-14 text-zinc-600 w-full">
      {children}
    </div>
  );
}
