console.log('Math.PI', Math.PI);
console.log('Math.random()', Math.random()); // method
console.log('Math.floor(3.9)', Math.floor(3.9));

const MyMath = {
  PI: Math.PI,
  random: () => Math.random(),
  floor: val => Math.floor(val)
};
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.random()', MyMath.random());
console.log('MyMath.floor(3.9)', MyMath.floor(3.9));

const MyMath_PI = Math.PI;
const MyMath_randon = () => Math.random();
const MyMath_floor = val => Math.floor(val);
