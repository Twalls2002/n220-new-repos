document.getElementById('title').innerText = "Welcome back!";

//Query Selector: target individual element/node using CSS selector
document.querySelector('p').innerText = "Query Selector";

document.querySelector('.content').innerHTML = "Query Selector using a class"; 

//Select Multiple elements
//By class name
document.getElementsByClassName('odd')[0].style.color="red";

//By Tag Name
document.getElementsByTagName('li')[3].style.backgroundColor="rgb(200, 200, 100)"; 

//quertSelectorAll
document.querySelectorAll('#myList li:not(.odd)')[0].style.fontWeight = "bold"; 

//Challenge: Target all list items and remove the bullets and add padding

let allItems = document.getElementsByTagName('li');

for(let i=0; i<allItems.length; i++) {
    allItems[i].liststyle = "none";
    allItems[i].style.padding = "10pxl";
}

//Challenge: Select alternative bands and give them a green background with white italicized text

let altBands = document.getElementsByClassName('alternative');

for (let a=0; a<altBands.length; a++) {
    altBands[a].style.backgroundColor="green";
    altBands[a].style.color="white";
    altBands[a].style.fontStyle="italic";
}

//Challenge: Make Candlebox text a link to their website
/*1.Target the right element
  2.Creat a variable with the element's text it in.
  3.Wrap a link around the text
  4.Put back into the list item
  */

 let cElement = document.querySelector('.rock: lastChild');
 let cText = cElement.innerText;
 console.log(cText);
    cText = '<a href = "https://www.candleboxrocks.com">' +cText + '</a>';
    cElement.innerHTML = ctext; 

    let allLists = document.getElementsByTagName('ul');
    let gList = allLists[allLists.length-1];
    
    console.log(gList);
    gList.appendChild(newLi);

 //Challenge: Add item to last list
 function addItem() {
  let  newItem = prompt("New Item: ");
  let newLi = document.createElement ('Li');
  let newLiText = document.createTextNode(nextItem);
  newLi.appendChild(newLiText); //<li>bannas</li>
  newLi.style.padding="10px";
  newLi.style.listStyle="none";

  //target List
  
  console.log(gList);
  gList.appendChild(newLi);

 function deleteItem(){
    let lastItem = gList.getlastElementChild;
    gList.removeChild(lastItem);
 }