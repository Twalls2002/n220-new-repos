let grades = [78,86,92,77];
var ansText = document.getElementById('answers');

ansText.innerHTML = "Arrays : " + grades;
ansText.innerHTML += "<br>Second Values:" + grades[1];
grades[1]=83;
ansText.innerHTML += "<br>Arrays:" + grades;
ansText.innerHTML += "<br>Array Length: " + grades.length;
let lastGrade = grades.length-1; //3
let changeLastGrade = grades [lastGrade]++; //78
ansText.innerHTML += "<br>New Grade: " + changeLastGrade;
//grades [grades.length-1]++;
ansText.innerHTML += "<br>Array: " + grades;
let gradeTotal = grades[0]+grades[1]+grades[2]+grades[3];
ansText.innerHTML += "<br>Average Grade: "+ gradeTotal/grades.length;
ansText.innerHTML += "<br>Above 80: " + ((gradeTotal/grades.length)>80);

let tops = ["tshirt", "blouse", "tank", "botton-up", "sweater", "sweatshirt",];

let bottoms = ['slacks', 'jeans', 'shorts', 'skirts'];

let outfits=[tops, bottoms];

document.write(outfits[0][4], outfits[1][1]);
//Add a value at the end
tops.push("hoodie");

var eaText = document.getElementById('extraAnswers');
eaText.innerHTML = "Array after push: " + tops;

//Remove last value
tops.pop();

eaText.innerHTML ="<br>Array after pop: " + tops;

//Remove first value
tops.shift();

eaText.innerHTML += "<br>Array after shift: " + tops;

//Add value at the beginning
tops.unshift("T-shirt");

eaText.innerHTML += "<br>Array after unshifts: " + tops;

//Add/Remove any value in an array
//target blouse
tops.splice(1,1);
eaText.innerHTML += "<br>Array after removing blouse: " + tops;

//Add blouse and hoodie after button-up
tops.splice(3,0,"blouse","hoodie");

eaText.innerHTML += "<br>Array after adding values: " + tops;



//objects

const friend = {
    fName: "William",
    lName: "Shakespeare",
    age: 23,
    hometown: "Stratford",
    fullName: function() {
        return this.fName + "" + this.lName;
    }
}

friend.hometown="Parsonville";
document.getElementById('fullName').innerHTML = friend.fullName() +"was born in" +friend.hometown;
//friend['hometown'];

function goHere() {
    document.write("here is the answer");
}

const car = {
    year: 2020,
    make: "Dodge",
    model: "Charger",
    automatic: false, 
    mpg: 19,
    efficiency: function() {
        return (this.mpg>40);
    }
}

document.getElementById('car').innerHTML = "I own a" + car.year + " " + car.make + " " + car.model + ".";

document.getElementById('gasEff').innerHTML = car.make + " " + car.model + "Efficiency: " + car.efficiency();