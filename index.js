const sketchbox = document.getElementById("sketchbox");
const maxSize = 100;
let size = 16;
let brushColor = 'black';


function createGrid() {
  sketchbox.innerHTML = "";
  const cellSize = 600/size;

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketchbox.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${cellSize}px`
      cell.style.height = `${cellSize}px`
      
      row.appendChild(cell);
      let hoverCount = 1;

      cell.addEventListener("mouseenter", () => {
        handleHover(cell, hoverCount);
        hoverCount++;
      });
    }
  }
};


const sizeButton = document.getElementById("sizeSelect");
sizeButton.addEventListener("click", handleClick);

function handleClick() {
  const userInput = window.prompt("Input the size of the grid. Max 100");
  if (userInput === null) {
    return;
  }
  const parsedInput = parseInt(userInput, 10);
  if (parsedInput >= 16 && parsedInput <= maxSize) {
    size = parsedInput;
    createGrid();
  } else {
    alert("Invalid input! Please enter a number between 16 and 100!");
  }
};

function handleHover(cell, hoverCount) {
    if (brushColor === 'random') {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      cell.style.backgroundColor = randomColor;
    } else if (brushColor === 'progress') {
        const opacity = Math.min(hoverCount / 10, 1);
        cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
    else {
      cell.style.backgroundColor = brushColor;
    }
  };

const blackBrushBtn = document.getElementById('blackBrush');
const randomBrushBtn = document.getElementById('randomBrush');
const progressBrushBtn = document.getElementById('progressBrush');

blackBrushBtn.addEventListener('click', () => {
    brushColor = 'black'
});

randomBrushBtn.addEventListener('click', () => {
    brushColor = 'random';
});

progressBrushBtn.addEventListener('click', () => {
    brushColor = 'progress';
});


const clearBoard = document.getElementById('clearBoard');
clearBoard.addEventListener("click", ()=>createGrid());


createGrid();
