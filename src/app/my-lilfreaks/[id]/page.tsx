import Image from "next/image";
import { getApplyInfo } from "@/firebase/apply";
import ApplyCard from "@/components/apply/ApplyCard";
import MyButtonTwo from "@/components/my/ButtonTwo";
import EmployeeCard from "@/components/employee/EmployeeCard";
import logo from "@/image/logo-lf.png";

export default async function MyApplyPage(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  const applyInfoResult = await getApplyInfo({ applyNumber: id });

  const { userId } = applyInfoResult;

  const shareUI = `little-and-freaks.vercel.app/my-lilfreaks/${id}`;

  return (
    <div
      id="capture_area"
      className="flex flex-col sm:max-w-full lg:max-w-[450px] lg:px-2 bg-white gap-3"
    >
      <div className="flex flex-row justify-between items-center mb-2">
        <div className="font-bold text-zinc-500">Little&Freaks 사원 정보</div>
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          placeholder="blur"
        />
      </div>
      <ApplyCard applyInfoResult={applyInfoResult} />
      <EmployeeCard applyInfoResult={applyInfoResult} />
      <MyButtonTwo url={shareUI} userId={userId} />
    </div>
  );
}
