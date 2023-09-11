import { getApplyInfo } from "@/firebase/apply";
import MyButton from "@/components/my/Button";
import ApplyCard from "@/components/apply/ApplyCard";

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
      className="sm:max-w-full lg:max-w-[450px] lg:px-2 bg-white sm:max-h-screen overflow-auto "
    >
      <ApplyCard applyInfoResult={applyInfoResult} />
      <MyButton url={shareUI} userId={userId} />
    </div>
  );
}
