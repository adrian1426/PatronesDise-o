Object.prototype.logahh = function () {
  console.log('AHH: ', this);
};

const xobj = { a: 4 };
xobj.logahh();

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace('');
    } catch {
      return this;
    }
  }
}

const y = '    Adriancito    '.trim();
y.logahh();