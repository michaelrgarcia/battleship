import Gameboard from "./gameBoardLogic";

function Player() {
  const board = Gameboard();

  return { board };
}

export function RealPlayer() {
  const { board } = Player();

  return { board };
}

export function CpuPlayer() {
  const { board } = Player();

  // selecting logic goes here

  return { board };
}
