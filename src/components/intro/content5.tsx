import PollContainer from "../poll/PollContainer";
import Timer from "../timer/Timer";
import TwitterContent from "../twitter/TwitterContent";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Timer />
      {/* <PollContainer /> */}
      {/* <TwitterContent /> */}
    </div>
  );
}
