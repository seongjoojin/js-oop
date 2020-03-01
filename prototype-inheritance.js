const superObj = { superVal: 'super' };
// const subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj;
const subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal); // subObj.subVal => sub
console.log('subObj.superVal =>', subObj.superVal); // subObj.superVal => super
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); // superObj.superVal => super

const kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};
/*
const lee = {
  name: 'lee',
  first: 10,
  second: 10,
  avg: function() {
    return (this.first + this.second) / 2;
  }
};
lee.__proto__ = kim;
*/
const lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
  return (this.first + this.second) / 2;
};
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
