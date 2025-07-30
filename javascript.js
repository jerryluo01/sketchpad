const mainDiv = document.querySelector(".main-div");
function grid() {
    for (let i = 0; i < 16 ** 2; i++) {
        let miniDiv = document.createElement("div");
        miniDiv.classList.add("grid-square");
        mainDiv.appendChild(miniDiv);
        miniDiv.style.width = "40px";
        miniDiv.style.height = miniDiv.style.width;
        miniDiv.addEventListener("mouseover", () => miniDiv.style.backgroundColor = "blue");
    }
}

function square() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        let input = prompt("Squares per Side");
        if (input > 100) {
            input = prompt("Maximum 100");
        }
        const divs = document.querySelectorAll(".grid-square")
        divs.forEach(sq => sq.remove());
        for (let i = 0; i < input ** 2; i++) {
            let miniDiv = document.createElement("div");
            miniDiv.classList.add("grid-square");
            miniDiv.style.width = `${640 / input}px`;
            miniDiv.style.height = miniDiv.style.width;
            mainDiv.appendChild(miniDiv);
            miniDiv.addEventListener("mouseover", () => miniDiv.style.backgroundColor = "blue");
        }
    });
}

grid();
square();