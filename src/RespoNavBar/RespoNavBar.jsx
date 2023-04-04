import React from "react";
import "./RespoNavBar.css";

import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";
import { Link } from "react-router-dom";

function RespoNavBar(props) {
  return (
    <div className="RespoNavBarMain">
      <div className="RespoNavLogo">
        <RespoLogoSvg />
      </div>
      <div className="RespoNavBarPages">
        <ul>
          <li>Features</li>
          <Link
            to="/price"
            style={{
              color: "black",
              "text-decoration": "none",
            }}
          >
            <li>Pricing</li>
          </Link>
          {/* <a href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma"> */}

          <div>
            <img src={chromeImgicon} alt="chromeImgicon" />
            <a href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma">
              Try For Free
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default RespoNavBar;
