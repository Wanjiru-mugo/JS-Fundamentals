//script that computes and prints a factorial
//fetch argv from process module
const {argv} = require('node:process');
firstUserArgument = argv[2];

function factorial(a) {
    if (a <= 1) {
        return 1;
    } 
    else {
        return a * factorial(a - 1);
    }
}
//typecasting the argument into a number
const a = parseInt(firstUserArgument, 10);
if (isNaN(a, 10)) {
    console.log(1);
}
else {
    result = factorial(a);
    console.log(result);
}
