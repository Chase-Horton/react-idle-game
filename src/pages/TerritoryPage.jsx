import React from "react";
import JobCard from "../components/Cards/JobCard.jsx";

const TerritoryPage = ({ visible }) => {
  if (visible) {
    return (
      <div>
        <h1 className="text-6xl">TERRITORY</h1>
        <JobCard icon="fa fa-tree" />
      </div>
    );
  } else {
    return null;
  }
};

export default TerritoryPage;
