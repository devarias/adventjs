export default function daysToXmas(date) {
  const entryDate = new Date(date.toDateString());
  const xMasDate = new Date('12/25/2021');
  const diffTime = Math.abs(xMasDate - entryDate);
  const diffDays = diffTime / (24 * 60 * 60 * 1000);
  return entryDate > xMasDate ? -diffDays : diffDays;
}
