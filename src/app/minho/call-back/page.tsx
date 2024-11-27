import PollContainer from "@/components/poll/PollContainer";
import Typo from "@/components/typo/Typo";

const title = "Call Back";
const title1 = "이건 내 진심의 고백";

export default function CallbackPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <div className="flex flex-col items-center gap-1 text-zinc-400">
        <div className="flex flex-col items-center">
          <Typo.HeadTitle>{title}</Typo.HeadTitle>
          <Typo.BodyText>{title1}</Typo.BodyText>
        </div>
      </div>

      <PollContainer />
    </div>
  );
}
