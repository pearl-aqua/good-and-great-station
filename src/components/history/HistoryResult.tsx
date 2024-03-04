import { useEffect, useState } from "react";
import { ListType } from "@/constants";
import { getGnGResult, getGnGTotal } from "@/firebase/apply";
import Result from "../result/Result";

interface Props {
  result: { label: string; value: number }[];
  data: ListType[];
}

const convertData = ({ result, data }: Props) => {
  const convertResult = result?.map(({ label, value }) => {
    return {
      value: label,
      label: data.find(({ value }) => value === label)?.label ?? 0,
      count: value,
    };
  });
  return convertResult;
};

export default function HistoryResult({
  listData,
  title,
  fieldName,
}: {
  listData: { label: string; value: string }[];
  title: string;
  fieldName: string;
}) {
  const [result, setResult] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);

  const getList = async () => {
    const resultData = await getGnGResult({ field: fieldName });
    const totalData = await getGnGTotal({ field: fieldName });
    if (resultData) {
      setResult(convertData({ result: resultData, data: listData }));
    }
    setTotal(totalData);
  };

  const data = {
    title,
    list: result,
  };

  useEffect(() => {
    getList();
  }, []);

  return <Result data={data} total={total} />;
}
