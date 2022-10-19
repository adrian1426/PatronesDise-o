class Suma {
  constructor(v = 0) {
    this.val = v;
  }

  suma(v) {
    this.val += v;
    console.log('this: ', this);
    return this;
  }
}

const suma = new Suma(1);

suma
  .suma(3)
  .suma(6)
  .suma(2);