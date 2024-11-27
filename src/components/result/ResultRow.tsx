const getOptionWidth = (count: number) => {
  if (!count) {
    return 0;
  }

  const widthNum = Math.round((count / 100) * 270);

  return widthNum;
};

export default function ResultRow({
  label,
  value,
  select = false,
}: {
  label: string | number;
  value: string;
  select?: boolean;
}) {
  const text = select ? `${label} ✔️` : label;
  return (
    <div className="relative flex flex-col w-full">
      <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 z-10">
        <div className="text-zinc-900">{text}</div>
        <div className="text-zinc-400">{`${value}%`}</div>
      </div>
      <div
        className={`absolute right-0 bottom-2 bg-gray-100 h-2 z-0`}
        style={{ width: getOptionWidth(+value) }}
      ></div>
    </div>
  );
}
