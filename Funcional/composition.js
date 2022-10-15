const users = [
  { edad: 17, nombre: 'Adrian', apellido: 'Mora' },
  { edad: 18, nombre: 'José', apellido: 'Garica' },
  { edad: 12, nombre: 'Carlos', apellido: 'Cantero' },
  { edad: 1, nombre: 'Noe', apellido: 'Tavarez' }
];

const head = xs => xs[0];

const format = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
});

const dataInfante = x => (`${x.nombreCompleto} tien ${x.edad} años`);

const traerPrimerInfante = (data) => {
  const primerInfante = head(data.filter(x => x.edad < 2));
  const infante = format(primerInfante);

  return dataInfante(infante);
};

const traerPrimerInfante2 = (data) => dataInfante(format(head(data.filter(x => x.edad < 2))));

console.log(traerPrimerInfante(users));
console.log(traerPrimerInfante2(users));