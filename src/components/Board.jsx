import React from "react";
import Box from "./Box";
import "../assets/Board.css";

const Board = ({ value, onClickingTic }) => {
  return (
    <div className="board_container">
      {value.map((selections, i) => {
        console.log(selections);
        return (
          <Box key={i} value={selections} onClick={() => onClickingTic(i)} />
        );
      })}
    </div>
  );
};

export default Board;
