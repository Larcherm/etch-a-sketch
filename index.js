let size = 16;

window.addEventListener("load", (event) => {
    createGrid(size);
})

function createGrid(size = 16) {
    const main = document.querySelector(".main")
    let k = 0;
    for (let i = 0; i < size; i++) {
        const grid_column = document.createElement("div");
        grid_column.style.cssText = "display:flex;flex:1;"
        main.appendChild(grid_column);
        for (let j = 0; j < size; j++) {
            let grid_button = document.createElement("div");
            grid_button.classList.add("grid_button");
            //grid_button.textContent = `${j}`;
            grid_column.appendChild(grid_button);
            k++;
        }
    }
}