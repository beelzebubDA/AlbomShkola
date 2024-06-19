let wchVidModal= document.querySelector(".watchVideoModal");
let wchVidModalClose = document.querySelector(".wchVidMClose");
let openwchVidmodal = document.querySelector(".wchVidModalOpen");

openwchVidmodal.onclick = function (e) {
    e.preventDefault();
    wchVidModal.style.display = "block";
}


wchVidModalClose.onclick = function() {
    wchVidModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == wchVidModal) {
    wchVidModal.style.display = "none";
  }
}