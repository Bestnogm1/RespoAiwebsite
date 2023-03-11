import React from "react";
import "./RespoBodyTop.css";
import twitterLook from "../img/testing.png";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import TwitterBox from "../svg/TwitterBox";
function RespoBodyTop(props) {
  return (
    <div className="RespoBodyTop">
      <div className="RespoBodyTopHeader">Engagement made easy</div>
      <div className="RespoBodyTopBody">
        Welcome to Respo AI - the tool that empowers you to hack your
        <span>way to grow on social media with the click of a button.</span>
        <div className="RespoBodyTopBodyButtonContainer">
          <div className="RespoBodyTopBodyButton">
            <img src={chromeImgicon} alt="chromeImgicon" />
            Try For Free
          </div>
        </div>
      </div>
      <div className="RespoBodyTopDescriptionImg">
        <div className="RespoBodyTopDescription">
          <header className="RespoBodyTopDescriptionHeader">
            Innovate your interaction
          </header>
          <h1>
            With Respo AI, you can say goodbye to generic messages and hello to
            more meaningful interactions. Our platform uses AI language tools to
            help you produce attention-grabbing messages that are intriguing and
            efficient, making it the ultimate growth-hacking tool for social
            media.
          </h1>
          <div className="RespoBodyTopDescriptionButton">
            <button>Learn More</button>
          </div>
        </div>
        <div className="RespoBodyTopImg">
          <TwitterBox />
        </div>
      </div>
    </div>
  );
}

export default RespoBodyTop;
