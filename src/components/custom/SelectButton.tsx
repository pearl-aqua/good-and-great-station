interface Props {
  onClick?: () => void;
  isSelected?: boolean;
  children: string;
}

export default function SelectButton({ onClick, isSelected, children }: Props) {
  return (
    <div
      className={`flex justify-center items-center rounded-xl border px-3 py-0.5 text-sm cursor-pointer 
      ${
        isSelected
          ? "bg-zinc-400 text-white"
          : "bg-white hover:bg-zinc-100 text-zinc-600 "
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
