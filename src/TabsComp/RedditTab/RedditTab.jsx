import React from "react";
import RedditSvg from "../../svg/RedditSvg";
import styles from "./RedditTab.module.css";
import RedditBox from "../../svg/RedditBox";
function RedditTab(props) {
  return (
    <div className={styles.RedditTab}>
      <div className={styles.RedditTabMain}>
        <div className={styles.RedditTabMainRedditImg_line}>
          <div className={styles.RedditSvgRedditImg}>
            <RedditSvg />
          </div>
          <div className={styles.RedditTabRedditLine}></div>
        </div>
        <div className={styles.RedditSvgRedditLine}>
          <div>
            <h4>
              Reddit.com <span>9hr. ago</span>
            </h4>
          </div>
          <div className={styles.RedditTabParagraph}>
            <p className={styles.RedditTabPTag}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              minima numquam ad quo temporibus, nisi aliquid sint doloribus
              placeat quasi hic iure cumque et ut ratione, odio exercitationem
              expedita quia.
            </p>
          </div>
          <div className={styles.RedditTabTextBox}>
            <div className={styles.RedditTabText}>
              <p>
                adipisicing elit. Ipsa minima numquam ad quo temporibus, nisi
                aliquid sint doloribus placeat quasi hic iure cumque et ut
              </p>
            </div>
            <div className={styles.RedditRedditBox}>
              <RedditBox />
            </div>
            <div className={styles.RedditButtonsContainer}>
              <div className={styles.RedditButtons}>
                <button className={styles["button-28"]}>Agree</button>
                <button className={styles["button-28"]}>Disagree</button>
                <button className={styles["button-28"]}>Question</button>
                <button className={styles["button-28"]}>insightful</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedditTab;
