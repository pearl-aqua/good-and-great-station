import Result from "./Result";
import Typo from "../typo/Typo";
import { Button } from "../ui/button";

const yearResult = {
  title: "입덕 시기",
  list: [
    { label: "2023", value: "15%" },
    { label: "2022", value: "14%" },
    { label: "2021", value: "13%" },
    { label: "2020", value: "12%" },
    { label: "2019", value: "11%" },
    { label: "2018", value: "10%" },
    { label: "2017", value: "9%" },
    { label: "2016", value: "8%" },
    { label: "2015", value: "7%" },
    { label: "2014", value: "6%" },
    { label: "2013", value: "5%" },
    { label: "2012", value: "4%" },
    { label: "2011", value: "3%" },
    { label: "2010", value: "2%" },
    { label: "2009", value: "1%" },
  ],
};

export default function ResultContainer() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Typo.H2>지원 현황</Typo.H2>
      <Result data={yearResult} />
      {/* <Result />
      <Result /> */}
      <Button variant="ghost">지원 공고 돌아가기</Button>
    </div>
  );
}
