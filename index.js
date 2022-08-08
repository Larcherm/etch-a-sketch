let size = 16;
//creates and appends content_div to allow to calculate aspect ratio
const content_div = document.createElement("div");
content_div.classList.add("content_div");
document.querySelector(".aspect_ratio_div").appendChild(content_div);

//creates and append main div to place content
const main = document.createElement("div");
main.classList.add("main");
content_div.appendChild(main);

createGrid();

let grid_buttons = document.querySelectorAll(".grid_button");

grid_buttons.forEach(grid_button => grid_button.addEventListener("mouseover", (e) => {
    let hoveredCount = grid_button.dataset.passed;
    let bgColor = window.getComputedStyle(grid_button).backgroundColor;
    bgColor = bgColor.replace(/\D/g,' ').trim().split("  ");   
    if (hoveredCount === "0") {
        grid_button.style.backgroundColor = setRandomRGB();
        grid_button.dataset.passed = 1;
    }

}))

function createGrid(size = 16) {

    for (let i = 0; i < size; i++) {
        const grid_row = document.createElement("div");
        grid_row.classList.add("grid_row");
        main.appendChild(grid_row);
        for (let j = 0; j < size; j++) {
            let gb = document.createElement("div");
            gb.classList.add("grid_button");
            gb.setAttribute("data-passed", "0");
            //grid_button.textContent = `${j}`;
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