var eleWrapper2 = document.body.querySelector(".wrapper2");

let points = prompt ("Enter points:");
// CHECK TO SEE IF INPUT IS A NUMBER
    if (!(isNaN(points))) {
    }
    else 
    alert ("Your input should only be a number. Please restart");

if (points > 90){
    console.log("Got an A");
}
else if (points > 80){
    console.log("Got an B")
}
else if (points > 70){
    console.log("Got an C")
}
else if (points > 60){
    console.log("Got an D")
}
else { console.log("You have to retake the class");
}

switch (true){
    case points > 90:
        grade= "A"
        console.log ("Grade A");
        break;
    case points > 80:
        grade="B"
        console.log ("Grade B");
        break;
    case points > 70:
        grade="C"
        console.log ("Grade C");
        break;
    case points > 60:
        grade="D"
        console.log ("Grade D");
        break;
        default:
            grade="F"
            console.log("You got an F")
}
eleWrapper2.innerHTML = `The grade is ${"(a:)"} ${points}, ${"(b:)"} ${grade}`;
