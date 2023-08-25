const sketchbox = document.getElementById("sketchbox");
const maxSize = 100;
let size = 16;

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

      cell.addEventListener("mouseenter", handleHover);
    }
  }
};

function handleHover(event) {
  event.target.style.backgroundColor = "black";
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

createGrid();
