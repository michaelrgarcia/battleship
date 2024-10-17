import { renderBoard, renderMisses } from "./boardRender";
import { addBoardListener, removeBoardListener } from "./gameEventListeners";

const cpuDomBoard = document.querySelector(".cpu-board");
const playerDomBoard = document.querySelector(".player-board");

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

  gameInfo.textContent = "Take your shot.";

  function shootingLogic(e) {
    const domCoordinate = e.target;

    playerShotHandler(domCoordinate, cpuBoard);
    renderMisses(cpuBoard, cpuDomBoard);

    removeBoardListener(cpuDomBoard, shootingLogic);
  }

  addBoardListener(cpuDomBoard, shootingLogic);

  // will "reassign" next button's event listener to control different stages
}

// will need to create new player and cpu objects!!
