import Poll from "./Poll";

const questionArr = ["60005", "60006"];

export default function PollContainer() {
  return (
    <>
      {questionArr.map((el) => (
        <Poll key={el} questionId={el} />
      ))}
    </>
  );
}
