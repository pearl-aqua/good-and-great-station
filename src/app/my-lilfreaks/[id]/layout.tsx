export default function MyApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full justify-center">{children}</div>;
}
