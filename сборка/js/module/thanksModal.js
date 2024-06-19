let thanksModal = document.querySelector(".thankModal");
let thanksModalOpen = document.querySelector(".openThanksModal");
let thanksCloseBtn = document.querySelector(".thanksClose");
let thanksopenModal02 = document.querySelector(".openThanksModal02");
let thanksopenModal03 = document.querySelector(".openThanksModal03");
let thanksopenModal04 = document.querySelector(".openThanksModal04");
let thanksopenModal05 = document.querySelector(".openThanksModal05");
let thanksopenModal06 = document.querySelector(".openThanksModal06");

thanksModalOpen.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksopenModal02.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksopenModal03.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksopenModal04.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksopenModal05.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksopenModal06.onclick = function (e) {
    e.preventDefault();
    thanksModal.style.display = "block";
}

thanksCloseBtn.onclick = function() {
    thanksModal.style.display = "none";
    gApresModal.style.display = "none";
    gModal.style.display = "none";
    pModal.style.display = "none";
    sMPhModal.style.display = "none";
    downVarModal.style.display = "none";
    wchVidModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == thanksModal) {
    thanksModal.style.display = "none";
  }
}