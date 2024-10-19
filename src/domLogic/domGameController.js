import {
  hideDomBoard,
  renderBoard,
  renderHits,
  renderMisses,
  showDomBoard,
} from "./boardRender";

const playerDomBoard = document.querySelector(".player-board");
const cpuDomBoard = document.querySelector(".cpu-board");

const playerName = document.querySelector("p:nth-child(2)");
const cpuName = document.querySelector("p:nth-child(4)");

const nextBtn = document.getElementById("next");
const playAgainBtn = document.getElementById("play-again");

const gameInfo = document.querySelector(".game-info");

function allowPlayerTurn() {
  cpuDomBoard.setAttribute("aria-disabled", "false");
}

function allowCpuTurn() {
  cpuDomBoard.setAttribute("aria-disabled", "true");
}

function announceHitStatus(hit) {
  if (hit) {
    gameInfo.textContent = "Hit!";
  } else {
    gameInfo.textContent = "Miss.";
  }
}

function checkGameEnd(cpuBoard, playerBoard) {
  const cpuShipsGone = cpuBoard.allShipsSunk();
  const plrShipsGone = playerBoard.allShipsSunk();

  if (cpuShipsGone || plrShipsGone) {
    nextBtn.style.display = "none";
    playAgainBtn.style.display = "block";

    if (cpuShipsGone) {
      gameInfo.textContent = "All computer ships sank. Game over!";
    } else {
      gameInfo.textContent = "All of your ships sank. Game over!";
    }
  }
}

function cpuShotHandler(cpu, playerBoard) {
  const hit = cpu.randomShot(playerBoard);

  renderBoard(playerBoard, playerDomBoard);

  announceHitStatus(hit);

  allowPlayerTurn();
  nextBtn.disabled = false;
}

export function activatePlayerShooting(cpuBoard, playerBoard) {
  cpuDomBoard.addEventListener("click", (e) => {
    if (cpuDomBoard.ariaDisabled === "false") {
      const domCoordinate = e.target;

      const { x, y } = domCoordinate.dataset;
      const hit = cpuBoard.receiveAttack([Number(x), Number(y)]); // thanks JavaScript :)

      renderHits(cpuBoard, cpuDomBoard);
      renderMisses(cpuBoard, cpuDomBoard);

      announceHitStatus(hit);

      allowCpuTurn();
      nextBtn.disabled = false;

      checkGameEnd(cpuBoard, playerBoard);
    }
  });
}

export function playerTurn(cpuBoard) {
  showDomBoard(cpuName, cpuDomBoard);
  hideDomBoard(playerName, playerDomBoard);

  renderHits(cpuBoard, cpuDomBoard);
  renderMisses(cpuBoard, cpuDomBoard);

  allowPlayerTurn();
  nextBtn.disabled = true;

  gameInfo.textContent = "Take your shot.";
}

export function cpuTurn(cpu, playerBoard) {
  showDomBoard(playerName, playerDomBoard);
  hideDomBoard(cpuName, cpuDomBoard);

  renderBoard(playerBoard, playerDomBoard);

  nextBtn.disabled = true;

  gameInfo.textContent = "CPU is taking a shot...";

  const shot = () => {
    cpuShotHandler(cpu, playerBoard);
  };

  setTimeout(shot, 1500);

  checkGameEnd(cpu.board, playerBoard);
}
