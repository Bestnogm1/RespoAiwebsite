import React from "react";
import "./RespoFooter.css";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import FootericonSvg from "./FootericonSvg";
import RespoLogoSvgWhite from "../svg/RespoLogoSvgWhite";

function RespoFooter(props) {
  return (
    <div className="RespoFooter">
      <div className="RespoFooterContainer">
        <div className="RespoFooterLogo">
          <RespoLogoSvgWhite />
          <div className="RespoFooterChromeImg">
            <img src={chromeImgicon} alt="chromeImgicon" />
            Add to Browser
          </div>
        </div>
        <div className="RespoFooterLogo">
          <a href="/">Follow Us</a>

          <FootericonSvg />
        </div>
        <div className="RespoFooterLogo">
          <a href="/">Features</a>
        </div>
        <div className="RespoFooterLogo">
          <a href="/">Resources</a>
          <a href="/">About</a>
          <a href="/">Contact us</a>
        </div>
        <div className="RespoFooterLogo">
          <a href="/">Pricing</a>
        </div>
      </div>
    </div>
  );
}

export default RespoFooter;
