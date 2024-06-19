let downVarModal= document.querySelector(".downloadVariant");
let downVarModalClose = document.querySelector(".dowVarClose");
let downVaropenGmodal = document.querySelector(".openDownVarModal");

downVaropenGmodal.onclick = function (e) {
    e.preventDefault();
    downVarModal.style.display = "block";
}

downVarModalClose.onclick = function() {
    downVarModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == downVarModal) {
    downVarModal.style.display = "none";
  }
}