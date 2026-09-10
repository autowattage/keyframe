const carousel = document.getElementById("carousel");
let pos = 0;

function myMove() {
  const id = setInterval(frame, 10);
  function frame() {
    if (pos >= carousel.scrollWidth - carousel.lastElementChild.scrollWidth) {
      pos = 0;
      carousel.style.right = "0";
    } else {
      pos += 0.3;
      carousel.style.right = pos + "px";
    }
  }
}
myMove();
