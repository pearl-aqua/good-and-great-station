import ApplyCard from "@/components/apply/ApplyCard";
import ButtonHome from "@/components/my/ButtonHome";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const applyInfoResult = {
    name: "lilfreak",
    year: "14",
    songs: ["203", "104", "212", "101", "08"],
    character: "1",
    motiveOption: ["4", "6"],
    motiveText:
      "처음 본 건 문명특급 샤이니편이었고 그 후 오랫동안 입덕 부정기였다가 슴콘 가솔린에서 I know where to go 에서 샤월석 가르키는 것을 보고 인생을 저당 잡힌 것 같습니다.",
  };

  return (
    <div className="flex flex-col gap-4 sm:max-w-full lg:max-w-[450px] lg:px-2 bg-white">
      <ApplyCard applyInfoResult={applyInfoResult} />
      <Card className="px-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-zinc-500">안녕하세요!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:max-w-full lg:max-w-[450px]">
          <div className="flex flex-col pb-4 gap-3 text-xs text-zinc-700">
            <div className="flex flex-wrap w-full">
              작년에 이 투표 페이지
              <a href="https://gas-station-theta.vercel.app">(링크)</a>를
              만들었던 릴프릭입니다
            </div>
            <div className="flex w-full">
              올해도 기범이 생일에 맞춰서 무언가 만들어야지 생각했었는데 마침
              미니 앨범 Good & Great가 오피스 컨셉이여서 거기에 맞춰 만들어보는
              것이 어떨까 생각을 했습니다. 노션으로 프로모션하는 것을 보고
              아이디어를 얻어 입사지원서 컨셉으로 가지고 와 봤습니다.
            </div>
            <div className="flex w-full">
              기범이 생일이 아니라 앨범 발매에 맞추느라 시간이 촉박했고 현생에
              치여서 급하게 만드느라 허술한 부분이 많이 있습니다. 하지만 문득
              작년에 만든 페이지를 다시 보니 1년 동안 저도 성장을 했구나 하는
              것을 느끼며 나름 굿앤그레이트한 시간이 되었습니다. (수면 시간은
              줄었지만요)
            </div>
            <div className="flex w-full">
              또 단순 투표 시스템이 아니라 글자를 적어내야 하는 거라 참여가
              얼마나 있을까 생각을 했었는데 생각보다 많이 지원해주셔서 너무
              감사하게 생각하고 있습니다. 정말 감사드립니다!!
            </div>
            <div className="flex w-full">
              투표 결과가 흥미로워서 재미있게 보았습니다. 릴프릭들의 성향을
              조금이라도 더 알게 되어 매번 즐거운 작업이 되는 것 같아요.
            </div>
            <div className="flex w-full">
              남은 Good & Great 할동도 즐겁게 즐기고 기범이의 생일도 많이
              축하합니다!!
            </div>
            <div className="flex w-full">
              내년 기범이 생일에 가능하면 또 돌아와 보겠습니다. 언제나 Good &
              Great 한 하루 보내시길!.
            </div>
            <div className="flex w-full">
              그리고 기범아 언제나 응원하고 사랑하고 있어!
            </div>
            <div className="flex w-full mt-4">
              p.s - 아래 메뉴 중 버그 리포트가 있습니다. 버그를 발견하신 부분
              남겨주시면 감사하겠습니다. 또한 응원의 메시지나 내년에 보고 싶은
              투표에 대한 의견도 언제나 환영입니다.
            </div>
          </div>
        </CardContent>
      </Card>
      <ButtonHome />
    </div>
  );
}
