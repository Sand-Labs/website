var colors = ["#f3ece3", "#E7D9C8", "#CFAF8C", "#34435E", "#5F7395", "#B77B93", "#E6B8C5"]
var currentColor = 0
var ht = document.getElementsByClassName("headerTitle")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    ht.style.color = colors[(currentColor +i) % colors.length]
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

setInterval(changeColor, 1000)