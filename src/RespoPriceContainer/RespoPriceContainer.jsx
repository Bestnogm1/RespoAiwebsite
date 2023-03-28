import React from "react";
import RespoPriceBodyTop from "./RespoPriceBodyTop/RespoPriceBodyTop";
import RespoPriceTags from "./RespoPriceTags/RespoPriceTags";
import RespoReviews from "../RespoReviews/RespoReviews";
import RespoAiQuestions from "../RespoAiQuestions/RespoAiQuestions";
import RespoAIAboveFooter from "../RespoAIAboveFooter/RespoAIAboveFooter";

function PriceContainer(props) {
  return (
    <div>
      <RespoPriceBodyTop />
      <RespoPriceTags />
      {/* <RespoReviews /> */}
      <RespoAiQuestions />
      <RespoAIAboveFooter />
    </div>
  );
}

export default PriceContainer;
