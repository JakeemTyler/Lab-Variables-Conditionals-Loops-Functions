// TASK 3
let preNumber=1 ;
let nameQuestion = prompt("Who are the lines for? Hint, it's the punishing professor");
let lineQuestion= prompt("What is the line");
let input= prompt ("Enter number");
input= parseFloat(input);

for (let i = 0; i < input; i++) {   
    console.log(` ${preNumber} ${lineQuestion}`);
    preNumber+= 1;
}