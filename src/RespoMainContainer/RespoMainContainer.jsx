import React from "react";
import RespoBodyTop from "../RespoBodyTop/RespoBodyTop";
import RespoVideo from "../RespoVideo/RespoVideo";
import RespoRefrences from "../RespoRefrences/RespoRefrences";
import ReposUnderReferences from "../ReposUnderReferences/ReposUnderReferences";
import RespoBanner from "../RespoBanner/RespoBanner";
import RespoReviews from "../RespoReviews/RespoReviews";
import RespoAiQuestions from "../RespoAiQuestions/RespoAiQuestions";
import RespoAIAboveFooter from "../RespoAIAboveFooter/RespoAIAboveFooter";
import "./RespoMainContainer.css";
import RespoNavBar from "../RespoNavBar/RespoNavBar";
function RespoMainContainer(props) {
  return (
    <div className="RespoMainContainer">
      <RespoNavBar />
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
