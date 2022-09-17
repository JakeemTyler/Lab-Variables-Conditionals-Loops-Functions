var eleWrapper5 = document.body.querySelector(".wrapper5");

// arrow function
const lineForScript = () => {
    var nameQues= prompt ("Who are the lines for?");
    var lineQues= prompt("What are the lines? Hint, it's the mean professor");
    var numQues = prompt("How many lines do you want repeated?");
    numQues= parseInt(numQues);

let nameHeader="";
    nameHeader+= `${nameQues}<br>`;
    // displaying console
    for(let preNum =1; preNum <= numQues; preNum++){
        console.log(`${preNum} : ${lineQues}`);
        preNum += 1; }

    let preNum=1;
    let displayStr= " ";

    // Displaying on page
    while (preNum <= numQues){
        displayStr += (` ${preNum} : ${lineQues} <br>`);
        preNum++;}
        
    eleWrapper5.innerHTML= nameHeader + displayStr;
}
lineForScript();
