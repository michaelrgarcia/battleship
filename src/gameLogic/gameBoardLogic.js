import Ship from "./shipLogic";

export default function Gameboard() {
    const board = [
        [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
        [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2],
        [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3],
        [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4],
        [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5],
        [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
        [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7],
        [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8],
        [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9],
        [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10],
    ]; 

  const missedAttacks = []; // array of coordinates

  function placeShip(coordinatesArray) {
    const shipLength = coordinatesArray.length;
    const ship = Ship(shipLength);

    // no diagonal ships allowed.
    // either the same x-value or same y-value in each coordinate is required (will check based on future horizontal / vertical param)

    for (let i = 0; i < shipLength; i += 1) {
      const coordinate = coordinatesArray[i];

      const boardCoord = board.find(
        (element) => JSON.stringify(element) === JSON.stringify(coordinate),
      );

      if (boardCoord.length < 3) {
        boardCoord.push(ship);
      }

      

      /*

            const comparisonCoord = coordinatesArray[i + 1];

            if (coordinate[0] !== comparisonCoord[0] || coordinate[1] !== comparisonCoord[1]) {
                break;
            } 

            */
    }

    return board;
  }

  function receiveAttack(coordinates) {
    let hitLocation;

    for (let i = 0; i < board.length; i += 1) {
      const boardCoord = board[i];
      const filteredCoord = boardCoord.filter(
        (element) => typeof element === "number",
      );

      if (
        JSON.stringify(coordinates) === JSON.stringify(filteredCoord) &&
        boardCoord.length > 2
      ) {
        const ship = boardCoord[2]; // ships are always the 3rd element
        hitLocation = filteredCoord

        ship.hit();
      }
    }

    if (!hitLocation) {
      missedAttacks.push(coordinates); 
    }
    
    return { hitLocation };
  }

  function allShipsSunk() {
    for (let i = 0; i < board.length; i += 1) {
      const boardCoord = board[i];

      if (boardCoord.length > 2) {
        const ship = boardCoord[2];

        if (ship.isSunk() === false) {
          return false;
        }
      }
    }

    return true;
  }

  function getBoard() {
    return board;
  }

  function getMissedAttacks() {
    return missedAttacks;
  }

  return { placeShip, receiveAttack, allShipsSunk, getBoard, getMissedAttacks };
}
