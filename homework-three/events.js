//html Event Handler

function oldSchool() {
    //Print comment under HTML Event Handler bullet print
    document.getElementById('htmlEH').innerText="This is bad practice. Don't use this one.";
}

//Traditional DOM Handler
function tradText(){
    document.getElementById('traditional').innerText = "You can only attach one function to this event handler.";
}

document.getElementsByIdTagName('input')[1].onclick=tradText;

//Level 2 Event Listener
function alertMe(){
    //run alert that reads use this!
    alert('Use This!');
}

function level2Text() {
    //text under level 2 bullet
    document.getElementById('level2').innerText="You can attach one or more function to this event handler.";
}

let level2Button=document.getElementsByTagName('input')[2];

level2Button.addEventLister('click', function() {
    alertMe();
    level2Text();
}, false);

//UI Event
let pageURL=document.URL;
let lastModified=document.lastModified;

fucntion displayInfo(){
    //display url and update date
    document.getElementById('pageURL').innerText = "Page URL: " + pageURL;
    document.getElementById('myLastUpdat').innerText = "Last Update" + lastModified;
}

window.addEventListener('load', displayInfo);

//keyboard Event
let myText = document.getElementsByTagName('input')[3];
let keyCount = 0;

function countKeys() {
    keyCourt++;

    document.getElementById('pressNumber').innerText = "You have pressed a key" + keyCount + "times.";
}

myText.addEventListener('keypress', countKeys);

//Mouse Event

let mouseText = document.getElementById('danger');

function changeText(){
    //change paragraph text
    mouseText.innerHTML = "<b>You have changed the text.</b>";
}

mouseText.addEventListener('dblclick', changeText);

//Focus Event
let focusText = document.getElementsByClassName('blurText')[0];

function changeToUpper() {
    focusText.style.textTransform = "uppercase";
}

focusText.addEventListener('blur', changeToUpper);

//Form Events
let dropD = document.getElementById('js');
let ddText = document.getElementById('selectText');

function selectedChoice() {
    let yourChoice = dropD.options [dropD.selectedIdex].value;
    let printChoice;

    switch (yourChoice) {
        case "javascript":
            printChoice = "Javascript is the base for all of these.";
            break;
            case "jQuery";
            printChoice = "You will learn jQuery in another web course.";
            break;
            case 'Angular':
                printChoice = "Angular is a very popular Javascript framework.";
                break;
            case 'React':
                printChoice = "You will learn React is advanced web courses.";
                break;
            default:
                printChoice = "Please make a selection.";
                break;
    }

    ddText.innerText=printChoice;
}

dropD.addEventListener('change', selectedChoice);
