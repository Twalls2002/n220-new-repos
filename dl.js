let acct = 45.67;
let toy  = 45.99;
let buyToy=acct>toy;

if(buyToy){
    document.getElementById('bank').innerHTML = "Let's go buy it!";
} 
else {
    document.getElementById('bank').innerHTML = "No toy today.";
}

const today = new Date();
let myMonth = today.getMonth()+1;

if(myMonth==7) {
    document.getElementById('birthday').innerHTML = "Happy birthday month to you!";
}else {
    document.getElementById('birthday').innerHTML = "No birthday party for you this month";
}

//voting Age
    let ageText;
function checkAge() {
    let myAge = document.getElementById('age').value;

    console.log(typeof(myAge));

    //Turn string into number
    //Number(myAge);
    //parseFloat(myAge);

    if(myAge<18) {
        ageText = "Sorry - you cannot vote yet.";
    } else if(myAge==18) {
        ageText = "Congrats! You can finally vote!";
    } else{
        ageText = "You can vote";
    }
    document.getElementById('voteAge').innerHTML = ageText;
    }

//Greeting
//var today holds today's date
let todayHour = today.getHours();

var timeText = document.getElementById('myTime');

if(todayHour<=12) {
    timeText.innerHTML = "Good Morning";
} else if (todayHour>12 && todayHour<16){
timeText.iinerHTML = "Good Afternoon!";
} else if (todayHour>=16 && todayHour<20) {
    timeText.innerHTML = "Good Evening";
} else {
    timeText.innerHTML = "Goodnight!";
}

//Grades
let midterm = 78;
let final = 87;
let myTotal = 47+62+midterm+final;
let myAvg = myTotal/350;

let gradeText = document.getElementById('msg');
if(midterm>50 && final>72) {
    gradeText.innerHTML="You passed the class";
} else {
    gradeText.innerHTML = "You did not pass the class";
}

if((midterm>50 && final>72) || myAvg>80) {
    gradeText.innerHTML+="<br/> The class is complete.";
} else {
    gradeText.innerHTML+="<br/> The class is not complete.";
}

//Random Number
function newNum() {
    document.getElementById('rNum20').innerHTML=Math.floor(Math.random()*20)+1;
}

//Dice Roll

function rollDie() {
    let dieImage="";
    let die = Math.floor(Math.random()*6)+1;
    switch(die) {
        case 1: 
            dieImage="die_face_1.png";
            break;
        case 2:
        dieImage="die_face_2.jpg";
        break;
        case 3:
        dieImage="die_face_3.png";
        break;
        case 4:
        dieImage="die_face_4.png";
        break;
        case 5:
        dieImage="die_face_5.png";
        break;
        case 6:
        dieImage="die_face_6.png";
        break;
        default:
            console.log("There was an error");            
        break;
    }

document.getElementById('dice_1').innerHTML = '<img src="'+ dieImage + '"/>'; 
 die = Math.floor(Math.random()*6)+1;
    switch(die) {
        case 1: 
            dieImage="die_face_1.png";
            break;
        case 2:
        dieImage="die_face_2.jpg";
        break;
        case 3:
        dieImage="die_face_3.png";
        break;
        case 4:
        dieImage="die_face_4.png";
        break;
        case 5:
        dieImage="die_face_5.png";
        break;
        case 6:
        dieImage="die_face_6.png";
        break;
        default:
            console.log("There was an error");            
        break;
    } document.getElementById('dice_2').innerHTML = '<img src="'+ dieImage + '"/>';
}


//Seasons of the Year
// let myMonth = today.getMonth() + 1;
let seasontext = document.getElementById('season');

switch(true) {
    case (myMonth==12 || myMonth<=2):
        seasontext.innerHTML = "It's Winter!";
        break;
    case (myMonth>=3 && myMonth<=5):
        seasontext.innerHTML = "It's spring!";
    case (myMonth>=6 && myMonth<=8):
        seasontext.innerHTML = "It's Summer!";
        break;
    case (myMonth>=9 && myMonth<=11):
        seasontext.innerHTML = "It's Fall!";
        break;
    default:
        seasontext.innerHTML = "That is incorrect.";
}
