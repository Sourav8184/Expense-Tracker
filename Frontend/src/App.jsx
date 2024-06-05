import { useState } from "react";
import "./App.scss";
import BgAnimation from "./components/bgAnimation/BgAnimation";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import Income from "./components/income/Income";
import Expenses from "./components/expense/Expenses";

function App() {
  const [active, setActive] = useState(0);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="app-container">
      <BgAnimation />
      <main className="app-main">
        <Navigation active={active} setActive={setActive} />
        <main className="app-main-main">{displayData()}</main>
      </main>
    </div>
  );
}

export default App;
