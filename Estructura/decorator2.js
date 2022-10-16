class Macbook {
  precio() {
    return 1000;
  }
}

const memoria = macb => {
  const precio = macb.precio();

  macb.precio = function () {
    return precio + 100;
  }
};

const macbook = new Macbook();
memoria(macbook);

console.log(macbook.precio());