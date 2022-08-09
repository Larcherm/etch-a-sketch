//Recreation of the popular game etch-a-sketch on a website. Creates a random color on the first mouseover and
//and shades it each time afterwards

//creates and appends content_div to allow to calculate aspect ratio
const content_div = document.createElement("div");
content_div.classList.add("content_div");
document.querySelector(".aspect_ratio_div").appendChild(content_div);

//creates and append main div to place content
const main = document.createElement("div");
main.classList.add("main");
content_div.appendChild(main);

//creates form
const inputRow = document.createElement("div");
inputRow.classList.add("inputRow");
main.appendChild(inputRow);
const submitText= document.createElement("input");
submitText.setAttribute("type", "text");
inputRow.innerHTML = "Grid size: ";
inputRow.appendChild(submitText);
const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
inputRow.appendChild(submitButton);

createGrid();

addMouseover();

//adds function to submit button by creating a grid with the size give by the user
submitButton.addEventListener("click", () => {
    let input = Number(submitText.value);   
    if (!isNaN(input) && input <= 100) {
        let grid = document.querySelector(".grid");
        main.removeChild(grid);
        createGrid(input);
        addMouseover();
    }
})

//adds mouseover properties to the buttons of the grids
function addMouseover() {
    let grid_buttons = document.querySelectorAll(".grid_button");
    grid_buttons.forEach(grid_button => grid_button.addEventListener("mouseover", (e) => {
        let hoveredCount = grid_button.dataset.passed;
        if (hoveredCount === "0") {
            grid_button.style.backgroundColor = setRandomRGB();
            //creates attribute with original color to use for reference
            let bgColor = window.getComputedStyle(grid_button).backgroundColor;
            bgColor = bgColor.replace(/\D/g,' ').trim().split("  ");  
            grid_button.setAttribute("data-start_rgb", `${bgColor}`);
        }
        else if (hoveredCount < 9) {
            let original_rgb = grid_button.dataset.start_rgb.split(",");
            grid_button.style.backgroundColor = shadeRGB(hoveredCount, original_rgb);
        }
        else if (hoveredCount == 9) {
            grid_button.style.backgroundColor = "rgb(0, 0, 0)";
        }
        grid_button.dataset.passed = parseInt(hoveredCount) + 1;

    }))
}

//creates square grid using size to determine the number of squares
function createGrid(size = 16) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    main.appendChild(grid);
    for (let i = 0; i < size; i++) {
        const grid_row = document.createElement("div");
        grid_row.classList.add("grid_row");
        grid.appendChild(grid_row);
        for (let j = 0; j < size; j++) {
            let gb = document.createElement("div");
            gb.classList.add("grid_button");
            gb.setAttribute("data-passed", "0"); //attribute to determine how many mouseover passes
            grid_row.appendChild(gb);
        }
    }
}


function setRandomRGB () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function shadeRGB(hoveredCount, startRGB) {
    let r = startRGB[0] - (startRGB[0] / 10 * hoveredCount);
    let g = startRGB[1] - (startRGB[1] / 10 * hoveredCount);
    let b = startRGB[2] - (startRGB[2] / 10 * hoveredCount); 
    r = (r>=0)?r:0;
    g = (g>=0)?g:0;
    b = (b>=0)?b:0;
    return `rgb(${r}, ${g}, ${b})`;
}