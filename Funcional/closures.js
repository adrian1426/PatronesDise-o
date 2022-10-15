//?alcance que tienen las funciones con respecto a las variables declaradas
//?Alcance léxico - alcance privado -alcance global

const y = 'ADRIAN2';

const f = () => {
  const x = 'Adrian';

  return () => {
    const z = 'GUKO';

    console.log(x, y, z);
  };
};

f()();
