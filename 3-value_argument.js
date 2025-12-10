//Script that prints the first argument passed to it
const argvPassed = require('node:process'); //import process module
const argv = argvPassed.argv; //import the arguments vector array from process module

//print first argument but first we index it 
const firstUserArgument = argv[2]; 
//the condition
if (firstUserArgument === undefined) {
    console.log('No argument');
}
else {
    console.log(firstUserArgument);
}