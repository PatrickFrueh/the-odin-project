/* Randomly generated choice */
function getComputerChoice() {
    /* Randomly generate number: 0, 1, 2 
       Pick computer choice based on number */
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = 'Non';

    switch (randomNumber) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper'
            break;
        case 2:
            choice = 'Scissors';
            break;
    }

    return choice;
}


/* Play a round of RPS */
function playMatch(computerChoice, playerChoice) {
    switch (computerChoice) {
        case 'Rock':
            switch (playerChoice) {
                case 'Rock':
                    result = 'Even';
                    break;
                case 'Paper':
                    result = 'Player wins!';
                    break;
                case 'Scissors':
                    result = 'Computer wins!';
                    break;
            }
        case 'Paper':
            switch (playerChoice) {
                case 'Rock':
                    result = 'Computer wins!';
                    break;
                case 'Paper':
                    result = 'Even';
                    break;
                case 'Scissors':
                    result = 'Player wins!';
                    break;
            }
        case 'Scissors':
            switch (playerChoice) {
                case 'Rock':
                    result = 'Player wins!';
                    break;
                case 'Paper':
                    result = 'Computer wins';
                    break;
                case 'Scissors':
                    result = 'Even';
                    break;
            }
    }
    return result;
}

const playerSelection = "Scissors"
const computerSelection = getComputerChoice()
console.log(playMatch(computerSelection, playerSelection))