export default function contarOvejas(ovejas) {
  return ovejas.filter(oveja => oveja.color === 'rojo' && validateName(oveja.name));
}

function validateName(name) {
  const validA = name.includes('A') || name.includes('a');
  const validN = name.includes('N') || name.includes('n');
  return validA && validN;
}
