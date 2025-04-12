const pageContainer = document.getElementById('container');
const gameContainer = document.getElementById('game-container');
const resetBoard = document.getElementById('reset-board');
const bkgrImg = document.getElementById('eAsBackground');
const headingH1 = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', generateDrawingBoard(288));

function generateDrawingBoard(numDivs) {
	for (let i = 0; i < numDivs; i++) {
		let drawDiv = document.createElement('div');
		drawDiv.classList.add('draw');
		gameContainer.appendChild(drawDiv);
	}
}

let drawingOnDivs = document.querySelectorAll('.draw');

drawingOnDivs.forEach((draw) => {
	draw.addEventListener(
		'mouseover',
		() => (draw.style.backgroundColor = '#666')
	);
});

resetBoard.addEventListener('click', resetBoardDivs);

function resetBoardDivs() {
	gsap.to(bkgrImg, {
		keyframes: {
			rotation: [10, -2, 2, -1, 0, -1, 0]
		},
		duration: 0.8,
		onComplete: changeBoardBackground
    });
    gsap.to(headingH1, {
			keyframes: {
				rotation: [10, -2, 2, -1, 0, -1, 0]
			},
			duration: 0.8,
			onComplete: changeBoardBackground
    });
    gsap.to(resetBoard, {
			keyframes: {
				rotation: [10, -2, 2, -1, 0, -1, 0]
			},
			duration: 0.8,
			onComplete: changeBoardBackground
		});
}

function changeBoardBackground() {
	drawingOnDivs.forEach((draw) => {
		draw.style.backgroundColor = 'white';
	});
}
