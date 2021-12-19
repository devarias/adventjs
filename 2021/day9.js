export default function groupBy(collection, it) {
  return collection.reduce((obj, item) => {
    const index = (typeof it !== "function") ? item[it] : it(item);
    return { ...obj, [index]: [...(obj[index] || []), item] }
  },{})
}
