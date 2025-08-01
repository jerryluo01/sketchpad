const mainDiv = document.querySelector(".main-div");
const btn = document.querySelector("button");
let isDrawing = false;


function getRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function square(input = 16) {            
    for (let i = 0; i < input ** 2; i++) {
        let color = getRGB();
        let miniDiv = document.createElement("div");
        miniDiv.classList.add("grid-square");
        miniDiv.style.width = `${640 / input}px`;
        miniDiv.style.height = miniDiv.style.width;
        mainDiv.appendChild(miniDiv);
        miniDiv.addEventListener("mousedown", () => {
            isDrawing = true;
            miniDiv.style.backgroundColor = `${color}`
    });
        miniDiv.addEventListener("mouseover", () => {
            if (isDrawing === true) {
            miniDiv.style.backgroundColor = `${color}`
            }
        });
    }
}

btn.addEventListener("click", () => {
    let input = prompt("Squares per Side (max 100)");
    if (input > 100) {input = 100}
    if (input < 1 || isNaN(input)) {input = 16}
    const divs = document.querySelectorAll(".grid-square");
    divs.forEach(sq => sq.remove());
    square(Number(input));
});

document.addEventListener("mouseup", () => isDrawing = false);

square();