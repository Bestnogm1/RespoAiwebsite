import React from "react";
import "./ReposUnderReferences.css";
import typingonkeyboard from "../img/typingonkeyboard.png";
import RespoXSvg from "../svg/RespoXSvg";
import VectorIcon1 from "../svg/VectorIcon1";
import VectorIcon2 from "../svg/VectorIcon2";
import VectorIcon3 from "../svg/VectorIcon3";
import RespoReddit from "../svg/RespoReddit";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";

function ReposUnderReferences(props) {
  return (
    <div className="ReposUnderReferences">
      <div className="ReposUnderReferencesTextContainer">
        <div className="ReposUnderReferencesText">
          <header>How our tool drives growth</header>
          <h1>
            To grow and thrive on social media, you need to actively engage with
            your audience while also reaching out to new ones. This requires a
            thoughtful and strategic approach to crafting messages that resonate
            with your target audience and generate interest and engagement.
          </h1>
        </div>
        <div className="ReposUnderReferencesImg">
          <img src={typingonkeyboard} alt="typingonkeyboard" />
        </div>
      </div>
      <div className="ReposUnderReferencesX">
        <div className="ReposUnderReferencesXAndTag">
          <VectorIcon1 />
          <p>Connect with your social media audience</p>
        </div>
        <div className="ReposUnderReferencesXAndTag">
          <VectorIcon2 />
          <p>Build your brand and reputation</p>
        </div>
        <div className="ReposUnderReferencesXAndTag">
          <VectorIcon3 />
          <p>Attract new followers and expand your reach</p>
        </div>
      </div>
      <div className="ReposUnderReferencesTextImg">
        <div className="ReposUnderReferencesHeaderText">
          <header>Drive motivation with the right messaging</header>
          <h1>
            By using our tool, you can quickly and easily generate responses
            that capture the attention of both your existing audience and
            potential new followers. This not only helps to build your brand and
            reputation as an authority in your niche but also drives growth and
            success on social media.
          </h1>

          <div className="ReposUnderReferencesButtonContainer">
            <div className="ReposUnderReferencesButton">
              <img src={chromeImgicon} alt="chromeImgicon" />
              Add to Browser
            </div>
          </div>
        </div>
        <div>
          <RespoReddit />
        </div>
      </div>
    </div>
  );
}

export default ReposUnderReferences;
