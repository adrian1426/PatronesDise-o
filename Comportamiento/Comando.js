const Commander = (() => {
  const o = {
    comprar: x => {
      console.log(`Comprando ${x}`);
    },
    vender: x => {
      console.log(`Vendiendo ${x}`);
    }
  };

  return {
    run: (comando, argumentos) => {
      if (!o[comando]) {
        console.log(`Comando ${comando} No existe`);
        return;
      }

      o[comando](argumentos);
    }
  };
})();

Commander.run('comprar', 'galletas');