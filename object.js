const memberArray = ['egoing', 'graphittie', 'leezche'];
console.log('memberArray[2]', memberArray[2]);

const memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche'
};
memberObject.designer = 'Nietzsche';
console.log('memberObject.designer', memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager;
console.log('after delete : memberObject.manager', memberObject.manager);
