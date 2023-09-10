import EmployeeContainer from "@/components/employee/Continer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getApplyInfo } from "@/firebase/apply";

export default async function EmployeePage(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  const applyInfoResult = await getApplyInfo({ applyNumber: id });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Little&Freaks 직원 카드</CardTitle>
        <CardDescription>아래 내용을 작성해주세요.</CardDescription>
      </CardHeader>
      <EmployeeContainer applyInfoResult={applyInfoResult} />
    </Card>
  );
}
