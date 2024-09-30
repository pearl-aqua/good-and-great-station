import IntroContentFive from "@/components/intro/content5";
import Typo from "@/components/typo/Typo";

// const title = "Pleasure Shop";
// const title1 = "Shop";
// const title = "ON: ADN ON";
// const title1 = "#";
const banner =
  ">> 이곳에 기쁨 투표 드려요 >> 기쁨 투표 하시면 환영합니다 >> 이곳에 기쁨 투표 드려요 >> ";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-[1px] gap-2 text-zinc-700">
        {/* <Typo.SubTitle>{title2}</Typo.SubTitle>
        <div className={`text-8xl font-bold`}>{title3}</div> */}
        <div className="w-full max-w-[400px] h-8 bg-black text-white p-1">
          <div className="animate-marquee text-clip whitespace-nowrap">
            {banner}
          </div>
        </div>

        <IntroContentFive />
      </div>
    </main>
  );
}
