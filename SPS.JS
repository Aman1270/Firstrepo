let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msag = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const drawgame = () => {

    msag.innerText = "Game Was Draw ! play again";
    msag.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msag.innerText = `you win! your${userchoice} beats ${compChoice} `;

        msag.style.backgroundColor = "green"
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msag.innerText = `Comp win! Comp${compChoice} beats ${userchoice} `;
        msag.style.backgroundColor = "red"
    }
};

const gencompchoice = () => {
    const randidx = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissor"]
    return options[randidx];
}

const playgame = (userchoice) => {
    // console.log("userchoice =", userchoice)
    const compChoice = gencompchoice()
    // console.log("compchoice =", compChoice)


    if (userchoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("Choice was clicked", userchoice)
        playgame(userchoice)
    })
})