let incldModal= document.querySelector(".includedInThePrice");
let incldModalClose = document.querySelector(".incldModalClose");
let openIncldmodal = document.querySelector(".incldModalOpen");

openIncldmodal.onclick = function (e) {
    e.preventDefault();
    incldModal.style.display = "block";
}


incldModalClose.onclick = function() {
    incldModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == incldModal) {
    incldModal.style.display = "none";
  }
}