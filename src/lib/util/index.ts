export const getSendText = (
  question: string,
  selectOption: string,
  percent?: string
) => `

Q. ${question} 
A. 나의 답변: [${selectOption}]

`;

const titleText = "2024+KEYLAND+ON%3AAND+ON+%23";

export const clickShareButton = (sendText: string, url: string) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${titleText}+${encodeURI(
      sendText
    )}&url=${encodeURI(url)}`
  );
};
