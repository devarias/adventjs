export default function sumPairs(numbers, result) {
  const n1 = numbers.map((n, i1) => {
    const n2 = numbers.find((nn, i2) => n + nn === result && i1 !== i2);
    if(n2) return [n, n2];
  }).filter(x => x);
  return n1.length ? n1[0]: null;
}
