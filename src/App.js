import { useState } from "react";
import "./css/styles.css";

import Game from "./api/Game.js";

import NavBar from "./components/NavBar/NavBar.jsx";
import JobPage from "./pages/JobPage.jsx";
import BuildingsPage from "./pages/BuildingsPage.jsx";
import SciencePage from "./pages/SciencePage.jsx";
import TerritoryPage from "./pages/TerritoryPage.jsx";
import MutationPage from "./pages/MutationPage.jsx";

export default function App() {
  //Called when navbar
  const [pageState, setPageState] = useState("jobs");
  const changePage = (page) => {
    setPageState(page);
  };
  if (false) {
    //load save
  } else {
    let game = new Game(require("./data/default_game.json"));
  }
  return (
    <div className="App h-screen w-screen">
      <NavBar changePage={changePage} />
      <JobPage visible={pageState === "jobs"} />
      <BuildingsPage
        visible={pageState === "buildings"}
        buildings={require("./data/buildings.json").buildings}
      />
      <SciencePage visible={pageState === "science"} />
      <TerritoryPage visible={pageState === "territory"} />
      <MutationPage visible={pageState === "mutations"} />
    </div>
  );
}
