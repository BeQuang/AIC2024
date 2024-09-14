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
  const [isSimilarImage, setIsSimilarImage] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="feature-main">
          <Features
            setResponse={setResponse}
            setIsSimilarImage={setIsSimilarImage}
          />
          <Filter
            setResponse={setResponse}
            setIsSimilarImage={setIsSimilarImage}
          />
        </div>
        <div className="interface-main">
          <Interface
            response={response}
            isSimilarImage={isSimilarImage}
            setIsSimilarImage={setIsSimilarImage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
