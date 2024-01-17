export default function ResultRow({
  label,
  value,
}: {
  label: string | number;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200">
      <div className="text-blue-900">{label}</div>
      <div className="text-blue-300">{value}</div>
    </div>
  );
}
