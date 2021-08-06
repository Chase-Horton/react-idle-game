import React from "react";
import BuildingCard from "../components/Cards/BuildingCard.jsx";

const BuildingsPage = ({ visible, buildings, currentAmt = 0 }) => {
  //get only unlocked buildings here IMPORTANT
  let unlocked_buildings = buildings;

  if (visible) {
    return (
      <div className="grid grid-cols-3 gap-4 mt-12">
        {unlocked_buildings.map((building) => {
          return (
            <div>
              <BuildingCard
                name={building.name}
                amt={currentAmt}
                cap={building.startCap}
                icon={building.icon}
                stats={building.stats}
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
