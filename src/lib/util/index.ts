export const getSendText = (question: string, selectOption: string[]) => `

Q. ${question} 
A. 나의 답변: [${selectOption}]

`;

const titleText = "2024+KEYLAND+ON+%3A+AND+ON+%3C%23%3E";

export const clickShareButton = (sendText: string, url: string) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${titleText}+${encodeURI(
      sendText
    )}&url=${encodeURI(url)}`
  );
};
