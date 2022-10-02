const perro = {
  raza: 'chihuahua',
  ladrar: function () {
    console.log('Guau soy un ', this.raza);
  }
};

const bulldog = Object.create(perro);

console.log('bulldog: ', bulldog);
bulldog.ladrar();

bulldog.raza = 'jaja bulldog';
bulldog.ladrar();

console.log('bulldog: ', bulldog);
