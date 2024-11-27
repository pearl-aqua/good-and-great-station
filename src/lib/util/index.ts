export const getSendText = (
  question: string,
  selectOption: string,
  percent?: string
) => `

Q. ${question} 
A. 나의 답변: [${selectOption}]

`;

const titleText = "CALL BACK & Mean: of my first";

export const clickShareButton = (sendText: string, url: string) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${titleText}+${encodeURI(
      sendText
    )}&url=${encodeURI(url)}`
  );
};

export const getSendTextTwo = (question: string, selectOption: string[]) => `

Q. ${question} 
A. ${selectOption}

`;
