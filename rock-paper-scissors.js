function computerPlay() {
    let randomInt = getRandomIntInclusive(0, 2);
    console.log(randomInt);

    if (randomInt == 0) {
        let choice = "Rock";
        console.log(choice);
        return choice;
    } else if (randomInt == 1) {
        let choice = "Paper"; 
        console.log(choice);
        return choice;
    }
    else {
        let choice = "Scissors";
        console.log(choice);
        return choice;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}

function playRound(playerSelection, computerSelection) {
    playerLower = playerSelection.toLowerCase();
    computerLower = computerSelection.toLowerCase();
    while (playerLower != "rock" && playerLower != "paper" && playerLower != "scissors") {
        playerLower = prompt("Not an acceptable answer. Try again").toLowerCase();
        console.log(playerLower);
    }

    if (computerLower == "rock" && playerLower == "scissors") {
        let string = "You lose! Rock beats Scissors!";
        return string;
    } else if (computerLower == "paper" && playerLower == "rock") {
        let string = "You lose! Paper beats Rock!";
        return string;
    } else if (computerLower == "scissors" && playerLower == "paper") {
        let string = "You lose! Scissors beats Paper!";
        return string;
    } else if (computerLower == "rock" && playerLower == "paper") {
        let string = "You win! Paper beats Rock!";
        return string;
    } else if (computerLower == "scissors" && playerLower == "rock") {
        let string = "You win! Rock beats scissors!";
        return string;
    } else if (computerLower == "paper" && playerLower == "scissors") {
        let string = "You win! Scissors beats Paper!";
        return string;
    } else {
        let string = "It's a draw!";
        return string;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let message;
        do {
            let playerSelection = prompt("Rock, paper, or scissors?");
            let computerSelection = computerPlay();
            message = playRound(playerSelection, computerSelection);
            console.log(message);
            if (message.slice(0,7) == "You win") {
                playerWins++;
            } else if (message.slice(0, 8) == "You lose") {
                computerWins++;
            }
        }
        while (message == "It's a draw!");

        if (playerWins >= 3) {
            console.log("You win!");
            break;
        } else if (computerWins >= 3) {
            console.log("The computer won!");
            break;
        }
    }
    console.log(playerWins);
    console.log(computerWins);

}

console.log(game());
