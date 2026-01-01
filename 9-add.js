//script that prints the addition of 2 integers
//destructuring assignment
const {argv} = require('node:process');
const firstUserArgument = argv[2];
const secondUserArgument = argv[3];

//lets convert the arguments parssed into int
const a = parseInt(firstUserArgument, 10);
const b = parseInt(secondUserArgument, 10);

//set the condition should parsing fail
if (isNaN(a) || isNaN(b)) {
    console.log('NaN');
}
else {
    function add(a, b) {
        console.log(a + b);
    }

}