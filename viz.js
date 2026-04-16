const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Simple bar chart
data.forEach((value, index) => {
  ctx.fillStyle = "green";
  ctx.fillRect(index * 60, 200 - value * 3, 40, value * 3);
});