export default function getMinJump(obstacles) {
  const sortedObs = obstacles.sort(function(a, b){return a-b});
  return jumps(sortedObs, 1);
}

function jumps(obstacles, jump) {
  for (let j = jump; j <= Math.max(...obstacles); j += jump) {
    if (obstacles.includes(j)) return jumps(obstacles, jump + 1);
  }
  return jump;
}
