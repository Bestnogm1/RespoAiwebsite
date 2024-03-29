import "./RespoLogoSvg.css";
import { Link } from "react-router-dom";
export const RespoLogoSvg = () => {
  return (
    <>
      <div className="RespoLogoSvgContainer">
        <Link
          to="/"
          className="RespoLogoSvgContainer"
          style={{
            color: "black",
            "text-decoration": "none",
          }}
        >
          <svg
            className="svgLogo"
            width="70"
            height="56"
            viewBox="0 0 70 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.35913"
              y="7"
              width="63.6408"
              height="32.8252"
              rx="8"
              fill="url(#paint0_linear_381_1537)"
            />
            <path
              d="M49.8321 8.31502C50.2226 7.92449 50.2226 7.29133 49.8321 6.9008L43.4681 0.536842C43.0776 0.146318 42.4445 0.146318 42.0539 0.536842C41.6634 0.927367 41.6634 1.56053 42.0539 1.95106L47.7108 7.60791L42.0539 13.2648C41.6634 13.6553 41.6634 14.2885 42.0539 14.679C42.4445 15.0695 43.0776 15.0695 43.4681 14.679L49.8321 8.31502ZM20.4248 40.4829C20.9771 40.4829 21.4248 40.0352 21.4248 39.4829C21.4248 38.9306 20.9771 38.4829 20.4248 38.4829V40.4829ZM49.125 6.60791H10.25V8.60791H49.125V6.60791ZM4.25 12.6079V34.4829H6.25V12.6079H4.25ZM10.25 40.4829H20.4248V38.4829H10.25V40.4829ZM4.25 34.4829C4.25 37.7966 6.93629 40.4829 10.25 40.4829V38.4829C8.04086 38.4829 6.25 36.6921 6.25 34.4829H4.25ZM10.25 6.60791C6.93629 6.60791 4.25 9.2942 4.25 12.6079H6.25C6.25 10.3988 8.04086 8.60791 10.25 8.60791V6.60791Z"
              fill="black"
            />
            <path
              d="M24.4179 38.7758C24.0274 39.1663 24.0274 39.7995 24.4179 40.19L30.7819 46.554C31.1724 46.9445 31.8055 46.9445 32.1961 46.554C32.5866 46.1635 32.5866 45.5303 32.1961 45.1398L26.5392 39.4829L32.1961 33.8261C32.5866 33.4355 32.5866 32.8024 32.1961 32.4118C31.8055 32.0213 31.1724 32.0213 30.7819 32.4118L24.4179 38.7758ZM53.8252 6.60791C53.2729 6.60791 52.8252 7.05563 52.8252 7.60791C52.8252 8.1602 53.2729 8.60791 53.8252 8.60791L53.8252 6.60791ZM25.125 40.4829L64 40.4829L64 38.4829L25.125 38.4829L25.125 40.4829ZM70 34.4829L70 12.6079L68 12.6079L68 34.4829L70 34.4829ZM64 6.60791L53.8252 6.60791L53.8252 8.60791L64 8.60792L64 6.60791ZM70 12.6079C70 9.2942 67.3137 6.60791 64 6.60791L64 8.60792C66.2091 8.60792 68 10.3988 68 12.6079L70 12.6079ZM64 40.4829C67.3137 40.4829 70 37.7966 70 34.4829L68 34.4829C68 36.692 66.2091 38.4829 64 38.4829L64 40.4829Z"
              fill="black"
            />
            <path
              d="M46.125 50.6986V39.4829H63.375L49.4735 52.1755C48.1898 53.3477 46.125 52.4369 46.125 50.6986Z"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <circle
              cx="19.3125"
              cy="23.5454"
              r="4.4375"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M42.875 23.5454C42.875 26.0295 40.9394 27.9829 38.625 27.9829C36.3106 27.9829 34.375 26.0295 34.375 23.5454C34.375 21.0613 36.3106 19.1079 38.625 19.1079C40.9394 19.1079 42.875 21.0613 42.875 23.5454Z"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <circle
              cx="57.9375"
              cy="23.5454"
              r="4.4375"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_381_1537"
                x1="1.75063"
                y1="23.4126"
                x2="82.4498"
                y2="23.4126"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#27B1FF" />
                <stop offset="0.321138" stop-color="#9D75F2" />
                <stop offset="0.666667" stop-color="#00B994" />
                <stop offset="1" stop-color="#FFDA79" />
              </linearGradient>
            </defs>
          </svg>

          <h1>RespoAI</h1>
        </Link>
      </div>
    </>
  );
};
