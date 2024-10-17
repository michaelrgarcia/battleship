function getDomCoordinates(coordArray, domBoard) {
  const domCoordinates = [];

  for (let i = 0; i < coordArray.length; i += 1) {
    const coordinate = coordArray[i];
    const [x, y] = coordinate;

    if (coordinate.length > 2) {
      const coordinates = domBoard.querySelectorAll(".coordinate");

      for (let j = 0; j < coordinates.length; j += 1) {
        const coordinateElement = coordinates[j];

        if (
          Number(coordinateElement.dataset.x) === x &&
          Number(coordinateElement.dataset.y) === y
        ) {
          domCoordinates.push(coordinateElement);
        }
      }
    }
  }

  return domCoordinates;
}

export function renderMisses(board, domBoard) {
  const missedAttacks = board.getMissedAttacks();

  const missCoords = getDomCoordinates(missedAttacks, domBoard);

  for (let i = 0; i < missCoords.length; i += 1) {
    const missCoord = missCoords[i];

    missCoord.setAttribute("id", "miss");
  }
}

export function renderBoard(board, domBoard) {
  const gameBoard = board.getBoard();

  const domCoordinates = getDomCoordinates(gameBoard, domBoard);

  for (let i = 0; i < domCoordinates.length; i += 1) {
    const domCoordinate = domCoordinates[i];

    domCoordinate.classList.add("placed-ship");
  }

  renderMisses(board, domBoard);
}
