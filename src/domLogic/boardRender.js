function getBoardDomMatch(boardCoord, domBoard) {
  const [x, y] = boardCoord;

  const coordinates = domBoard.querySelectorAll(".coordinate");

  let coordinateElement;

  for (let i = 0; i < coordinates.length; i += 1) {
    coordinateElement = coordinates[i];

    if (
      Number(coordinateElement.dataset.x) === x &&
      Number(coordinateElement.dataset.y) === y
    ) {
      return coordinateElement;
    }
  }

  return null;
}

function getShipCoordinates(coordArray, domBoard) {
  const shipCoordinates = [];

  for (let i = 0; i < coordArray.length; i += 1) {
    const coordinate = coordArray[i];

    if (coordinate.length > 2) {
      const coordinateElement = getBoardDomMatch(coordinate, domBoard);

      if (coordinateElement) {
        shipCoordinates.push(coordinateElement);
      }
    }
  }

  return shipCoordinates;
}

function getMissCoordinates(coordArray, domBoard) {
  const missCoordinates = [];

  for (let i = 0; i < coordArray.length; i += 1) {
    const coordinate = coordArray[i];

    const coordinateElement = getBoardDomMatch(coordinate, domBoard);

    if (coordinateElement) {
      missCoordinates.push(coordinateElement);
    }
  }

  return missCoordinates;
}

export function renderMisses(board, domBoard) {
  const missedAttacks = board.getMissedAttacks();
  const missCoords = getMissCoordinates(missedAttacks, domBoard);

  for (let i = 0; i < missCoords.length; i += 1) {
    const missCoord = missCoords[i];

    missCoord.classList.add("miss");
  }
}

export function renderBoard(board, domBoard) {
  const gameBoard = board.getBoard();

  const domCoordinates = getShipCoordinates(gameBoard, domBoard);

  for (let i = 0; i < domCoordinates.length; i += 1) {
    const domCoordinate = domCoordinates[i];

    domCoordinate.classList.add("placed-ship");
  }

  renderMisses(board, domBoard);
}

export function showDomBoard(playerName, playerDomBoard) {
  const name = playerName;
  const domBoard = playerDomBoard;

  name.style.display = "block";
  domBoard.style.display = "grid";
}

export function hideDomBoard(playerName, playerDomBoard) {
  const name = playerName;
  const domBoard = playerDomBoard;

  name.style.display = "none";
  domBoard.style.display = "none";
}
