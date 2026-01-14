"use strict";
const output = document.getElementById("output");
const iterateButton = document.getElementById("iterateButton");
function pretty(value) {
    return JSON.stringify(value, null, 2);
}
iterateButton.addEventListener("click", () => {
    const grid = document.getElementById("gridInput").value;
    const gamma = parseFloat(document.getElementById("gammaInput").value);
    const iters = parseInt(document.getElementById("iterInput").value, 10);
    fetch("/api/iterate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grid, gamma, iters }),
    })
        .then((res) => res.json())
        .then((data) => {
        output.textContent = pretty(data.values || data);
    });
});
