export default function SelectButton({ children }: { children: string }) {
  return (
    <div className="flex justify-center items-center rounded-xl border px-3 py-0.5 text-sm text-zinc-600 cursor-pointer hover:bg-zinc-100">
      {children}
    </div>
  );
}
