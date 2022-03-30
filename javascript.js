// Get container nodes
const gridContainer = document.querySelector('.grid-container');
const btnGrid16 = document.querySelector('.grid-16');
const btnGrid32 = document.querySelector('.grid-32');
const btnGrid64 = document.querySelector('.grid-64');
const btnGrid128 = document.querySelector('.grid-128');

// Get grid size in pixels
const GRID_SIZE_PIXELS = gridContainer.clientWidth; // Turns out I didn't need this

function populateGrid (n) {
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
		row.appendChild(newSquare);
	}
}

function clearGrid () {
	while (gridContainer.lastChild) {
		gridContainer.removeChild(gridContainer.lastChild);
	}
}

populateGrid (16);