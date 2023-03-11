import "./App.css";
import RespoNavBar from "./RespoNavBar/RespoNavBar";
import RespoBodyTop from "./RespoBodyTop/RespoBodyTop";
import RespoVideo from "./RespoVideo/RespoVideo";
import RespoRefrences from "./RespoRefrences/RespoRefrences";
import ReposUnderReferences from "./ReposUnderReferences/ReposUnderReferences";
import RespoBanner from "./RespoBanner/RespoBanner";
import RespoReviews from "./RespoReviews/RespoReviews";
import RespoAiQuestions from "./RespoAiQuestions/RespoAiQuestions";
import RespoFooter from "./RespoFooter/RespoFooter";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <RespoNavBar />
        <RespoBodyTop />
        <RespoVideo />
        <RespoRefrences />
        <ReposUnderReferences />

        <RespoBanner />
        <RespoReviews />
        <RespoAiQuestions />
        <RespoFooter />
      </div>
    </div>
  );
}

export default App;
