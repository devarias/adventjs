export default function shouldBuyFidelity(times) {
  const withOutCard = 12 * times;
  const withCard = Array.from({length: times}, (_, i) => i + 1).reduce((acc, t) => {
    acc += 12 * Math.pow(0.75, t);
    return acc;
  }, 250);
  return withCard < withOutCard;
}
