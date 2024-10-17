export function addBoardListener(domBoard, handler) {
  domBoard.addEventListener("click", handler);
}

export function removeBoardListener(domBoard, handler) {
  domBoard.removeEventListener("click", handler);
}
