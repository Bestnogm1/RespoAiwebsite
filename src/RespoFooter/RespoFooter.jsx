import React from "react";
import "./RespoFooter.css";
import { RespoLogoSvg } from "../svg/RespoLogoSvg";

function RespoFooter(props) {
  return (
    <div className="RespoFooter">
      <div className="RespoFooterLogo">
        <RespoLogoSvg />
      </div>
    </div>
  );
}

export default RespoFooter;
