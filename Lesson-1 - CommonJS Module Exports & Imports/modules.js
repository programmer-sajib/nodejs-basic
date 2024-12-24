const myName = "John";
const myAge = 30;

const sayHi = () => {
  return "Hello there!";
};
const sayBye = () => {
  return "Goodbye!";
};

// Exporting variables and functions 1st way
exports.myName = "John";
exports.myAge = 30;

exports.sayHi = () => {
  return "Hello there!";
};
exports.sayBye = () => {
  return "Goodbye!";
};
// Exporting variables and functions 2nd way
/* exports.myName = myName;
exports.myAge = myAge;
exports.sayHi = sayHi;
exports.sayBye = sayBye; */

// Exporting variables and functions 3rd way
/* module.exports = {
  myName,
  myAge,
  sayHi,
  sayBye,
};
 */
