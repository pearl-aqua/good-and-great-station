export const getSendText = (
  question: string,
  selectOption: string,
  percent: string
) => `2024 KEYLAND ON:AND ON🔑

Q. ${question} [${selectOption}] 이다
💎 ${percent}의 릴프릭이 같은 답변을 하였습니다.

`;

export const clickShareButton = (sendText: string, url: string) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURI(
      sendText
    )}&url=${encodeURI(url)}`
  );
};
