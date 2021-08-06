import React from "react";
import JobCard from "../components/Cards/JobCard.jsx";

const MutationPage = ({ visible }) => {
  if (visible) {
    return (
      <div>
        <h1 className="text-6xl">MUTATIONS</h1>
        <JobCard icon="fa fa-tree" />
      </div>
    );
  } else {
    return null;
  }
};

export default MutationPage;
