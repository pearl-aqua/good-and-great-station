import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Complete() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>지원이 완료되었습니다</CardTitle>
        </CardHeader>
        <CardFooter className="gap-2">
          <Button variant="outline" onClick={() => null}>
            나의 지원서 보기
          </Button>
          <Link href="/">
            <Button variant="outline">지원 공고로 돌아가기</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
