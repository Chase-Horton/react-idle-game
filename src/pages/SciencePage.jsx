import React from "react";
import JobCard from "../components/Cards/JobCard.jsx";

const SciencePage = ({ visible }) => {
  if (visible) {
    return (
      <div>
        <h1 className="text-6xl">SCIENCE</h1>
        <JobCard icon="fa fa-tree" />
      </div>
    );
  } else {
    return null;
  }
};

export default SciencePage;
