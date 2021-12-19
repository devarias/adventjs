export default function maxProfit(prices) {
  const values = {
    profit: 0,
    min: prices[0]
  };
  prices.slice(1).forEach(price => {
    if (price < values.min) {
      values.min = price;
    }
    if (values.min < price && price - values.min > values.profit) {
      values.profit = price - values.min;
    }
  })
  return values.profit ? values.profit : -1;
}
