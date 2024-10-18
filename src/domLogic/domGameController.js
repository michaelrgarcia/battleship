/* eslint-disable no-param-reassign */

import { renderBoard, renderHits, renderMisses } from "./boardRender";

const playerDomBoard = document.querySelector(".player-board");
const cpuDomBoard = document.querySelector(".cpu-board");

const nextBtn = document.getElementById("next");

const gameInfo = document.querySelector(".game-info");

function announceHitStatus(hit) {
  if (hit) {
    gameInfo.textContent = "Hit!";
  } else {
    gameInfo.textContent = "Miss.";
  }
}

export function playerTurn(cpuBoard) {
  renderHits(cpuBoard, cpuDomBoard);
  renderMisses(cpuBoard, cpuDomBoard);

  gameInfo.textContent = "Take your shot.";

  cpuDomBoard.setAttribute("aria-disabled", "false");
  nextBtn.disabled = true;
}

export function activatePlayerShooting(cpuBoard) {
  cpuDomBoard.addEventListener("click", (e) => {
    if (cpuDomBoard.ariaDisabled === "false") {
      const domCoordinate = e.target;

      const { x, y } = domCoordinate.dataset;
      const hit = cpuBoard.receiveAttack([Number(x), Number(y)]); // thanks JavaScript :)

      renderHits(cpuBoard, cpuDomBoard);
      renderMisses(cpuBoard, cpuDomBoard);

      announceHitStatus(hit);

      cpuDomBoard.setAttribute("aria-disabled", "true");
      nextBtn.disabled = false;
    }
  });
}

function cpuShotHandler(cpu, playerBoard) {
  const hit = cpu.randomShot(playerBoard);
}
