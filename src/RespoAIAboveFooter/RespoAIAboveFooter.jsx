import React from "react";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import "./RespoAIAboveFooter.css";
function RespoAIAboveFooter(props) {
  return (
    <div className="RespoAIAboveFooter">
      <div className="RespoAIAboveFooterTitle">
        <h1>Add the RespoAI extension today</h1>
      </div>
      <div>
        <RespoLogoSvg />
      </div>
      <div className="RespoAIAboveFooterText">
        Lorem ipsum dolor sit amet consectetur. Faucibus non eget aenean quis
        consequat id tell
      </div>
      <div className="RespoAIAboveFooterTextButtonContainer">
        <div className="RespoAIAboveFooterButton">
          <img src={chromeImgicon} alt="chromeImgicon" />
          Add to Browser
        </div>
      </div>
    </div>
  );
}

export default RespoAIAboveFooter;
