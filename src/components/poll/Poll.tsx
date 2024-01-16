import useNewAuth from "@/hooks/useNewAuth";
import userStore from "@/lib/store/user";
import { useState } from "react";
import ViewQuestion from "./ViewQuestion";
import ViewResult from "./ViewResult";

export default function Poll() {
  const { answers } = userStore();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useNewAuth();
  return (
    <>
      {isSubmit || answers["6001"] ? (
        <ViewResult />
      ) : (
        <ViewQuestion setIsSubmit={setIsSubmit} />
      )}
    </>
  );
}
