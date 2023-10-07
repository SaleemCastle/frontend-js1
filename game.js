function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
	const size = options.length;
    const optionsIndex = Math.floor(Math.random() * size)
    return options[optionsIndex];
}

function playRound(userChoice, computerChoice) {
	userChoice = userChoice.trim().toLowerCase(); 
	
	if (
		(userChoice === "rock" && computerChoice === "Scissors") ||
		(userChoice === "paper" && computerChoice === "Rock") ||
		(userChoice === "scissors" && computerChoice === "Paper")
	) {
		return `You Win! ${userChoice} beats ${computerChoice}`;
	} else if (
		(userChoice === "rock" && computerChoice === "Paper") ||
		(userChoice === "paper" && computerChoice === "Scissors") ||
		(userChoice === "scissors" && computerChoice === "Rock")
	) {
		return `You Lose! ${computerChoice} beats ${userChoice}`;
	} else {
		return "It's a Tie! Both chose " + userChoice;
	}
}

function getUserChoice(round) {
	let userOption = "";
	while (true) {
		userOption = prompt(`Round ${round} - Enter your choice: Rock, Paper, or Scissors`);
		
		// Check if the user pressed cancel
        if (userOption === null) {
            const leaveGame = confirm("Are you sure you want to leave the game?");
            if (leaveGame) {
              alert("Thanks for playing! See you next time.");
              return null;
            }
            continue;
        }
		
		userOption = userOption.toLowerCase().trim();
		
		if (userOption === "rock" || userOption === "paper" || userOption === "scissors") {
			return userOption;
		} else {
			alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
		}
	}
  }

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let index = 0; index < 5; index++) {
        const round = index + 1
		const playerSelection = getUserChoice(round);
		const computerChoice = computerPlay();

		const result = playRound(playerSelection, computerChoice);
		console.log(result);

		if (result.startsWith("You Win!")) {
			playerScore++;
		} else if (result.startsWith("You Lose!")) {
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		console.log("Congratulations! You win the game.");
	} else if (playerScore < computerScore) {
		console.log("Sorry, you lose the game. Try again.");
	} else {
		console.log("It's a tie game. No winner.");
	}
}

function startGame() {
    while (true) {
        const startPrompt = "Do you want to start a game of Rock, Paper, Scissors? (Yes/No)";
        const userResponse = prompt(startPrompt);
        
        if (userResponse !== null && userResponse.toLowerCase() === "yes") {
          return game();
        } else if (userResponse !== null && userResponse.toLowerCase() === "no") {
            alert("Okay, maybe next time!");
            return null
        } else {
            alert("Please answer yes or no")
        }
    }
}

startGame();
