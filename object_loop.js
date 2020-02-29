const memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i++;
}
console.groupEnd('array loop');
const memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche'
};
console.group('object loop');
for (const name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');
