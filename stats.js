const table = document.getElementById("data-table");

// Build table
data.forEach((value) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${value}</td>`;
  table.appendChild(row);
});

// Compute stats
const sum = data.reduce((a, b) => a + b, 0);
const mean = sum / data.length;
const max = Math.max(...data);

// Display stats
document.getElementById("stats").innerText =
  "Sum: " + sum + " | Mean: " + mean + " | Max: " + max;