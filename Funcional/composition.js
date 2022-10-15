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


const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const filter = funcion => xs => xs.filter(funcion);

const traceLog = x => y => console.log(x, y);

const traerPrimerInfante3 = compose(
  dataInfante,
  format,
  head,
  filter(x => x.edad < 2)
);

const traerPrimerInfante4 = pipe(
  filter(x => x.edad < 2),
  traceLog('depues de filter'),
  head,
  format,
  dataInfante
);

//logs
console.log(traerPrimerInfante(users));
console.log(traerPrimerInfante2(users));
console.log(traerPrimerInfante3(users));
console.log(traerPrimerInfante4(users));