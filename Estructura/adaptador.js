class Api1 {
  constructor() {
  }

  operation(method, url, options) {
    switch (method) {
      case 'GET':
        //fethc con get
        break;
      case 'POST':
        //fetch von post
        break;
      default:
        break;
    }
  }
};

class Api2 {
  constructor() {
  }

  get(url, options) {
    //Axios.get
  };

  post(url, options) {
    //Axios.post
  }
};

//Adaptador
class AdapterApi {
  constructor() {
    this.api2 = new Api2();
  }

  operations(method, url, options) {
    switch (method) {
      case 'GET':
        return this.api2.get(url, options);
      case 'POST':
        return this.api2.post(url, options);
        break;
      default:
        break;
    }
  }

}