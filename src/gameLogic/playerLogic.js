import Gameboard from "./gameBoardLogic";

function Player() {
  const board = Gameboard();

  return { board };
}

function randomIntOnInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function RealPlayer() {
  const { board } = Player();

  return { board };
}

export function CpuPlayer() {
  const { board } = Player();

  function randomShot(playerBoard) {
    const randomXCoord = randomIntOnInterval(1, 10);
    const randomYCoord = randomIntOnInterval(1, 10);

    const hit = playerBoard.receiveAttack([randomXCoord, randomYCoord]);

    return hit;
  }

  return { board, randomShot };
}
