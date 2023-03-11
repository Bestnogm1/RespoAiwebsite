import React from "react";
import RespoStarSvg from "../svg/RespoStarSvg";
import "./RespoReviews.css";
import chromeImgicon from "../img/chromeImgicon-removebg-preview.png";
function RespoReviews(props) {
  return (
    <div className="RespoReviews">
      <div className="RespoReview">
        <div className="RespoReviewsImgContainer">
          <div className="RespoReviewsImg">
            <img src={chromeImgicon} alt="chromeImgicon" />
          </div>
          <div className="RespoReviewsNameAndStar">
            <h3>Jane Doe</h3>
            <RespoStarSvg />
            <RespoStarSvg />
            <RespoStarSvg />
            <RespoStarSvg />
            <RespoStarSvg />
          </div>
        </div>
        <div className="RespoReviewsText">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem semper vitae
            consectetur faucibus ut pulvinar massa interdum vel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RespoReviews;
