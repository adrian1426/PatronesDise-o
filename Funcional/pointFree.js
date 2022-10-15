const f = (name, cb) => {
  cb(name);
};

//?point free, crear una funcion por separado y enviarlo como callbaclk
const miCallback = (name) => {
  console.log(name)
};

const f2 = f('Adrian', miCallback);
