import React, { useState } from "react";
import RespoAiPlusButton from "../svg/RespoAiPlusButton";
import "./RespoAiQuestions.css";
import { respoAiQuestionsData } from "./RespoAiquestionData";
function RespoAiQuestions(props) {
  const [respoAiQuestionData] = useState(respoAiQuestionsData);

  const [toggle1, setaToggel1] = useState(true);
  const [toggle2, setaToggel2] = useState(true);
  const [toggle3, setaToggel3] = useState(true);
  const [toggle4, setaToggel4] = useState(true);
  const testing = (e) => {
    console.log(e);
  };
  return (
    <div className="RespoAiQuestions">
      <div className="RespoAiQuestionsHeader">
        <header>Frequently Asked Questions</header>
      </div>
      <div className="RespoAiAllQuestions">
        <div className="RespoAiAllQuestionsDropDown1">
          <div className="RespoAiAllQuestionsDropIcon">
            <div className="RespoAiAllQuestionsIcon">
              <button
                onClick={() => setaToggel1((current) => !current)}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <RespoAiPlusButton />
              </button>
              Can I use the AI Chrome extension across different platforms and
              websites?
            </div>
            <div
              className="RespoAiAllQuestionsDropDescription"
              style={{ display: toggle1 ? "none" : "block" }}
            >
              Yes! Our AI Chrome extension is designed to be versatile and
              compatible with various platforms and websites including Twitter,
              LinkedIn, and Reddit. Just click on the extension's icon in your
              browser's toolbar and let the AI assistant guide you.
            </div>
          </div>
          <div className="RespoAiAllQuestionsDropIcon">
            <div className="RespoAiAllQuestionsIcon">
              <button
                onClick={() => setaToggel2((current) => !current)}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <RespoAiPlusButton />
              </button>
              Is my data secure while using the AI Chrome extension?
            </div>
            <div
              className="RespoAiAllQuestionsDropDescription"
              style={{ display: toggle2 ? "none" : "block" }}
            >
              We take data privacy and security very seriously. The AI Chrome
              extension processes your text locally on your device without
              transmitting any data to external servers. We also do not store
              any of your personal information or conversation history. Please
              refer to our privacy policy for more details on how we protect
              your data.
            </div>
          </div>
        </div>
        <div className="RespoAiAllQuestionsDropDown1">
          <div className="RespoAiAllQuestionsDropIcon">
            <div className="RespoAiAllQuestionsIcon">
              <button
                onClick={(e) => setaToggel3((current) => !current)}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <RespoAiPlusButton />
              </button>
              How can I provide feedback or report issues with the AI Chrome
              extension?
            </div>
            <div
              className="RespoAiAllQuestionsDropDescription"
              style={{ display: toggle3 ? "none" : "block" }}
            >
              If you encounter any issues or have suggestions for improvements,
              please visit our support page or contact us directly via the email
              provided in the extension's description in the Chrome Web Store
            </div>
          </div>
          <div className="RespoAiAllQuestionsDropIcon">
            <div className="RespoAiAllQuestionsIcon">
              <button
                onClick={(e) => setaToggel4((current) => !current)}
                style={{ all: "unset", cursor: "pointer", display: "block" }}
              >
                <RespoAiPlusButton />
              </button>
              Can I reply to tweets and replies with images or videos?
            </div>
            <div
              className="RespoAiAllQuestionsDropDescription"
              style={{ display: toggle4 ? "none" : "block" }}
            >
              Currently, our Chrome extension allows users to reply to text
              tweets and replies only. We regret to inform that at this time,
              users are unable to reply to images. However, we are actively
              working on developing this feature and plan to enable users to
              reply to both videos and images in the near future.
            </div>
          </div>
          {/* <div className="RespoAiAllQuestionsDropIcon">
            <button
              onClick={(e) => testing(e)}
              style={{ all: "unset", cursor: "pointer" }}
            >
              <RespoAiPlusButton />
            </button>
            How do I get started?
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default RespoAiQuestions;
