//script that prints a message depending of the number of arguments passed
const argvPassed = process.argv.length - 2;
if (argvPassed == 0) {
    console.log('No argument');
}
else if (argvPassed == 1) {
    console.log('Argument found');
}
else {
    console.log('Arguments found');
}