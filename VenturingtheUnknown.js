function startGame(){
    var user = prompt("Enter name:");
    alert("Welcome, "+ user + " to Venturing the Unknown! To begin, click ok.");
    let door = prompt("You are a miner in a cave. While walking in the cave, you see a weird metal door up ahead with a lever to open it. Do you OPEN it or IGNORE it? " );
    if (door.toUpperCase()=="OPEN") {
        //openDoor(); 
            alert ("You pull the leverage, the door lifts, and you walk through it. However, upon entering, the door closes and locks behind you rendering you unable to get back out!"); 
        }
    

else if (door.toUpperCase()== "IGNORE"){
    
    var decision2 = prompt("You turn back around, and meet with your co-workers. They inform you that there is in Alien Invasion going on Outside! Do you STAY or LEAVE from the cave?")

}
if (door.toUpperCase()=="STAY") {
      
       var decision3= prompt ("You decide to stay in, but suddenly an alien spacecraft has shot the cave's exterior causing the intrance to collapse and cave in. You all are now stuck in the cave. ")
      } 
}