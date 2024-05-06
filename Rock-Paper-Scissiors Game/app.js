let userScore=0;
let compScore=0;

// its for stores the choices you choose
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

// for generate computer choice
const genCompChoice = () =>{
    let option=["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return option[randIdx];
};

// for printing the draw game
const drawGame = () =>{
    // console.log("game was draw.");
    msg.innerText = "Game was Draw.Play Again."
    msg.style.backgroundColor="#081b31"
};
 
// for printing the lose or win Game
const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}

// for user choice
const playGame = (userChoice) =>{
    // console.log("user choice",userChoice);

    // computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice)

    // check the draw cond.
    if(userChoice == compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
           userWin = compChoice == "paper" ? false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice ==="scissor" ? false:true;
        }
        else{
            compChoice == "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

// for capturing our clicked
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id")
// console.log("choice was clicked",userChoice);
playGame(userChoice);
    })
});