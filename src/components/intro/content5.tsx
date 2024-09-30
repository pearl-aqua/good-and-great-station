import PollContainer from "../poll/PollContainer";
import ResultContainer from "../poll/ResultContainer";
import Timer from "../timer/Timer";
import Typo from "../typo/Typo";

const title = "Pleasure Shop";
// const title = "KEYLAND";
const title1 = "Welcome to the polls";

// const questionArr = ["80006"];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <div className="flex flex-col items-center gap-1 text-zinc-400">
        <div className="flex flex-col items-center">
          <Typo.HeadTitle>{title}</Typo.HeadTitle>
          <Typo.BodyText>{title1}</Typo.BodyText>
        </div>

        {/* <Timer /> */}
      </div>

      <PollContainer />
      {/* <ResultContainer
        title={""}
        subTitle={""}
        date={""}
        questionArr={questionArr}
      /> */}

      {/* <PhoneNumber /> */}

      {/* <TwitterContent /> */}
    </div>
  );
}
