import { group_buying, pre_order } from "@/constants/twit";
import Typo from "../typo/Typo";
import TwitterContainer from "./TwitterContainer";

export default function TwitterContent() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Typo.SubTitle>예약 판매</Typo.SubTitle>
      <TwitterContainer>{pre_order.map((el) => el.content)}</TwitterContainer>
      <Typo.SubTitle>공동 구매</Typo.SubTitle>
      <TwitterContainer>
        {group_buying.map((el) => el.content)}
      </TwitterContainer>
    </div>
  );
}
