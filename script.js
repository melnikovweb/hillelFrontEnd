const figures = [
	{
		type: "square",
		width: 100,
		height: 100,
		background: "red"
	},
	{
		type: "circle",
		width: 150,
		height: 150,
		background: "green"
	},
	{
		type: "rectangle",
		width: 150,
		height: 150,
		background: "blue"
	}
];

const getEventType = event => console.log(`${event.type} with ${event.target.className}`);

for (let i in figures){

	let innerFig = document.createElement(`div`);

	innerFig.classList.add(figures[i].type);

	innerFig.style.background = figures[i].background;
	innerFig.style.height = `${figures[i].height}px`;
	innerFig.style.width = `${figures[i].height}px`;

        innerFig.onmouseenter = getEventType;
        innerFig.onmouseleave = getEventType;

	document.querySelector(`#figuresWrapper`).append(innerFig);
}

