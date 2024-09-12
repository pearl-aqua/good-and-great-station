import PhoneNumber from "../pleasureShop/phone";
import PollContainer from "../poll/PollContainer";
import Timer from "../timer/Timer";
import TwitterContent from "../twitter/TwitterContent";
import Typo from "../typo/Typo";

// const title = "Pleasure Shop";
const title = "KEYLAND";
const title1 = "ON AND ON #";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-8">
      <div className="flex flex-col items-center gap-1 text-zinc-400">
        <div className="flex flex-col items-center">
          <Typo.H2>{title}</Typo.H2>
          <Typo.H2>{title1}</Typo.H2>
        </div>

        <Timer />
      </div>

      {/* <PhoneNumber /> */}
      <PollContainer />
      {/* <TwitterContent /> */}
    </div>
  );
}
