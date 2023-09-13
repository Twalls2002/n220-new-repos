function changeTxt() {
    document.getElementById
    ('changeTxt').innerHTML = "This text has been changed";}

changeTxt();

function noPram(){
    document.write ("This function does not take parameters.");
}

noPram();

var greet = function() {
    console.log("Hello world");
}

greet();
var favBand = "Teddy Swims";
function favoriteBand(favBand) {
    document.getElementById
    ('favBand').innerHTML = favBand;
}

favoriteBand(favBand);

function myName (first){
    console.log(first);
}

myName('Carrie');
myName('Greg');
myName("My dog is awesome");
myName(34);

var recHeight = 20;
var recWidth = 34;

function recPerm(h,w) {
    let perimeter = 2*h+2*w;
    return perimeter;
}


document.getElementById('panswer').innerHTML = recPerm(recHeight, recWidth) + "feet";
recPerm(recHeight, recWidth);


function calcArea() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('width').value;
    var area = h*w;
    console.log(area);
    document.getElementById('answer').innerHTML = area;
}

//CHALLENGE: wirite a function that simply returns "Hello world" where "world" is a parameter. The console.log out the text.

function hello(r) {
    return "Hello" + r;
}
//console.log(hello(rt));
console.log(hello('Rover'));

function test(){
    return true;
    return false;
}
console.log(test());

var friend=3.4;

console.log("g"+Math.floor(friend));
Math.floor(friend.toFixed(0));

function totalRec(h,w) {
    let perm = recPerm(h,w);
    let area = h*w;
    let recInfo= [perm, area];
    return recInfo;
}

document.getElementById('multiAnswer').innerHTML = "Perimeter: " + totalRec(recHeight, recWidth)[0]+"feet <br/>Area:" + totalRec(recHeight, recWidth)[1] + "square feet.";

function myFunction(){
    alert("Who goes there?");
}

function wizard(name, job) {
    document.getElementById
    ('future').innerHTML = "Welcome" + name +", the " + job +"!";
}

function addItem() {
    let item = prompt("AddItem:");
    console.log(item);
    alert("You added" + item + "to your list");
}