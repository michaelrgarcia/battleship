import Gameboard from "./gameBoardLogic";

function randomIntOnInterval(min, max) {
  // closed interval (includes endpoints)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateHorizontalShip(shipLength, board) {
  const sharedYCoord = randomIntOnInterval(1, 10);

  const initialXCoord = randomIntOnInterval(1, 10 - shipLength);

  if (
    board.find(
      (element) =>
        JSON.stringify(element) ===
        JSON.stringify([initialXCoord, sharedYCoord]),
    )
  ) {
    const shipCoordinates = [];

    for (let i = 0; i < shipLength; i += 1) {
      const nextXCoord = initialXCoord + i;

      if (
        board.find(
          (element) =>
            JSON.stringify(element) ===
            JSON.stringify([nextXCoord, sharedYCoord]),
        )
      ) {
        shipCoordinates.push([nextXCoord, sharedYCoord]);
      } else {
        return generateHorizontalShip(shipLength, board);
      }
    }

    return shipCoordinates;
  }

  return generateHorizontalShip(shipLength, board);
}

function generateVerticalShip(shipLength, board) {
  const sharedXCoord = randomIntOnInterval(1, 10);

  const initialYCoord = randomIntOnInterval(1, 10 - shipLength);

  if (
    board.find(
      (element) =>
        JSON.stringify(element) ===
        JSON.stringify([sharedXCoord, initialYCoord]),
    )
  ) {
    const shipCoordinates = [];

    for (let i = 0; i < shipLength; i += 1) {
      const nextYCoord = initialYCoord + i;

      if (
        board.find(
          (element) =>
            JSON.stringify(element) ===
            JSON.stringify([sharedXCoord, nextYCoord]),
        )
      ) {
        shipCoordinates.push([sharedXCoord, nextYCoord]);
      } else {
        return generateVerticalShip(shipLength, board);
      }
    }

    return shipCoordinates;
  }

  return generateVerticalShip(shipLength, board);
}

function generateRandomShip(shipLength, board) {
  const horizontalOrVertical = randomIntOnInterval(0, 1);
  // 0 -> horizontal
  // 1 -> vertical

  if (horizontalOrVertical === 0) {
    const hzCoordinates = generateHorizontalShip(shipLength, board.getBoard());

    board.placeShip(hzCoordinates);
  } else {
    const vertCoordinates = generateVerticalShip(shipLength, board.getBoard());

    board.placeShip(vertCoordinates);
  }
}

function Player() {
  const board = Gameboard();

  function randomizeBoard() {
    for (let i = 0; i < 10; i += 1) {
      if (i === 0) {
        generateRandomShip(4, board);
      } else if (i < 3) {
        generateRandomShip(3, board);
      } else if (i < 6) {
        generateRandomShip(2, board);
      } else {
        generateRandomShip(1, board);
      }
    }
  }

  return { board, randomizeBoard };
}

export function RealPlayer() {
  const { board, randomizeBoard } = Player();

  return { board, randomizeBoard };
}

export function CpuPlayer() {
  const { board, randomizeBoard } = Player();

  function randomShot(playerBoard) {
    const randomXCoord = randomIntOnInterval(1, 10);
    const randomYCoord = randomIntOnInterval(1, 10);

    const missed = playerBoard.getMissedAttacks();
    const hits = playerBoard.getSuccessfulAttacks();

    if (
      missed.find(
        (element) =>
          JSON.stringify(element) ===
          JSON.stringify([randomXCoord, randomYCoord]),
      ) ||
      hits.find(
        (element) =>
          JSON.stringify(element) ===
          JSON.stringify([randomXCoord, randomYCoord]),
      )
    ) {
      return randomShot(playerBoard);
    }

    const hit = playerBoard.receiveAttack([randomXCoord, randomYCoord]);

    return hit;
  }

  return { board, randomShot, randomizeBoard };
}
