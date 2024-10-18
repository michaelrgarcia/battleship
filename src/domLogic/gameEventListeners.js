const cpuDomBoard = document.querySelector(".cpu-board");
const nextBtn = document.getElementById("next");

export function disablePlayerTurn(handler) {
  cpuDomBoard.removeEventListener("click", handler);
}

export function activatePlayerTurn(
  domBoard,
  playerShotHandler,
  renderHits,
  renderMisses,
) {
  function shootingLogic(e) {
    const domCoordinate = e.target;

    playerShotHandler(domCoordinate, domBoard);

    renderHits(domBoard, cpuDomBoard);
    renderMisses(domBoard, cpuDomBoard);

    disablePlayerTurn(cpuDomBoard, shootingLogic); // stops after one shot

    nextBtn.setAttribute("aria-disabled", "false");
  }

  domBoard.addEventListener("click", shootingLogic);
}

export function disableCpuTurn(handler) {
  nextBtn.removeEventListener("click", handler);
}

export function activateCpuTurn() {
  function cpuShootingLogic() {
    disableCpuTurn(nextBtn, cpuShootingLogic);
  }

  nextBtn.addEventListener("click", cpuShootingLogic);
}
