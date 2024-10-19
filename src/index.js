import {
  hideDomBoard,
  renderBoard,
  showDomBoard,
} from "./domLogic/boardRender";
import {
  activatePlayerShooting,
  cpuTurn,
  playerTurn,
} from "./domLogic/domGameController";
import { RealPlayer, CpuPlayer } from "./gameLogic/playerLogic";

const player = RealPlayer();
const playerDomBoard = document.querySelector(".player-board");

const shuffle = document.getElementById("shuffle");
const go = document.getElementById("go");
const next = document.getElementById("next");

player.board.placeShip([
  [2, 2],
  [2, 3],
  [2, 4],
]);

player.board.placeShip([
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 7],
]);

renderBoard(player.board, playerDomBoard);

const cpu = CpuPlayer();
const cpuDomBoard = document.querySelector(".cpu-board");

cpu.board.placeShip([
  [9, 3],
  [9, 4],
  [9, 5],
]);

cpu.board.placeShip([
  [3, 10],
  [4, 10],
  [5, 10],
]);

shuffle.addEventListener("click", () => {
  // shuffling code. will be located in player logic
});

activatePlayerShooting(cpu.board, cpuDomBoard);

go.addEventListener("click", () => {
  const playerName = document.querySelector("p:nth-child(2)");
  const cpuName = document.querySelector("p:nth-child(4)");

  showDomBoard(cpuName, cpuDomBoard);
  hideDomBoard(playerName, playerDomBoard);

  shuffle.style.display = "none";
  go.style.display = "none";

  next.style.display = "block";

  playerTurn(cpu.board);
});

next.addEventListener("click", () => {
  function playerTurnAllowed() {
    const allowed = cpuDomBoard.ariaDisabled === "false";

    return allowed;
  }

  if (playerTurnAllowed()) {
    playerTurn(cpu.board);
  } else {
    cpuTurn(cpu, player.board);
  }
});
