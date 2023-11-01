let playerChoice = document.getElementsByClassName("choice");
      let compArray = ["Rock", "Paper", "Scissors"];
      let innerscore = 0;
      
      function RPS(numb) {
        let compDecision = compArray[Math.floor(Math.random() * compArray.length)];
     
        document.getElementById("resultDecision") == "The computer chose:" + compDecision;

         if (numb == 0) {
           (compDecision == "Paper"); {
            innerscore -= 1;
          }
           if (compDecision == "Scissors") {
            innerscore += 1;
          }}
        
      

        if (numb == 1) {
          if (compDecision == "Rock") {
            innerscore += 1;
          }
            if (compDecision == "Scissors") {
            innerscore -= 1;
          }
        }

        if (numb == 2) {
          if (compDecision == "Rock") {
            innerscore -= 1;
          }
           if (compDecision == "Paper") {
            innerscore += 1;
          
        }}

        
  
        if (numb == 3) {
          innerscore -= 0.5;
        }
        document.getElementById("Score").innerHTML = innerscore;
      }
    