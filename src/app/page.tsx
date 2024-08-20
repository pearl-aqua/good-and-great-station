import IntroContentFive from "@/components/intro/content5";
import Typo from "@/components/typo/Typo";

const title = "ON ADN ON";
const title2 = "#";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-8 gap-4">
        <Typo.SubTitle>{title}</Typo.SubTitle>
        <div className={`text-8xl font-bold`}>{title2}</div>

        <IntroContentFive />
      </div>
    </main>
  );
}
