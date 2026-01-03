# JS-Fundamentals
This repo is for javascript fundamentals mini-projects

## Weekly log

**Week 3 Log**

Basic tasks interacting with JS environment:  
    *Displaying text to the console  
    *Conditional if, else if statements  
    *Using for/ while loops on arrays  
    *Printing patterns to the console using loops  

## Concepts covered  

**1. process.argv**  
-Understood the array structure process.argv, where [0] is the Node path, [1] is the script path, and [2]+ are user arguments.  
-Mastered the logic that userArgsCount = argv.length - 2  
-Understood the destructuring assignment const {argv} = require('node: process') to extract the tool (argv) from the system toolbox (process module).  

**2. Data validation & type casting**  
-parseInt(string, radix) converts strings to integers by parsing through each character of the string at radix stated (base 10 by default).  
-Mastered IsNaN() function that checks whether the result of parsing is Not a Number. This is the only value in javascript that is not equal to itself and would be false.  

**3. Iteration, logic & control flow using loops and nested loops.**  

**4. Basic functions & recursive functions**  
-Understood different function prototypes including standard function declaration, and regular and arrow function expression.  
-Mastered callback functions and ForEach function.  
-Understood that recursive functions have 2 pillars - the base case/emergency stop condition and the recursive step/the self-call.  