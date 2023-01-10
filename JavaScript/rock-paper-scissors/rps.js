/* Helper function to adjust spelling */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


/* Randomly generated choice */
function getComputerChoice() {
    /* Randomly generate number: 0, 1, 2 
       Pick computer choice based on number */
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = 'None';

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
    let result = 'None'
    switch (computerChoice) {
        case 'Rock':
            switch (playerChoice) {
                case 'Rock':
                    console.log('Even.');
                    result = 'E';
                    break;
                case 'Paper':
                    console.log('Player wins!');
                    result = 'P';
                    break;
                case 'Scissors':
                    console.log('Computer wins!');
                    result = 'C';
                    break;
            }
            return result;
        case 'Paper':
            switch (playerChoice) {
                case 'Rock':
                    console.log('Computer wins!');
                    result = 'C';
                    break;
                case 'Paper':
                    console.log('Even.');
                    result = 'E'
                    break;
                case 'Scissors':
                    console.log('Player wins!');
                    result = 'P';
                    break;
            }
            return result;
        case 'Scissors':
            switch (playerChoice) {
                case 'Rock':
                    console.log('Player wins!');
                    result = 'P';
                    break;
                case 'Paper':
                    console.log('Computer wins!');
                    result = 'C';
                    break;
                case 'Scissors':
                    console.log('Even.');
                    result = 'E';
                    break;
            }
            return result;
    }
}

function game(playerSelection) {
    // Initialize match counter variables
    let c = 0;
    let p = 0;
    let e = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter your choice for a match of Rock-Paper-Scissors:", 'Rock')
        playerSelection = capitalizeFirstLetter(playerSelection)
        console.log('corrected spelling', playerSelection)
        result = playMatch(computerSelection, playerSelection)
        switch (result) {
            case 'C':
                c += 1;
                break;
            case 'P':
                p += 1;
                break;
            case 'E':
                e += 1;
                break;
        }
        console.log('C:', c, '\nP:', p, '\nE:', e)
    }

    if (c > p) {
        console.log('Computer wins!')
    }
    else if (c == p) {
        console.log('No winners.')
    }
    else {
        console.log('Player wins!')
    }
}

// Play a match of Rock-Paper-Scissors
const playerSelection = 'None'
game(playerSelection)
