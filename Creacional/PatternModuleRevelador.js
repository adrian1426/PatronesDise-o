const resultado = (() => {
  const x = {};

  return {
    a: () => console.log(x),
    b: (key, value) => x[key] = value
  }
})();

resultado.a();
resultado.b('name', 'Kawaki');
resultado.a();