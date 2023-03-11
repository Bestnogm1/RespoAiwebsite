import React from "react";
import "./ReposUnderReferences.css";
import typingonkeyboard from "../img/typingonkeyboard.png";
import RespoXSvg from "../svg/RespoXSvg";

function ReposUnderReferences(props) {
  return (
    <div className="ReposUnderReferences">
      <div className="ReposUnderReferencesTextContainer">
        <div className="ReposUnderReferencesText">
          <header>How out tool drives growth</header>
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
          <RespoXSvg />
          <h1>Connect with your social media audience</h1>
        </div>
        <div className="ReposUnderReferencesXAndTag">
          <RespoXSvg />
          <h1>Build your brand and reputation</h1>
        </div>
        <div className="ReposUnderReferencesXAndTag">
          <RespoXSvg />
          <h1>Attract new followers and expand your reach</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>
            To grow and thrive on social media, you need to actively engage with
            your audience while also reaching out to new ones. This requires a
            thoughtful and strategic approach to crafting messages that resonate
            with your target audience and generate interest and engagement.
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ReposUnderReferences;
