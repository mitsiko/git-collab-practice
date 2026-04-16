const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Simple bar chart
data.forEach((value, index) => {
  ctx.fillStyle = "green";
  ctx.fillRect(index * 50, 200 - value * 3, 30, value * 3);
});