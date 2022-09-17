var eleWrapper6 = document.body.querySelector(".wrapper6");

// function and upper limit
const timesTable = function(number) {
    let displayStr = "";
    let firstNum = number;
    let secondNum = 1;

// while loop
    while (secondNum <= 12) {
    let productNum = firstNum * secondNum;
    displayStr += `${firstNum} X ${secondNum} = ${productNum}<br>`;
    secondNum++;
    }
    displayStr+= `<br> ---------- <br>`;
    return(displayStr);
    }
    
    // output display
    outputStr = " ";
    for (let number = 1; number <= 12; number++) {
    outputStr += timesTable(number);
    }

eleWrapper6.innerHTML = outputStr


