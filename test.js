const {requireCustom} = require('./customRequire');
const {mines} = requireCustom("./module1.js");
console.log(mines(10, 2));
// return -> 8 yeah!!!

