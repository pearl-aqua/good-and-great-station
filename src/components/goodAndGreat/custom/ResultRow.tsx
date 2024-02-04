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
}: {
  label: string | number;
  value: string;
}) {
  return (
    <div className="relative flex flex-col w-full">
      <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 z-10">
        <div className="text-blue-900">{label}</div>
        <div className="text-blue-300">{`${value}%`}</div>
      </div>
      <div
        className={`absolute right-0 bg-gray-200 h-5 z-0`}
        style={{ width: getOptionWidth(+value) }}
      ></div>
    </div>
  );
}
