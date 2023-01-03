/* Helper functions */


/* Problem related function */
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

