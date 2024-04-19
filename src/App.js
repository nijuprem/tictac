import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [totalBox, setTotalBox] = useState(Array(9).fill(null));
  const [xPlay, setXPlay] = useState(true);
  // const totalBox = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  const handleClick = (id) => {
    const updatedBox = totalBox.map((item, index) => {
      console.log(index, id);
      if (index === id) {
        return xPlay == true ? "X" : "O";
      } else return item;
    });
    // console.log([...totalBox, ...updatedBox]);
    setTotalBox(updatedBox);
    setXPlay(!xPlay);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Board value={totalBox} onClickingTic={handleClick} />
    </div>
  );
}

export default App;

// Steps
// 1. Boaarad component inside that boxes for each x -0
// 2. handleclick of x,0
//  2. handle playerchange
// 3.  check winning condition
//  4. show winner
