function grid() {
    const mainDiv = document.querySelector(".main-div");
    for (let i = 0; i < 16 ** 2; i++) {
        let miniDiv = document.createElement("div");
        miniDiv.classList.add("grid-square");
        mainDiv.appendChild(miniDiv);
    }
}