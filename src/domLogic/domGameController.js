import { renderBoard, renderMisses } from "./boardRender";
import {
  addBoardListener,
  addNextBtnListener,
  removeBoardListener,
  removeNextBtnListener,
} from "./gameEventListeners";

const cpuDomBoard = document.querySelector(".cpu-board");
const playerDomBoard = document.querySelector(".player-board");

const nextBtn = document.getElementById("next");

const gameInfo = document.querySelector(".game-info");

function playerShotHandler(coordinate, cpuBoard) {
  const { x, y } = coordinate.dataset;

  const hit = cpuBoard.receiveAttack([Number(x), Number(y)]); // thanks JavaScript :)

  if (
    !(
      coordinate.classList.contains("hit") ||
      coordinate.classList.contains("miss")
    )
  ) {
    if (hit.hitLocation) {
      coordinate.classList.add("hit");

      gameInfo.textContent = "Hit!";
    } else if (!hit.hitLocation) {
      gameInfo.textContent = "Miss.";
    }

    cpuDomBoard.setAttribute("aria-disabled", "true");
  }
}

export default function startGame(player, cpu) {
  const playerBoard = player.board;
  const cpuBoard = cpu.board;

  function shootingLogic(e) {
    const domCoordinate = e.target;

    playerShotHandler(domCoordinate, cpuBoard);
    renderMisses(cpuBoard, cpuDomBoard);

    removeBoardListener(cpuDomBoard, shootingLogic); // stops after one shot

    nextBtn.setAttribute("aria-disabled", "false");
  }

  function cpuShootingLogic() {
    removeNextBtnListener(nextBtn, cpuShootingLogic);
  }

  nextBtn.setAttribute("aria-disabled", "true");

  gameInfo.textContent = "Take your shot.";

  addBoardListener(cpuDomBoard, shootingLogic);

  if (cpuDomBoard.getAttribute("aria-disabled") === "true") {
    addNextBtnListener(nextBtn, cpuShootingLogic);
  }

  // addNextListener will trigger a CPU shot
}

// will need to create new player and cpu objects!!
