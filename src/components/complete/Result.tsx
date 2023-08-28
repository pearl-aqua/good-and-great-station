import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Typo from "../typo/Typo";
import ResultRow from "../custom/ResultRow";

const data = [
  {
    label: 2003,
    value: "45%",
  },
  {
    label: 2003,
    value: "45%",
  },
  {
    label: 2003,
    value: "45%",
  },
];

export default function Result() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardDescription>입덕 시기</CardDescription>
      </CardHeader>
      <CardContent>
        <Typo.Title>2023</Typo.Title>
      </CardContent>
      <CardContent>
        {data.map(({ label, value }) => (
          <ResultRow key={label} label={label} value={value} />
        ))}
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="ghost" onClick={() => null}>
          더보기
        </Button>
      </CardFooter>
    </Card>
  );
}
