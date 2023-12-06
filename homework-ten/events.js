// HTML Event Handler
const oldSchool = () => {
  document.getElementById("htmlEH").innerText =
    "This is bad practice. Don't use this one. ";
};

// Traditional DOM Handler
const tradText = () => {
  document.getElementById("traditional").innerText =
    "You can only attach one function to this event handler.";
};

document.getElementsByTagName("input")[1].onclick = tradText;

// Level 2 Event Listener
const alertMe = () => {
  alert("Use This!");
};

const level2Text = () => {
  document.getElementById("level2").innerText =
    "You can attach one or more functions to this event handler.";
};

const level2Button = document.getElementsByTagName("input")[2];

level2Button.addEventListener("click", () => {
  alertMe();
  level2Text();
}, false);

// UI Event
const displayInfo = () => {
  document.getElementById("pageURL").innerText = `Page URL: ${window.location.href}`;
  document.getElementById("myLastUpdate").innerText = `Last Update: ${document.lastModified}`;
};

window.addEventListener("load", displayInfo);

// Keyboard Event
const myText = document.getElementsByTagName("input")[3];
let keyCount = 0;

const countKeys = () => {
  keyCount++;
  document.getElementById("pressNumber").innerText = `You have pressed a key ${keyCount} times.`;
};

myText.addEventListener("keydown", countKeys);

// Mouse Event
const mouseText = document.getElementById("danger");

const changeText = () => {
  mouseText.innerHTML = "<b>You have changed the text.</b>";
};

mouseText.addEventListener("dblclick", changeText);

// Focus Event
const focusText = document.getElementsByClassName("blurText")[0];

const changeToUpper = () => {
  focusText.style.textTransform = "uppercase";
};

focusText.addEventListener("blur", changeToUpper);

// Form Events
const dropD = document.getElementById("js");
const ddText = document.getElementById("selectText");

const selectedChoice = () => {
  const yourChoice = dropD.options[dropD.selectedIndex].value;
  let printChoice;

  switch (yourChoice) {
    case "javascript":
      printChoice = "Javascript is the base for all of these.";
      break;
    case "jQuery":
      printChoice = "You will learn jQuery in another web course.";
      break;
    case 'Angular':
      printChoice = "Angular is a very popular Javascript framework.";
      break;
    case 'React':
      printChoice = "You will learn React in advanced web courses.";
      break;
    default:
      printChoice = "Please make a selection.";
      break;
  }

  ddText.innerText = printChoice;
};

dropD.addEventListener('change', selectedChoice);

// Add/Delete List
const addBtn = document.getElementsByTagName('button')[0];
const itemList = document.getElementById('myList');

const addItem = () => {
  const newItem = prompt("Add Item:");
  if (newItem) {
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newItem));
    itemList.appendChild(newLi);
  }
};

addBtn.addEventListener('click', addItem);

// Target of event
const getTarget = e => e.target || e.srcElement;

// Remove target from list
const removeItem = (e) => {
  const target = getTarget(e);
  const tParent = target.parentNode;
  tParent.removeChild(target);
};

itemList.addEventListener('click', removeItem);