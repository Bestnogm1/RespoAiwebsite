import { useState } from "react";
import styles from "./TwitterTap.module.css";
import GoogleSvg from "../../svg/GoogleSvg";
import GoldCheckMark from "../../svg/GoldCheckMark";
import RespoAILogo from "../../svg/RespoAILogo";
import TwitterBottom from "../../svg/TwitterBottom";
import RespoFakeChatgpt from "../RespoFakeChatgpt/RespoFakeChatgpt";

function TwitterTap(props) {
  const [text, setText] = useState("");
  const animateText = () => {
    // const randomText = ["", "", ""];
    const newText = "This is an example of animated text using ChatGPT";
    let i = 0;
    let tempText = "";
    const timer = setInterval(() => {
      if (i >= newText.length) {
        clearInterval(timer);
        setText(tempText);
      } else {
        tempText += newText[i];
        setText(tempText);
        i++;
      }
    }, 50);
  };
  return (
    <div className={styles.TwitterTap}>
      <div className={styles.TwitterTapInnerContainer}>
        <div className={styles.TwitterTapX_X_unsent}>
          <span className={styles.TwitterTapX}>X</span>
          <span className={styles.Twitter_unsent}>Unset Tweets</span>
        </div>
      </div>
      <div className={styles.TwitterSender}>
        <div className={styles.TwitterGoogleImg_Header_text}>
          <div className={styles.TwitterGoogleImg}>
            <GoogleSvg />
          </div>
          <div className={styles.TwitterGoogleImg_Header}>
            <div className={styles.TwitterGoogleImg_Verified}>
              <h1>
                Google
                <span>
                  <GoldCheckMark />
                </span>
              </h1>
              <span>@google</span>
            </div>
            <div className={styles.TwitterGoogleImg_text}>
              <h4>Respo Ai is changing the game</h4>
            </div>
          </div>
        </div>
        <div className={styles.TwitterGoogleImg_Header_editableText}>
          <div className={styles.TwitterGoogleImg}>
            <RespoAILogo />
          </div>
          <div className={styles.TwitterGoogleImg_Header}>
            <div className={styles.TwitterGoogleImg_text}>
              <h4>{text}</h4>
            </div>
          </div>
        </div>
        <div className={styles.TwitterButtonContainer}>
          <div className={styles.TwitterButtons}>
            <button
              className={styles["button-28"]}
              onClick={() => animateText()}
            >
              Agree
            </button>
            <button
              className={styles["button-28"]}
              onClick={() => animateText()}
            >
              Disagree
            </button>
            <button
              className={styles["button-28"]}
              onClick={() => animateText()}
            >
              Question
            </button>
            <button
              className={styles["button-28"]}
              onClick={() => animateText()}
            >
              insightful
            </button>
          </div>
        </div>
        <div className={styles.TwitterBottom}>
          <TwitterBottom />
        </div>
      </div>
    </div>
  );
}

export default TwitterTap;
