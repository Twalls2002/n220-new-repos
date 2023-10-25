const course = {
    cNumber: "N220",
    cTitle: "Introduction to Media application Development",
    seats: 20,
    enrolled: 18,
    availability: function () {
        return this.seats>this.enrolled.enrolled;
    }
};

console.log(course.cNumber + "Open: " + course.availability() );

course.enrolled=course.enrolled+2;
course.enrolled+=2;
console.log(course.enrolled);

console.log(course.cNumber + "Open: " + course.availability());

let pageDetails = "Height: " + window.innerHeight + "<br/>Width: " + window.innerWidth;

document.getElementById("hwDetails").innerHTML = pageDetails;

function IUPUIwebsite() {
    open("http://www.iupui.edu")
}

function printPage() {
    print();
}

document.getElementById("wpDetails").innerHTML = window.location +"<br/>" + document.URL;
//use window.location get and set

document.getElementById('domain').innerHTML = "Domain: " + document.domain; //TBD

document.getElementById('update').innerHTML = "Last Modified: " + document.lastModified;

function getGreeting () {
    let greeting = document.getElementById ('greeting').value;

    let gMsg = "Your message is" + greeting.trim().value;
    console.log(greeting);

    let middleC = greeting.length/2;

    gMsg+="The middle character is" + greeting.charAt(middleC);

    document.getElementById ('messageInfo').innerHTML = gMsg;
}

let newText = "I hope this works";
newText = newText.toUpperCase();

newText.replace("hope", "think").toLowerCase();

document.getElementById('coolText').innerHTML = newText;


let classList = document.getElementById('classes').innerHTML;

console.log(classList);

let classListArray = classList.split(",");

console.log(classListArray);

document.getElementById('class').innerHTML = classListArray[2];

var newNumber = 6.75675464;
document.getElementById('fixed').innerHTML = newNumber.toFixed(1);

document.getElementById('precise').innerHTML = newNumber.toPrecision(5);

var myPi = Math.PI;
console.log(myPi);

var rNum = Math.random()*10;
document.getElementById('round').innerHTML = Math.round(myPi);
document.getElementById('ceil').innerHTML = Math.ceil(myPi);
document.getElementById('floor').innerHTML = Math.floor(myPi);

var rNum = Math.random()*10;
document.getElementById('random').innerHTML = Math.floor(rNum)+1;

//Date Object
const today = new Date();
document.write("Today: " + today);
document.write("<br>Day:" + today.getDay());
document.write("<br>Day:" + today.getDay());
document.write("<br>Month:" +today.getMonth());
document.write("<br>Year:" + today.getFullYear());
document.write("<br>Today's Date:" + today.toDateString());
document.write("<br>Today's Time:" + today.toTimeString ());



