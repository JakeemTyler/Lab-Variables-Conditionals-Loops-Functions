var eleWrapper = document.body.querySelector(".wrapper");


let userNum = prompt("What's your first number?");
 userNum = parseFloat (userNum);
// isNaN (is not a number)
    if (!(isNaN(userNum))) {
        console.log ("It's a number")}
    else 
    alert ("Your input should only be a number. Please restart");

    // MULTIPLY BY PERCENTAGE 
let userPercent = prompt("What's your percentage?");
percentage=(userNum/100)*userPercent;

var productWithBacktick = (`${userNum} * ${userPercent}%= ${percentage}`);

var element = document.querySelector (".box");
     eleWrapper.innerHTML=" " + productWithBacktick;