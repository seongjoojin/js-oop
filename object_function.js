const kim = { name: 'kim', first: 10, second: 20 };
const lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
console.log('sum.call(kim)', sum.call(kim, '=> '));
console.log('lee.call(kim)', sum.call(lee, ': '));
const kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
