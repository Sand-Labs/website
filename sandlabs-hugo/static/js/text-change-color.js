function getMousePosition(e){
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
}

const heroHeading = document.getElementById('heroHeading');




.onmousemove(getMousePosition)

heroHeading.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }