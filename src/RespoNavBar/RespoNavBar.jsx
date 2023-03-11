import React from "react";
import "./RespoNavBar.css";

import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";

function RespoNavBar(props) {
  return (
    <div className="RespoNavBarMain">
      <div className="RespoNavLogo">
        <RespoLogoSvg />
      </div>
      <div className="RespoNavBarPages">
        <ul>
          <li>Features</li>
          <li>Pricing</li>

          <div>
            <img src={chromeImgicon} alt="chromeImgicon" />
            Try For Free
          </div>
        </ul>
      </div>
    </div>
  );
}

export default RespoNavBar;
