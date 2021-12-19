export default function contains(store, product) {
  return lookFor(store).some((item) => item === product)
}

function lookFor(store) {
  let res = [];
  for (const property in store) {
    const child = store[property];
    if (typeof child === 'object') {
      res = [...res, ...lookFor(child)]
    }
    res.push(child);
  }
  return res;
}
