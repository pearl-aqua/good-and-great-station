import Poll from "./Poll";

const questionArr = ["60001", "60002", "60003", "60004"];

export default function PollContainer() {
  return (
    <>
      {questionArr.map((el) => (
        <Poll key={el} questionId={el} />
      ))}
    </>
  );
}
