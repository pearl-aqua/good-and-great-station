export default function SelectButton({ children }: { children: string }) {
  return (
    <div className="flex justify-center items-center rounded-xl border px-3 py-0.5 cursor-pointer">
      {children}
    </div>
  );
}
