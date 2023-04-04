import React from "react";
import "./RespoBodyTop.css";

import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";

import TabsComp from "../TabsComp/TabsComp";
function RespoBodyTop(props) {
  return (
    <div className="RespoBodyTop">
      <div className="RespoBodyTopHeader">Engagement made easy</div>
      <div className="RespoBodyTopBody">
        <h1>
          Welcome to Respo AI - the tool that empowers you to hack your
          <span>way to grow on social media with the click of a button.</span>
        </h1>
        <div className="RespoBannerChromeContainer">
          <div className="RespoBannerChromeImg">
            <img src={chromeImgicon} alt="chromeImgicon" />
            Add to Browser
          </div>
        </div>
      </div>
      <div className="RespoBodyTopDescriptionImg">
        <div className="RespoBodyTopDescription">
          <header className="RespoBodyTopDescriptionHeader">
            Innovate your interaction
          </header>
          <p>
            With Respo AI, you can say goodbye to generic messages and hello to
            more meaningful interactions. Our platform uses AI language tools to
            help you produce attention-grabbing messages that are intriguing and
            efficient, making it the ultimate growth-hacking tool for social
            media.
          </p>
          <div className="RespoBannerChromeImg">
            <img src={chromeImgicon} alt="chromeImgicon" />
            Add to Browser
          </div>
        </div>
        <div className="RespoBodyTopImg">
          <TabsComp />
        </div>
      </div>
    </div>
  );
}

export default RespoBodyTop;
