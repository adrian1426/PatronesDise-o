function* iterador(col) {
  var nextIndex = 0;

  while (nextIndex < col.length) {
    yield col[nextIndex++];
  }
};

const x = [1, 2, 3, 4, 5, 6, 7];
const generar = iterador(x);

console.log(generar.next());
console.log(generar.next());