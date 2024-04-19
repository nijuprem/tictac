import React from "react";
import "../assets/Box.css";

const Box = ({ value, onClickingTic }) => {
  return (
    <div className="box_container" onClick={onClickingTic}>
      {value}
    </div>
  );
};

export default Box;
