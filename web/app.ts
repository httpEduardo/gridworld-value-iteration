const output = document.getElementById("output") as HTMLPreElement;
const iterateButton = document.getElementById("iterateButton") as HTMLButtonElement;

function pretty(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

iterateButton.addEventListener("click", () => {
  const grid = (document.getElementById("gridInput") as HTMLTextAreaElement).value;
  const gamma = parseFloat((document.getElementById("gammaInput") as HTMLInputElement).value);
  const iters = parseInt((document.getElementById("iterInput") as HTMLInputElement).value, 10);
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
