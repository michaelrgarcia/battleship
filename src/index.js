import {
  clearDomBoard,
  hideDomBoard,
  renderBoard,
  showDomBoard,
} from "./domLogic/boardRender";

import {
  activatePlayerShooting,
  cpuTurn,
  playerTurn,
} from "./domLogic/domGameController";

import { RealPlayer, CpuPlayer } from "./gameLogic/playerLogic";

function newGame(player, cpu, playerDomBoard) {
  cpu.randomizeBoard();

  player.randomizeBoard();
  renderBoard(player.board, playerDomBoard);
}

(function game() {
  const playerDomBoard = document.querySelector(".player-board");
  const cpuDomBoard = document.querySelector(".cpu-board");

  const playerName = document.querySelector("p:nth-child(2)");
  const cpuName = document.querySelector("p:nth-child(4)");

  const gameInfo = document.querySelector(".game-info");

  const shuffle = document.getElementById("shuffle");
  const go = document.getElementById("go");
  const next = document.getElementById("next");
  const playAgain = document.getElementById("play-again");

  let player = RealPlayer();
  let cpu = CpuPlayer();

  newGame(player, cpu, playerDomBoard, gameInfo);

  shuffle.addEventListener("click", () => {
    player.board.clearBoard();
    clearDomBoard(playerDomBoard);

    player.randomizeBoard();
    renderBoard(player.board, playerDomBoard);
  });

  go.addEventListener("click", () => {
    showDomBoard(cpuName, cpuDomBoard);
    hideDomBoard(playerName, playerDomBoard);

    shuffle.style.display = "none";
    go.style.display = "none";

    next.style.display = "block";

    playerTurn(cpu.board);
  });

  activatePlayerShooting(cpu.board, player.board);

  next.addEventListener("click", () => {
    function playerTurnAllowed() {
      const allowed = cpuDomBoard.ariaDisabled === "false";

      return allowed;
    }

    if (playerTurnAllowed()) {
      playerTurn(cpu.board);
    } else {
      cpuTurn(cpu, player.board);
    }
  });

  playAgain.addEventListener("click", () => {
    hideDomBoard(playerName, playerDomBoard);
    hideDomBoard(cpuName, cpuDomBoard);

    clearDomBoard(playerDomBoard);
    clearDomBoard(cpuDomBoard);

    player = RealPlayer();
    cpu = CpuPlayer();

    newGame(player, cpu, playerDomBoard);

    showDomBoard(playerName, playerDomBoard);

    gameInfo.textContent =
      "Click the shuffle button to place the ships to your liking.";
  });
})();
