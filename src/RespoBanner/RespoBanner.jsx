import React from "react";
import "./RespoBanner.css";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
function RespoBanner(props) {
  return (
    <div className="RespoBanner">
      <div className="RespoBannerText">
        <h1 className="RespoBannerTextTitle">Engagement made easy</h1>
        <h1 className="RespoBannerTextParagraph">
          Start creating meaning messages to get in touch with your community
        </h1>
        <div className="RespoBannerChromeImg">
          <img src={chromeImgicon} alt="chromeImgicon" />
          Add to Browser
        </div>
      </div>
    </div>
  );
}

export default RespoBanner;
