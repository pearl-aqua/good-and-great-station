import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>입사 지원서 작성하기</CardTitle>
        <CardDescription>아래 내용을 작성해주세요.</CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
}
