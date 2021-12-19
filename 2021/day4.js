export default function createXmasTree(height) {
  const width = (height * 2) - 1;
  let tree = '';
  for (let line = 1, ast = 1; line <= height && ast <= width ; line++, ast+=2) {
      const asteriskLine = '*'.repeat(ast);
      const underline = '_'.repeat((width - asteriskLine.length) / 2);
      tree += underline + asteriskLine + underline + '\n';
  }
  for (let line = 1; line <= 2; line++) {
    const underline = '_'.repeat((width - 1) / 2);
    tree += underline + '#' + underline + '\n';
  }
  return tree.slice(0, tree.length - 1);
}
