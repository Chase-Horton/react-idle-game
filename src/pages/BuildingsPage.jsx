import React from "react";
import BuildingCard from "../components/Cards/BuildingCard.jsx";

const BuildingsPage = ({visible, buildings, sendBuilding}) => {
  //get only unlocked buildings here IMPORTANT
  let unlocked_buildings = buildings;

  function sendUpBuildingAction(id, amt){
    sendBuilding(id, amt);
  }
  if (visible) {
    return (
      <div className="grid grid-cols-3 gap-4 mt-12">
        {unlocked_buildings.map((building) => {
          return (
            <div className="flex items-center justify-center">
              <BuildingCard
                key={building.name}
                name={building.name}
                amt={building.currentAmt}
                cap={building.startCap}
                icon={building.icon}
                stats={building.stats}
                sendUpBuildingAction={sendUpBuildingAction}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default BuildingsPage;
