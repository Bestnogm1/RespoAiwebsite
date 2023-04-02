import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import RespoNavBar from "./RespoNavBar/RespoNavBar";
import RespoFooter from "./RespoFooter/RespoFooter";

import RespoMainContainer from "./RespoMainContainer/RespoMainContainer";
import PriceContainer from "./RespoPriceContainer/RespoPriceContainer";

function App() {
  return (
    <div className="App">
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
