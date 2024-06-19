let pModal= document.getElementById("portModal");
let pModalClose = document.getElementById("pModalclose");
let openPmodal = document.getElementById("pModalOpen__btn");

openPmodal.onclick = function (e) {
    e.preventDefault();
    pModal.style.display = "block";
}


pModalClose.onclick = function() {
    pModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == pModal) {
    pModal.style.display = "none";
  }
}