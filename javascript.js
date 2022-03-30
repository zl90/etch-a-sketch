// Get container nodes
const gridContainer = document.querySelector('.grid-container');
const btnGrid16 = document.querySelector('.grid-16');
const btnGrid32 = document.querySelector('.grid-32');
const btnGrid64 = document.querySelector('.grid-64');
const btnGrid128 = document.querySelector('.grid-128');
const btnStandard = document.querySelector('.btn-standard');
const btnRainbow = document.querySelector('.btn-rainbow');
const btnClear = document.querySelector('.btn-clear');
const btnTransparent = document.querySelector('.btn-transparent');


// Grid logic
const GRID_SIZE_PIXELS = gridContainer.clientWidth; // Turns out I didn't need this
let currentGridSize = 16; // default 16x16 grid
let rainbowMode = false;
let transparentMode = false;

// Button listeners
btnClear.addEventListener('click', () => {
	clearGrid();
	populateGrid(currentGridSize);
});
btnGrid16.addEventListener('click', () => {populateGrid(16)});
btnGrid32.addEventListener('click', () => {populateGrid(32)});
btnGrid64.addEventListener('click', () => {populateGrid(64)});
btnGrid128.addEventListener('click', () => {populateGrid(128)});
btnRainbow.addEventListener('click', () => {rainbowMode = true; transparentMode = false;})
btnStandard.addEventListener('click', () => {rainbowMode = false; transparentMode = false;})
btnTransparent.addEventListener('click', () => {rainbowMode = false; transparentMode = true;})


function populateGrid (n) {
	clearGrid();
	currentGridSize = n;

	for (let i = 0; i < n; i++) {
		let newRow = document.createElement('div');
		newRow.classList.add('grid-row');
		populateRow(n, newRow);
		gridContainer.appendChild(newRow);
	}
}

function populateRow (n, row) {
	for (let i = 0; i < (n); i++) {
		let newSquare = document.createElement('div');
		newSquare.classList.add('grid-square');
		newSquare.style.flex = 1;
		newSquare.style.borderBottom = '1px solid lightgrey';
		newSquare.style.borderRight = '1px solid lightgrey';
		newSquare.addEventListener("mouseenter", changeColour);
		newSquare.style.backgroundColor = 'aliceblue';
		row.appendChild(newSquare);
	}
}

function changeColour (e) {
	console.log(`transparentMode: ${transparentMode}`);
	if (!rainbowMode) {
		if (!transparentMode) {
			e.target.style.backgroundColor = 'black';
		} else {
			// Increment Transparency of square each time the mouse moves over
			if (e.target.style.backgroundColor === 'aliceblue') {
				e.target.style.backgroundColor = 'black';
				e.target.style.opacity = '0.02';
			} else if (e.target.style.backgroundColor === 'black') {
				switch (e.target.style.opacity) {
					case '0.02':
						e.target.style.opacity = '0.1';
						break;
					case '0.1':
						e.target.style.opacity = '0.3';
						break;
					case '0.3':
						e.target.style.opacity = '0.4';
						break;
					case '0.4':
						e.target.style.opacity = '0.5';
						break;
					case '0.5':
						e.target.style.opacity = '0.6';
						break;
					case '0.6':
						e.target.style.opacity = '0.7';
						break;
					case '0.7':
						e.target.style.opacity = '0.8';
						break;
					case '0.8':
						e.target.style.opacity = '0.9';
						break;
					case '0.9':
						e.target.style.opacity = '1';
						break;
					default:
						e.target.style.opacity = '1';
						break;
				}
			}
		}
	} else {
		// change color to random 
		e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
	}
}

function clearGrid () {
	while (gridContainer.lastChild) {
		gridContainer.removeChild(gridContainer.lastChild);
	}
}

populateGrid (16);