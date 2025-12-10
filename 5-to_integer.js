//Script that prints My number: <first argument converted in integer>
const {argv} = require('node:process'); //destructuring assignment

const firstUserArgument = argv[2];

if (firstUserArgument === undefined) {
    console.log('Not a number');
}
else {
    let convertedUserArgv = parseInt(firstUserArgument);
    if (isNaN(convertedUserArgv)) {
        console.log('Not a number');
    }
    else {
        console.log(`My number: ${convertedUserArgv}`);
    }
}