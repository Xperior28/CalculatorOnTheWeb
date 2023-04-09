function clearAll() {
    const blah = document.querySelector(".output");

    blah.innerHTML = "";
}

function showInput(input) {
    const screen = document.querySelector(".output");
    const output = document.createElement('p');
    output.textContent = input;

    clearAll();

    screen.appendChild(output);
}