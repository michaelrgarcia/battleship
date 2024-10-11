export default function Ship(len) {
  const length = len;
  let hitCount = 0;

  function hit() {
    hitCount += 1;

    return hitCount;
  }

  function isSunk() {
    if (length === hitCount) {
      return true;
    }

    return false;
  }

  return { hit, isSunk };
}
