let gModal= document.getElementById("gPModal__block");
let gModalClose = document.getElementById("gModalclose");
let openGmodal = document.getElementById("gModal__btn");

openGmodal.onclick = function (e) {
    e.preventDefault();
    gModal.style.display = "block";
}


gModalClose.onclick = function() {
    gModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gModal) {
    gModal.style.display = "none";
  }
}