import React from "react";

class BuildingCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.amt = props.amt;
    this.cap = props.cap;
    this.icon = props.icon;
    this.stats = props.stats;
  }

  render() {
    return (
      <div
        id={["building-card-", this.name].join("")}
        className="ml-8 w-56 flex flex-col"
      >
        <div className="flex justify-center px-3 align-middle py-4 rounded-t font-center px-3 py-1 bg-gray-300 text-gray-800 shadow-lg border-b-2 border-gray-400 ">
          <i className={["text-6xl", this.icon].join(" ")}></i>
        </div>
        <div className="font-center text-gray-800 text-lg bg-gray-300 border-b-2 border-gray-400">
          {this.stats}
        </div>
        <div className="flex inline-flex w-56">
          <button className="w-1/5 align-middle border-r-2 border-gray-400 pb-2 rounded-bl font-bold font-center px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-lg">
            -
          </button>
          <span className="w-full align-middle text-center pb-2 font-bold font-center px-3 py-1 bg-gray-300 text-gray-800 shadow-lg-b">
            {this.name} {this.amt}/{this.cap}
          </span>
          <button className="w-1/5 align-middle border-l-2 border-gray-400 pb-2 rounded-br font-bold font-center px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-lg-b">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default BuildingCard;
