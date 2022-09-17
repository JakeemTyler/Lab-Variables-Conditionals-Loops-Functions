//  (a) Hoisting allows you to use and call and a function
// before it has been declared
// (b) Hoisting with variables works the same as it does with a function
// You can call a variable and use before it has been declared

// Example for Function:
hoistingAnnoucement ();

function hoistingAnnoucement(){
    var eleWrapper7 = document.body.querySelector(".wrapper7");
    eleWrapper7.innerHTML= "CIT 21500 made me a better programmer";}

// Example for Variable:

variableEx="Hoisting works with variables too!";
let variableDisplay = document.querySelector (".wrapper7b");
variableDisplay.innerHTML= variableEx;
var variableEx;
