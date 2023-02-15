function pattern(figure) {
  let model = '';
  for (let i = 1; i <= figure; i++) {
    for (let j = 1; j <= i; j++) {
      model += '* ';
    }
    model += '\n';
  }
  return model;
}
console.log(pattern(5));

module.exports = pattern;