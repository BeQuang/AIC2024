import Features from "./components/Features/Feature";
import Filter from "./components/Filter/Filter";
import Interface from "./components/Interface/Interface";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="feature-main">
          <Features />
          <Filter />
        </div>
        <div className="interface-main">
          <Interface />
        </div>
      </div>
    </>
  );
}

export default App;
