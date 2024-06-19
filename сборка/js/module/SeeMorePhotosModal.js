let sMPhModal= document.querySelector(".SeeMorePhotosModal");
let sMPhModalClose = document.querySelector(".sMPhMClose");
let opensMPhModal = document.querySelector(".openSeeMorePhotosModal");

console.log(openIncldmodal);

opensMPhModal.onclick = function (e) {
    e.preventDefault();
    sMPhModal.style.display = "block";
}


sMPhModalClose.onclick = function() {
    sMPhModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == sMPhModal) {
    sMPhModal.style.display = "none";
  }
}