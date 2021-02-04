const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
let intID;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let start = document.querySelector("#start");
start.addEventListener("click", changecolor);

function changecolor() {
  intID = setInterval(function () {
    document.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  start.disabled = true;
}

let stop = document.querySelector("#stop");
stop.addEventListener("click", stopColor);

function stopColor() {
  clearInterval(intID);
  start.disabled = false;
}
