let gApresModal= document.querySelector(".getaPresentModal");
let gApresModalClose = document.querySelector(".gApresentClose");
let gApresopenGmodal = document.querySelector(".gApresentModal__open");
let gApresopenMHero = document.querySelector(".HerogApresM_open");
let takeApresBtn = document.querySelector(".takePres__L__btn");
let open__Modal__Album__var = document.querySelector(".openModal__present");
let open__Modal__Album__var02 = document.querySelector(".openModal__present02");
let open__btnbat = document.querySelector(".bAt__T__R--btn");
let open__btn__album__reg = document.querySelector(".album__reg__btn");

gApresopenGmodal.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

open__btn__album__reg.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

open__Modal__Album__var.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

open__btnbat.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

open__Modal__Album__var02.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

gApresopenMHero.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

takeApresBtn.onclick = function (e) {
    e.preventDefault();
    gApresModal.style.display = "block";
}

gApresModalClose.onclick = function() {
    gApresModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gApresModal) {
    gApresModal.style.display = "none";
  }
}