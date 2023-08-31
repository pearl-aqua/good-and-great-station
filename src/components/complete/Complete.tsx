"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Preview from "../apply/Preview";

export default function Complete() {
  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>지원이 완료되었습니다</CardTitle>
      </CardHeader>
      <CardFooter className="justify-end">
        <Preview type="complete" />
      </CardFooter>
    </Card>
  );
}
