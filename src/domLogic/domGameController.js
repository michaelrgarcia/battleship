import { renderBoard, renderHits, renderMisses } from "./boardRender";
import { activateCpuTurn, activatePlayerTurn } from "./gameEventListeners";

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

  nextBtn.setAttribute("aria-disabled", "true");

  renderHits(cpuBoard, cpuDomBoard);
  renderMisses(cpuBoard, cpuDomBoard);

  gameInfo.textContent = "Take your shot.";

  activatePlayerTurn(cpuBoard, playerShotHandler, renderHits, renderMisses);

  if (cpuDomBoard.getAttribute("aria-disabled") === "true") {
    activateCpuTurn();
  }
}
