//script that prints x times “C is fun”
const {argv} = require('node:process'); //import argv array from process module
const firstUserArgument = argv[2];
const convertedNumber = parseInt(firstUserArgument, 10); //converting 1st argument to a number
if (isNaN(convertedNumber)) {
    console.log('Missing number of occurrences');
}
else {
    let output = '';
    for (let x = 0; x < convertedNumber; x++) {
        output += 'C is fun';
        if (x < convertedNumber - 1) {
            output += '\n';
        }
    }
    console.log(output);
}
