import ApplyCard from "@/components/apply/ApplyCard";
import Typo from "@/components/typo/Typo";

export default function AboutPage() {
  const applyInfoResult = {
    name: "lilfreak",
    year: "14",
    songs: ["203", "104", "212", "101", "08"],
    character: "1",
    motiveOption: ["4", "6"],
    motiveText:
      "계속 입덕 부정기였다가 슴콘 가솔린에서 I know where to go 에서 샤월석 가르키는 것을 보고 인생을 저당 잡힌 것 같습니다.",
  };

  const myText = `"안녕하세요. 릴프릭입니다.
  작년에 이 페이지를 만들었던 사람입니다.
  올해도 기범이 생일에 맞춰서 페이지를 만드려고 했었는데
  마침 미니 앨범 Good & Great 가 오피스 컨셉이라고 하길래
  거기에 맞춰서 만들어보는 것이 어떨까 해서 입사지원서 컨셉으로 가지고 와 봤습니다. 
  
  현생에 치여 급하게 만드느라 허술한 부분이 많이 있었을텐데
  너그럽게 봐주시면 감사하겠습니다. 
  (사실 기범이 생일에 맞추려고 여유롭게 생각하다나 
  앨범 발매에 맞추느라 좀 허겁지겁 만들었어요)

  단순 투표 시스템이 아니라 글자를 적어내야 하는 거라서
  참여가 얼마나 있을까 생각을 했었는데
  생각보다 많이 지원해주셔서 너무너무 감사하게 생각하고 있습니다. 
  다시 한번 감사드립니다.
  
  재미있게 봐주셨으면 좋겠고
  기범이 새앨범 활동도 재미있게 즐겨봅시다.

  `;
  return (
    <div className="sm:max-w-full lg:max-w-[450px] lg:px-2 bg-white">
      <ApplyCard applyInfoResult={applyInfoResult} />
      <Typo.DecsText>{myText}</Typo.DecsText>
    </div>
  );
}
