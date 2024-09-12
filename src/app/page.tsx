import IntroContentFive from "@/components/intro/content5";
import Typo from "@/components/typo/Typo";

// const title = "Pleasure Shop";
// const title1 = "Shop";
// const title = "ON: ADN ON";
// const title1 = "#";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-4 gap-4 text-zinc-700">
        {/* <Typo.SubTitle>{title2}</Typo.SubTitle>
        <div className={`text-8xl font-bold`}>{title3}</div> */}

        <IntroContentFive />
      </div>
    </main>
  );
}
