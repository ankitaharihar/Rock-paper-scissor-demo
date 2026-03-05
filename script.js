const user = document.getElementById("user");
     const computer = document.getElementById("computer");
     const result = document.getElementById("result");

function playgame(userChoice) {
    let random = Math.floor(Math.random() * 3);
     let computerChoice = choice[random];
     
     
    console.log("User choice is" , userChoice) ;
    console.log("Computer choice" , computerChoiceChoice) ;
    if (userChoice== computerChoice){
    resultuser.innerText = "Draw the Game"
    console.log("draw")
    }else if(userChoice=="rock"&& computerChoice=="scissor" || userChoice=="scissor"&& computerChoice=="paper" || userChoice=="paper"&& computerChoice=="rock"){ 
    console.log("User win");
    }else{
    console.log("Computer win");
    }

    
}