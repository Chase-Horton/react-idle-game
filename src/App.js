import { useState } from "react";
import "./css/styles.css";

import Game from "./api/Game.js";

import NavBar from "./components/NavBar/NavBar.jsx";
import JobPage from "./pages/JobPage.jsx";
import BuildingsPage from "./pages/BuildingsPage.jsx";
import SciencePage from "./pages/SciencePage.jsx";
import TerritoryPage from "./pages/TerritoryPage.jsx";
import MutationPage from "./pages/MutationPage.jsx";
import ProductionPage from "./pages/ProductionPage.jsx";

export default function App() {
  //Called when navbar changes page
  const [pageState, setPageState] = useState("jobs");
  const changePage = (page) => {
    setPageState(page);
  };

  let buildings = require("./data/buildings.json").buildings;
  if (false) {
    //load save
  } else {
    let game = new Game(require("./data/default_game.json"));
  }
  //called when onclick event is called in building card, propogated up through buildings page
  function onBuildingPurchase(buildingPurchaseId, amt){
    console.log(buildingPurchaseId);
    console.log(amt);
    //Update Building inside game here, possibly call another function
  }

  return (
    <div className="App h-screen w-screen">
      <NavBar changePage={changePage} />

      <div id="pageHolder">
        <JobPage visible={pageState === "jobs"} />


        <BuildingsPage
          visible={pageState === "buildings"}
          buildings={buildings}
          sendBuilding={onBuildingPurchase}
        />


        <ProductionPage 
          visible={pageState === "production" /*CHANGE ALL OF THE FOLLOWING TO USE STATE INSTEAD OF */}
          units = {2}
          food={500}
          water={1000}
          knowledge = {0}
          territory={0}
          mutagens={0}
        />


        <SciencePage visible={pageState === "science"} />


        <TerritoryPage visible={pageState === "territory"} />


        <MutationPage visible={pageState === "mutations"} />
      </div>
    </div>
  );
}
