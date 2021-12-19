export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const response = Array(6).fill(0);
  for(let i = coins.length - 1; i>=0; i--){
    if(change === 0) return response;
    if(change >= coins[i]){
      change -= coins[i];
      response[i]++
      i++;
    }
  }
  return response;
}
