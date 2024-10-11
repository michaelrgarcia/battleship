/* eslint-disable no-undef */

import Ship from "../src/shipLogic";

test("hit count updates correctly", () => {
  const ship = Ship(3);

  expect(ship.hit()).toEqual(1);

  // hit it a second time

  expect(ship.hit()).toEqual(2);
});

test("sink a ship", () => {
  const ship = Ship(1);

  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
