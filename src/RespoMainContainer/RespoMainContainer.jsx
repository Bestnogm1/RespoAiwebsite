import React from "react";
import RespoBodyTop from "../RespoBodyTop/RespoBodyTop";
import RespoVideo from "../RespoVideo/RespoVideo";
import RespoRefrences from "../RespoRefrences/RespoRefrences";
import ReposUnderReferences from "../ReposUnderReferences/ReposUnderReferences";
import RespoBanner from "../RespoBanner/RespoBanner";
import RespoReviews from "../RespoReviews/RespoReviews";
import RespoAiQuestions from "../RespoAiQuestions/RespoAiQuestions";
import RespoAIAboveFooter from "../RespoAIAboveFooter/RespoAIAboveFooter";

function RespoMainContainer(props) {
  return (
    <div>
      <RespoBodyTop />
      <RespoVideo />
      <RespoRefrences />
      <ReposUnderReferences />
      <RespoBanner />
      {/* <RespoReviews /> */}
      <RespoAiQuestions />
      <RespoAIAboveFooter />
    </div>
  );
}

export default RespoMainContainer;
