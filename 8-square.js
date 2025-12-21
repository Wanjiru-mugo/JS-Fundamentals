//script that prints a square
//fetch the argv array from the process module
const {argv} = require('node:process'); //destructuring assignment
const firstUserArgument = argv[2];
const convertedUserArgument = parseInt(firstUserArgument, 10); //parses through userargument to check for number

//if parsing failed and the value resulted to NaN
if (isNaN(convertedUserArgument)) { 
    console.log('Missing size');
}
else if (convertedUserArgument > 0) {
    let a = 0;
    //outer loop for the row
    while (a < convertedUserArgument) {
        let i = 0;
        let output = '';
        //inner loop for the column
        while (i < convertedUserArgument) {
            output += 'x';
            i++;
        }
        console.log(output);
        a++;
    }

}