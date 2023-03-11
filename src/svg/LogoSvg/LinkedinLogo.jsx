import React from "react";
import "./logoSvg.css";

function LinkedinLogo(props) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 200 200"
      className="RedditLogo"
      fill="unset"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4509 10.9835C0 21.967 0 39.6447 0 75V125C0 160.355 0 178.033 11.4509 189.017C22.9018 200 41.3317 200 78.1915 200H130.319C167.179 200 185.609 200 197.06 189.017C208.511 178.033 208.511 160.355 208.511 125V75C208.511 39.6447 208.511 21.967 197.06 10.9835C185.609 0 167.179 0 130.319 0H78.1915C41.3317 0 22.9018 0 11.4509 10.9835ZM52.0422 62.6519C43.457 62.6519 36.4894 55.9002 36.4894 47.576C36.4894 39.2517 43.457 32.5 52.0422 32.5C60.6274 32.5 67.595 39.2517 67.595 47.576C67.595 55.9002 60.6363 62.6519 52.0422 62.6519ZM38.7112 167.5V73.4889H65.3732V167.5H38.7112ZM145.359 167.5H172.021V109.734C172.021 64.8398 122.226 66.4722 109.81 88.5734V73.4889H83.1479V167.5H109.81V119.606C109.81 93.0004 145.359 90.8211 145.359 119.606V167.5Z"
        fill="url(#paint0_linear_115_193)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_115_193"
          x1="104.255"
          y1="0"
          x2="104.255"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0077B5" />
          <stop offset="1" stop-color="#0E6795" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LinkedinLogo;
