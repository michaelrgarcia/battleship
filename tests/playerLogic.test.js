import { RealPlayer, CpuPlayer } from "../src/gameLogic/playerLogic";

test("real players can access their board", () => {
  const player = RealPlayer();
  const { board } = player;

  expect(board.allShipsSunk()).toBe(true); // no ships exist

  board.placeShip([
    [5, 4],
    [5, 3],
    [5, 2],
  ]);

  expect(board.allShipsSunk()).toBe(false); // no ships exist
});

test("cpu players can access their board", () => {
  const cpu = CpuPlayer();
  const { board } = cpu;

  board.placeShip([[1, 2]]);

  expect(board.receiveAttack([1, 2])).toBe(1);
});
