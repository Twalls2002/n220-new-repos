var currentWinnings = 100;

//Random Number
function newNum() {
    document.getElementById('wText').innerHTML=Math.floor(Math.random()*6);

if (newNum==1){
    wText = "Winning text: It is good to be number 1! You doubled your winnings!"</br>"Outcome: double your winnings";
} else if (newNum==2){
    wText = "Winning text: Second best is not good enough. Roll again." </br> "Outcome: call the function again.";
} else if (newNum==3){
    wText = "Winning text: Three is not a lucky number at all. You lose all your winnings!"</br>"Outcome: Lose all your winnings";
}