import { useState } from "react";

import Features from "./components/Features/Feature";
import Filter from "./components/Filter/Filter";
import Interface from "./components/Interface/Interface";

function App() {
  const [response, setResponse] = useState({
    asr: [],
    clip: [],
    image: [],
    object: [],
    ocr: [],
  });

  return (
    <>
      <div className="app-container">
        <div className="feature-main">
          <Features setResponse={setResponse} />
          <Filter />
        </div>
        <div className="interface-main">
          <Interface response={response} />
        </div>
      </div>
    </>
  );
}

export default App;
