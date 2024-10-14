function getDomCoordinates(board, domBoard) {
  const domCoordinates = [];

  for (let i = 0; i < board.length; i += 1) {
    const coordinate = board[i];
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

export default function renderBoard(board, domBoard) {
  const domCoordinates = getDomCoordinates(board, domBoard);

  for (let i = 0; i < domCoordinates.length; i += 1) {
    const domCoordinate = domCoordinates[i];

    domCoordinate.classList.add("placed-ship");
  }
}
