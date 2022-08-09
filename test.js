let size = 16;

const content_div = document.createElement("div");
content_div.classList.add("content_div");
document.querySelector(".aspect_ratio_div").appendChild(content_div);

const main = document.createElement("div");
main.classList.add("main");
content_div.appendChild(main);

window.addEventListener("load", (event) => {
    createGrid(size);
})

let grid_button = document.querySelectorAll(".content_div");
console.log(grid_button);

// grid_button.addEventListener("click", () => {
//     console.log("Clicked");
// })

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

function randomRGB () {
    return Math.floor(Math.random() * 256);
}

if (times_hovered === "0") {
    grid_button.style.backgroundColor = "rgb(0, 0, 0)";
    times_hovered += 1;
}