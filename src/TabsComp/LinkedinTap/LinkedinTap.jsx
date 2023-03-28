import React from "react";
import styles from "./LinkedinTap.module.css";
import LinkedinLogoSvg from "../../svg/LinkedinLogoSvg";
import LinkedinHeaderSvg from "../../svg/LinkedinHeaderSvg";
import LinkedinButton from "../../svg/LinkedinButton";
import RespoAILogo from "../../svg/RespoAILogo";
import LinkedinRespoAi from "../../svg/LinkedinRespoAi";
function LinkedinTap({}) {
  return (
    <div className={styles.LinkedinTap}>
      <div className={styles.LinkedinTapMainContainer}>
        <LinkedinHeaderSvg />
        <div>
          <h1>asdfadsf</h1>
        </div>
        <div>
          <LinkedinButton />
        </div>
        <div className={styles.LinkedinInput}>
          <div>
            <RespoAILogo />
          </div>
          <div className={styles.LinkedinInputBoxContainer}>
            <div className={styles.LinkedinInputBox}>
              <p>hello word</p>
            </div>
          </div>
        </div>
        <div className={styles.TwitterButtonContainer}>
          <div className={styles.TwitterButtons}>
            <button
              className={styles["button-28"]}
              // onClick={() => animateText()}
            >
              Agree
            </button>
            <button
              className={styles["button-28"]}
              // onClick={() => animateText()}
            >
              Disagree
            </button>
            <button
              className={styles["button-28"]}
              // onClick={() => animateText()}
            >
              Question
            </button>
            <button
              className={styles["button-28"]}
              // onClick={() => animateText()}
            >
              insightful
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinTap;
