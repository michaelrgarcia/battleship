const cpuDomBoard = document.querySelector(".cpu-board");
const playerDomBoard = document.querySelector(".player-board");

const gameInfo = document.querySelector(".game-info");

function playerShotHandler(cpu) {
  cpuDomBoard.addEventListener("click", (e) => {
    const coordinate = e.target;

    if (
      !(
        coordinate.classList.contains("hit") ||
        coordinate.classList.contains("miss")
      )
    ) {
      const { x, y } = coordinate.dataset;

      const shot = cpu.board.receiveAttack([Number(x), Number(y)]); // thanks JavaScript :)

      if (typeof shot === "number") {
        coordinate.classList.add("hit");

        gameInfo.textContent = "Hit!";
      } else if (Array.isArray(shot)) {
        coordinate.classList.add("miss");

        gameInfo.textContent = "Miss.";
      }

      // add a disabled state to the gameboard
    }
  });
}

export default function startGame(player, cpu) {
  let shipsSunk = false;

  while (shipsSunk === false) {
    gameInfo.textContent = "Take your shot.";
    playerShotHandler(cpu);

    shipsSunk = true;
  }

  // will "reassign" next button's event listener to control different stages
}

// will need to create new player and cpu objects!!
