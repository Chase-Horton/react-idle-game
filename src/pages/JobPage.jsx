import React from "react";
import JobCard from "../components/Cards/JobCard.jsx";

const JobPage = ({ visible, jobs }) => {
  if (visible) {
    return (
      <div>
        <h1 className="text-6xl pl-6">JOBS</h1>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <JobCard name="Chop Wood" amt="0" cap="10" icon="fa fa-tree" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default JobPage;
