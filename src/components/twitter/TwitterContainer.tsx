import Script from "next/script";

export default function TwitterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
      <div className="flex flex-col justify-center items-center p-4">
        {children}
      </div>
    </>
  );
}
