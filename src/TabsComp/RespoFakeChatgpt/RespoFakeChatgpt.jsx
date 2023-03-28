import React, { useEffect } from "react";
import { useState } from "react";

function RespoFakeChatgpt({}) {
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
    <div className="chat-gpt">
      {text}
      <button
        onClick={() => {
          animateText();
        }}
      >
        Start Animation
      </button>
    </div>
  );
}

export default RespoFakeChatgpt;
