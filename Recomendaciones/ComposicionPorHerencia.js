const saludar = name => console.log(name);

const persona = {
  name: 'Adrian',
  saludar() {
    saludar(this.name)
  }
};

persona.saludar();