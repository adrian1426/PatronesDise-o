const suma = (a, b) => (a + b);

const suma2 = a => b => (a + b);

const suma3 = (a) => {
  const newa = a * 2;
  return (b) => newa + b;
}

const suma4 = a => b => (a * 2 + b);

console.log('suma1: ', suma(4, 5));
console.log('suma2: ', suma2(4)(5));
console.log('suma3: ', suma3(4)(5));
console.log('suma4: ', suma4(4)(5));