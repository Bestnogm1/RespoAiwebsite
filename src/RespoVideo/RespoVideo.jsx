import React from "react";
import "./RespoVideo.css";
import TwitterBox from "../svg/TwitterBox";
import RespoReddit from "../svg/RespoReddit";
function RespoVideo(props) {
  return (
    <div className="RespoVideoAndHeader">
      <div className="RespoVideoHeader">
        <h1>
          <span className="RespoVideoHeaderSpan1">
            Grow your audience with Ai generated
          </span>
          <span className="RespoVideoHeaderSpan2">
            post - comments - retweets - replies
          </span>
          <span className="RespoVideoHeaderSpan3">
            In a fraction of the time with a fraction of the effort at no
            charge!
          </span>
        </h1>
      </div>
      <div className="RespoVideo">
        <div className="RespoVideoInner">
          <TwitterBox />
          {/* <RespoReddit /> */}
        </div>
      </div>
    </div>
  );
}

export default RespoVideo;
