//Script that prints My number: <first argument converted in integer>
const {argv} = require('node:process'); //destructuring assignment
const { isNumberObject } = require('node:util/types');
const firstUserArgument = argv[2];
if ((firstUserArgument === ('node:isNumberObject')) || (firstUserArgument === undefined)) {
    console.log('Not a number');
}
else {
    console.log(firstUserArgument);
}