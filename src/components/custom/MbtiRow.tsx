interface Props {
  label: string | number;
  value: string;
  high: boolean;
}

export default function MbtiRow({ data }: { data: Props[] }) {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-end justify-between w-full pb-2 mb-2">
        <div
          className={`text-xl font-bold w-12 h-8 flex justify-center items-end ${
            data[0].high ? "text-zinc-500" : "text-zinc-300"
          }`}
        >
          {data[0]?.label}
        </div>
        <div className="w-full h-8">
          <div className="flex items-center justify-between text-xs">
            <div className="text-zinc-400">{data[0]?.value}</div>
            <div className="text-zinc-400">{data[1]?.value}</div>
          </div>
          <div className="w-full h-2 bg-zinc-300">
            <div className="w-[120px] h-2 bg-zinc-500"></div>
          </div>
        </div>
        <div
          className={`text-xl font-bold w-12 h-8 flex justify-center items-end ${
            data[1].high ? "text-zinc-500" : "text-zinc-300"
          }`}
        >
          {data[1]?.label}
        </div>
      </div>
    </div>
  );
}
