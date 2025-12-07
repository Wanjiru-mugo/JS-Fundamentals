//Script that prints the first argument passed to it
const argvPassed = require('node:process'); //import process module
const argv = argvPassed.argv; //import the arguments vector array from process module

//print array element using array loop
argv.forEach(value, index => {
    if (value == '') {
        console.log('No argument');
    }
    else     
        {
        console.log(value.index[2]);
    }
})