import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [totalBox, setTotalBox] = useState(Array(9).fill(null));
  const [xPlay, setXPlay] = useState(true);
  const [winner, setWinner] = useState(null);
  const [stopGame, setStopGame] = useState(false);
  // const totalBox = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  const winningCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (id) => {
    const updatedBox = totalBox.map((item, index) => {
      // console.log(index, id);
      if (index === id) {
        return xPlay == true ? "X" : "O";
      } else return item;
    });
    setTotalBox(updatedBox);
    const winner = checkWinner(updatedBox);
    // console.log(winner);
    if (winner == "X") {
      setWinner("X");
    } else if (winner == "O") {
      setWinner("O ");
    }

    setXPlay(!xPlay);
  };

  const checkWinner = (check) => {
    for (let i = 0; i < winningCheck.length; i++) {
      const [x, y, z] = winningCheck[i];
      // console.log("X ", check[x], " Y ", check[y], " Z ", check[z]);
      if (check[x] && check[x] === check[y] && check[y] === check[z]) {
        setStopGame(true);
        return check[x];
      }
    }
  };

  const resetGame = () => {
    setTotalBox(Array(9).fill(null));
    setXPlay(true);
    setWinner(null);
    setStopGame(false);
  };

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Board
        value={totalBox}
        onClickingTic={stopGame ? resetGame : handleClick}
      />

      <button
        style={{ padding: "1rem", marginTop: "1rem" }}
        onClick={resetGame}
      >
        Reset
      </button>
      {winner && <p>{winner} WON</p>}
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
