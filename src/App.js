import "./App.css";
import respoImg from "./respoAi.png";
import chromeimg from "./chromeImg2_prev_ui.png";
import cloudVidoe from "./cloudvideo.mp4";
function App() {
  return (
    <div className="App">
      <img src={respoImg} />
      {/* <header className="respoTitle"> RespoAI </header> */}

      <div className="Information">
        <h3></h3>
      </div>
      <div className="progress"></div>
      <div className="chromeLink">
        <h1>WEBSITE COMING SOON</h1>
      </div>
      <div className="moreInfo">
        <div className="">
          <a
            link
            href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma?hl=en&authuser=0"
          >
            <img src={chromeimg} />
          </a>
        </div>
      </div>
      <div>
        <a href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma?hl=en&authuser=0">
          <button className="submitButton">Tutorial Library</button>
        </a>
      </div>
    </div>
  );
}

export default App;
