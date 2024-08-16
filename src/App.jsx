import Features from "./components/Features/Feature";
import Interface from "./components/Interface/Interface";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="feature-main">
          <Features />
        </div>
        <div className="interface-main">
          <Interface />
        </div>
      </div>
    </>
  );
}

export default App;
