import renderBoard from "./domLogic/boardRender";
import { RealPlayer, CpuPlayer } from "./gameLogic/playerLogic";

const player = RealPlayer();
const playerDomBoard = document.querySelector(".player-board");

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

renderBoard(player.board.getBoard(), playerDomBoard);

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

renderBoard(cpu.board.getBoard(), cpuDomBoard);
