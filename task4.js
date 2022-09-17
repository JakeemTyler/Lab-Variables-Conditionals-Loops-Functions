var nameQues= prompt ("Who are the lines for?");
var lineQues= prompt("What are the lines? Hint, it's the mean professor");
var numQues = prompt("How many lines do you want repeated?");
numQues= parseInt(numQues);

let nameBold="";
nameBold+= `${nameQues} <br>`;

console.log(` ${nameBold}`);

// displaying console
    for(let preNum =1; preNum <= numQues; preNum++){
        console.log(`${preNum} : ${lineQues}`);
    };
    let preNum=1;
    let displayStr= " ";

// Displaying on page
    while (preNum <= numQues){
        displayStr += (`${preNum} : ${lineQues} <br>`);
        preNum++;
    };
    var eleWrapper4 = document.querySelector(".wrapper4");
    eleWrapper4.innerHTML= nameBold + displayStr;






