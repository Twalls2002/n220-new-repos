//Creates a NodeList of all list items
var listItems = document.querySelectorAll('#codeBox ul li');

//Gets the length of the NodeList
var totalItems = listItems.length;

//Creates a for loop to iterate through the list
for (var i = 0; i < totalItems; i++) {
    //Insides the loop, create an img element and set its attributes
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.classList.add('listIcon');

    //Appends the image element to each list item in the NodeList
    listItems[i].appendChild(trashIcon);
}

function addItem() {
    var newItem = prompt("New Item:");

    //Creates a new list item
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);
    newLI.appendChild(newLIText);

    //Adds the trashcan icon to the new list item
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.classList.add('listIcon');
    newLI.appendChild(trashIcon);

    //Appends the new list item to the existing list
    myList.appendChild(newLI);
}

//Adds an event listener to the codeBox ul
myList.addEventListener('click', changeProp, false);

//Writes the function to handle the event
function changeProp(e) {
    //Gets the target of the event
    var target = getTarget(e);

    //Gets the parent of the target
    var tParent = target.parentNode;

    //Checks if the parent of the target is a list item (LI)
    if (tParent.tagName === 'LI') {
        // Remove the list item from the list
        myList.removeChild(tParent);
    } else if (tParent.tagName === 'UL') {
        // Add or remove the 'selected' class to the list item
        tParent.classList.toggle('selected');
    }
}

//Modifys the existing event listener to call a new function
myList.addEventListener('click', toggleGrayOut, false);

//Adds a new function to handle the toggle
function toggleGrayOut(e) {
    //Gets the target of the event
    var target = getTarget(e);

    //Checks if the clicked element is a list item and not the trashcan icon
    if (target.tagName === 'LI' && !target.classList.contains('listIcon')) {
        //Toggles the 'selected' class to gray out or return to normal
        target.classList.toggle('selected');
    }
}


