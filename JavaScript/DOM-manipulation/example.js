const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1: <p> in red
const redText = document.createElement('p');
redText.style.color = 'red'
redText.textContent = 'Hey I\'m red!';

container.appendChild(redText);


// 2: <h3> in blue
const blueText = document.createElement('h3');
blueText.style.color = 'blue'
blueText.textContent = 'Hey I\'m a blue h3!';

container.appendChild(blueText);


// 3: <div> black border and pink bg
const blackPinkDiv = document.createElement('div')
blackPinkDiv.style.borderColor = 'black'
blackPinkDiv.style.backgroundColor = 'pink'

const simpleDiv = document.createElement('div')
simpleDiv.textContent = 'I\'m in a div!'

const simpleP = document.createElement('p')
simpleP.textContent = 'ME TOO!'

blackPinkDiv.appendChild(simpleDiv)
blackPinkDiv.appendChild(simpleP)

container.appendChild(blackPinkDiv)