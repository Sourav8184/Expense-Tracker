import { useState } from "react";
import "./App.scss";
import BgAnimation from "./components/bgAnimation/BgAnimation";
import Navigation from "./components/navigation/Navigation";
function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="app-container">
      <BgAnimation />
      <main className="app-main">
        <Navigation active={active} setActive={setActive} />
      </main>
    </div>
  );
}

export default App;
