import ResultContainer from "../poll/ResultContainer";

import Typo from "../typo/Typo";

const title = "Pleasure Shop";
const title1 = "Welcome to the polls";

const questionArr = [
  "80006",
  "80007",
  "80001",
  "80002",
  "80004",
  "80003",
  "80005",
];

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

      {/* <PollContainer /> */}
      <ResultContainer
        title={""}
        subTitle={""}
        date={""}
        questionArr={questionArr}
      />
    </div>
  );
}
