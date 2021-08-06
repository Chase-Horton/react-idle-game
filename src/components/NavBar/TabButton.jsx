import React from "react";

const TabButton = (props) => {
  let handleClick = (e) => {
    props.onTabChanged(e.target);
  };
  let classes = props.active ? "tab tab-active" : "tab";
  classes = [classes, props.extraClass].join(" ");
  return (
    <button id={props.name} className={classes} onClick={handleClick}>
      {props.text}
    </button>
  );
};
export default TabButton;
