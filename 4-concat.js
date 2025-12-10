//Script that prints two arguments passed to it, in the following format: “ is ”
const {argv} = require('node: process');
//assigning 1st and 2nd arguments for ID
const firstUserArgument = argv[2]; 
const secondUserArgument = argv[3];
//output once arguments are passed
console.log(`${firstUserArgument} is ${secondUserArgument}`);