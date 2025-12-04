
const colorDisplay = document.getElementById('color-display');
const colorButton = document.getElementById('color-btn');
const body = document.body;

const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function getRandomHexChar() {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    return hexChars[randomIndex];
}

function generateHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += getRandomHexChar();
    }
    return hexColor;
}

function changeColor() {
    const newColor = generateHexColor();
    
    body.style.backgroundColor = newColor;
    
    colorDisplay.textContent = newColor;
    
    colorDisplay.style.color = newColor;
    colorDisplay.style.borderColor = newColor;
}


colorButton.addEventListener('click', changeColor);

changeColor();