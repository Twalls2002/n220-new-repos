function leaveRoom(){
    alert("You chose to leave the room. Chicken.");
}

function enterRoom(){
    prompt("You chose to enter the room and it's dark.");
    if(tool.toUpperCae()==="SHOVEL") {
        alert("the shovel came in handy. You knocked out the beast by hitting him on the head with" + tool+".");
    } else if(tool.toUpperCase()==="LADDER"){
        alert("The ladder didn't help you much. The beast knocked you down and ate you.");
    } else {
        alert("The" + tool +" helped you see the beast and you were able  to run away in time.");
    }   
}
function startGame(){
    var user = prompt("Welcome to my adventure game. Please enter your name:");
    alert("Welcome, "+ user + " to my campus adventure. Are your ready? If so, click okay.");
    let tool = prompt("To begin your adventure, please select a tool: shovel, ladder, flashlight");
    let room = prompt("You walk through the campus center and hear a loud, menacing growl coming from a room around the corner. Do you ENTER or do you LEAVE?");
    if (room.toUpperCase()=="LEAVE") {
        leaveRoom();
    } else {
        enterRoom();
    }
}