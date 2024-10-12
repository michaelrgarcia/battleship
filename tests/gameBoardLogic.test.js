import Gameboard from "../src/gameLogic/gameBoardLogic";

test("successful attack", () => {
  const board = Gameboard();

  board.placeShip([
    [2, 1],
    [2, 2],
    [2, 3],
  ]);

  expect(board.receiveAttack([2, 1])).toBe(1); // 1 is the hit count
});

test("missed attack", () => {
  const board = Gameboard();

  board.placeShip([
    [4, 1],
    [5, 1],
    [6, 1],
  ]);

  expect(board.receiveAttack([4, 5])).toStrictEqual([[4, 5]]); // dont know what to return for this
});

test("check if all ships have sunken (all have sunken)", () => {
  const board = Gameboard();

  board.placeShip([
    [7, 1],
    [8, 1],
  ]); // horizontal ship

  board.placeShip([
    [2, 1],
    [2, 2],
    [2, 3],
  ]); // vertical ship

  board.receiveAttack([7, 1]);
  board.receiveAttack([8, 1]);

  board.receiveAttack([2, 1]);
  board.receiveAttack([2, 2]);
  board.receiveAttack([2, 3]);

  expect(board.allShipsSunk()).toBe(true);
});

test("check if all ships have sunken (all have not sunken)", () => {
  const board = Gameboard();

  board.placeShip([
    [7, 1],
    [8, 1],
  ]); // horizontal ship

  board.placeShip([[2, 1]]);

  board.receiveAttack([7, 1]);
  board.receiveAttack([8, 1]);

  expect(board.allShipsSunk()).toBe(false);
});

/*

test("places stuff at the correct coordinates", () => {
  const board = Gameboard();

  expect(
    board.placeShip([
      [2, 2],
      [2, 3],
      [2, 4],
    ]),
  ).toStrictEqual([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
    [10, 1],
    [1, 2],
    [2, 2, "test"],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 2],
    [10, 2],
    [1, 3],
    [2, 3, "test"],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3],
    [1, 4],
    [2, 4, "test"],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [10, 5],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
    [10, 7],
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
    [5, 8],
    [6, 8],
    [7, 8],
    [8, 8],
    [9, 8],
    [10, 8],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [10, 9],
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
  ]);
});

*/
