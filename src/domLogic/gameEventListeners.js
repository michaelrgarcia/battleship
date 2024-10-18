export function addBoardListener(domBoard, handler) {
  domBoard.addEventListener("click", handler);
}

export function removeBoardListener(domBoard, handler) {
  domBoard.removeEventListener("click", handler);
}

export function addNextBtnListener(nextBtn, handler) {
  nextBtn.addEventListener("click", handler);
}

export function removeNextBtnListener(nextBtn, handler) {
  nextBtn.removeEventListener("click", handler);
}
