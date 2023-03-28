import { Route, Routes, useLocation } from "react-router-dom";
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
import RespoAIAboveFooter from "./RespoAIAboveFooter/RespoAIAboveFooter";
import RespoMainContainer from "./RespoMainContainer/RespoMainContainer";
import PriceContainer from "./RespoPriceContainer/RespoPriceContainer";

function App() {
  return (
    <div className="App">
      <RespoNavBar />
      <div className="AppContainer">
        <Routes>
          <Route path="/" element={<RespoMainContainer />} />
          <Route path="/price" element={<PriceContainer />} />
        </Routes>
      </div>
      <RespoFooter />
    </div>
  );
}

export default App;
