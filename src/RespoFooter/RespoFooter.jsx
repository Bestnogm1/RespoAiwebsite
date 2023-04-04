import React from "react";
import "./RespoFooter.css";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
import FootericonSvg from "./FootericonSvg";
import RespoLogoSvgWhite from "../svg/RespoLogoSvgWhite";
import { Link } from "react-router-dom";

function RespoFooter(props) {
  return (
    <div className="RespoFooter">
      <div className="RespoFooterContainer">
        <div className="RespoFooterLogo">
          <RespoLogoSvgWhite />
          <a href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma">
            <div className="RespoFooterChromeImg">
              <img src={chromeImgicon} alt="chromeImgicon" />
              Add to Browser
            </div>
          </a>
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

          <a href="/">Contact us</a>
        </div>
        <div className="RespoFooterLogo">
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>
    </div>
  );
}

export default RespoFooter;
