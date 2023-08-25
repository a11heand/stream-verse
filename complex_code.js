/* Filename: complex_code.js
   Content: This complex code demonstrates a dynamic data visualization using JavaScript. It randomly generates data, creates a chart using Chart.js library, and updates the chart in real-time using setInterval. Enjoy! */

// Create an array to store dynamic data
let data = [];

// Function to generate random data
function generateData() {
  let newData = [];
  for (let i = 0; i < 10; i++) {
    let randomValue = Math.floor(Math.random() * 100);
    newData.push(randomValue);
  }
  return newData;
}

// Function to update the chart in real-time
function updateChart() {
  let chartData = generateData();
  // Update the data array with new values
  data = chartData;
  // Update the chart's data and redraw
  chart.data.datasets[0].data = chartData;
  chart.update();
}

// Create a canvas element to render the chart
let canvas = document.createElement("canvas");
canvas.id = "chart";

// Append the canvas element to the body
document.body.appendChild(canvas);

// Create a new chart using Chart.js library
let ctx = document.getElementById("chart").getContext("2d");
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Random Data",
        data,
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "rgb(0, 123, 255)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});

// Update the chart every 1 second
setInterval(updateChart, 1000);