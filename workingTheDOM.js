// Changes the text content of <h1> element to "DOM Manipulation"

var h1Element = document.querySelector("h1");

h1Element.textContent = "DOM Manipulation";



// Changes  background color of <div> element with id "container" to "lightblue"

var containerDiv = document.querySelector("#container");

containerDiv.style.backgroundColor = "lightblue";



// Selects the <ul> element and add a new <li> element with text content "Item 7" to  list

var ulElement = containerDiv.querySelector("ul");

var newItem = document.createElement("li");

newItem.textContent = "Item 7";

ulElement.appendChild(newItem);



// Changes the styles for specific list items

var listItems = ulElement.querySelectorAll("li");

listItems[0].style.color = "crimson";

listItems[2].style.backgroundColor = "pink";

listItems[4].style.backgroundColor = "yellow";

listItems[6].style.backgroundColor = "lightGray";

listItems[6].style.color = "royalBlue";



// Adds an 8th item with  text of your name

var yourNameItem = document.createElement("li");

yourNameItem.textContent = "Terry Walls";

ulElement.appendChild(yourNameItem);



// Deletes fourth item

var fourthItem = listItems[3];

fourthItem.remove();



// Adds italic element around  button text with rebeccapurple background, white text, and a white border

var button = document.querySelector("button");
button.innerHTML = "<i style='background: rebeccapurple; color: white; border: 1px solid white; padding: 5px;'>" + button.textContent + "<i>";