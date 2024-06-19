"use strict";

$(document).ready(function () {


  $('.our__ex__gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease',
    arrows: false,
    accessibility: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1020,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "5%",
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "5%",
        slidesToShow: 1
      }
    }]
  });

  //BEGIN ACCORDION
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $this.prev().addClass("rotate");
      $('.acc__bg02').not($this.prev()).removeClass("rotate");
    } else {
      $this.prev("").removeClass("rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
  });
  //END ACCORDION

  lightGallery(document.querySelector('.pModal--lightgallery'), {
    thumbnail: true
  });
  lightGallery(document.querySelector('.gModal--lightgallery'), {
    thumbnail: true
  });
  lightGallery(document.querySelector('.sMPhM--lightgallery'), {
    thumbnail: true
  });
  lightGallery(document.querySelector('.covers__examples'), {
    thumbnail: true
  });

  //  другой способ добавлять модули
  //module/libs/lightslider.min.js
  // console.log("Здесь буду писать скрипты")
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
  let wchVidModal= document.querySelector(".watchVideoModal");
  let wchVidModalClose = document.querySelector(".wchVidMClose");
  let openwchVidmodal = document.querySelector(".wchVidModalOpen");


  let player = new Plyr(".albomReview__video", {
    autoplay: true,
  });

  openwchVidmodal.onclick = function (e) {
      e.preventDefault();
      wchVidModal.style.display = "block";
  }
  
  
  wchVidModalClose.onclick = function() {
      wchVidModal.style.display = "none";
      player.pause();
      
    }
  
  window.onclick = function(event) {
    if (event.target == wchVidModal) {
      wchVidModal.style.display = "none";
    }
  }
  
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

  // Jquery version
  
  $(".header__hamburger").on("click", function (e) {
      e.preventDefault();
      $(".header__hamburger").toggleClass("active");
      $(".header__lists").toggleClass("active");
      $(".header__list").on("click", function () {
          $(".header__lists").removeClass("active");
          $(".header__hamburger").removeClass("active");
          $(".header_hamburger-menu").removeClass("opened");
      });
  });
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
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
      player.pause();
  }
  
  window.onclick = function(event) {
    if (event.target == thanksModal) {
      thanksModal.style.display = "none";
    }
  }

  $('.quizz_button').on('click', function (e) {
    e.preventDefault();
    var nextStep = $(this).data('next');
    var currenProgressValue = $('.' + nextStep).data('progress');
    $('.quizz_step').slideUp();
    $('.' + nextStep).slideDown();
    $('.progress_status').css('width', currenProgressValue);
  });


  var swiper = new Swiper(".parent__Reviews--slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });


  function selectedDesign() {
    var allimgClass = $(".covers__item");
    var designChoose = $(".design__chooser");
    var schoolChange = $(".school__choose");
    var classicMImg = $(".classicM");
    var classicSImg = $(".classicS");
    var modernMImg = $(".modernM");
    var modernSImg = $(".modernS");
    var showMore = $(".covers__show__more");
    schoolChange.on("change", function (e) {
      e.preventDefault();
      if (schoolChange.val() == "junior") {
        classicMImg.addClass("visible");
        allimgClass.not(classicMImg).removeClass("visible");
      } else if (schoolChange.val() == "high") {
        classicSImg.addClass("visible");
        allimgClass.not(classicSImg).removeClass("visible");
      }
      return schoolChange.val();
    });
    designChoose.on("change", function (e) {
      e.preventDefault();
      if (schoolChange.val() == "junior" && designChoose.val() == "classic") {
        classicMImg.addClass("visible");
        allimgClass.not(classicMImg).removeClass("visible");
      } else if (schoolChange.val() == "junior" && designChoose.val() == "modern") {
        modernMImg.addClass("visible");
        allimgClass.not(modernMImg).removeClass("visible");
      } else if (schoolChange.val() == "high" && designChoose.val() == "classic") {
        classicSImg.addClass("visible");
        allimgClass.not(classicSImg).removeClass("visible");
      } else if (schoolChange.val() == "high" && designChoose.val() == "modern") {
        modernSImg.addClass("visible");
        allimgClass.not(modernSImg).removeClass("visible");
      }
      return designChoose.val();
    });
    showMore.on("click", function (e) {
      e.preventDefault();
      if (schoolChange.val() == "junior") {
        if (designChoose.val() == "classic") {
          modernMImg.addClass("visible");
        } else if (designChoose.val() == "modern") {
          classicMImg.addClass("visible");
        }
      } else if (schoolChange.val() == "high") {
        if (designChoose.val() == "classic") {
          modernSImg.addClass("visible");
        } else if (designChoose.val() == "modern") {
          classicSImg.addClass("visible");
        }
      }
    });
  }
  selectedDesign();
  $(".album__reg__input").mask("+7 (999)  999 - 99 - 99");
  $(".wchVidm__R--tel").mask("+7 (999) 999 - 99 - 99");

  // СРАВНЕНИЕ ДВУХ ИЗОБРАЖЕНИЙ
  $(function () {
    $(".man__proc__R--side .preview_content").cndkbeforeafter({
      autoSliding: true,
      showText: false,
      hoverEffect: false,
      autoSlidingStopOnHover: true
    });
  });
});