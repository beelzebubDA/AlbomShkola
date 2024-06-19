console.log("JS проверка");

$(document).ready(function(){

    $('.our__ex__gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease',
        arrows: false,
        accessibility: true,
        adaptiveHeight : true,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "5%",
                    slidesToShow: 2,
                }
            },
            {
            breakpoint: 480,
            settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "5%",
                    slidesToShow: 1
                }
            }
        ]
    });

    //BEGIN ACCORDION
    $(".accordion__title").on("click", function(e) {
    
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
        thumbnail: true,
    });

    lightGallery(document.querySelector('.gModal--lightgallery'), {
        thumbnail: true,
    });

    lightGallery(document.querySelector('.sMPhM--lightgallery'), {
        thumbnail: true,
    });

    lightGallery(document.querySelector('.covers__examples'), {
        thumbnail: true,
    });


    //  другой способ добавлять модули
    //module/libs/lightslider.min.js
    //= module/burgerScript.js
    //= module/gModal.js
    //= module/pModal.js
    //= module/gApresModal.js
    //= module/incldModal.js
    //= module/wchVidModal.js
    //= module/SeeMorePhotosModal.js
    //= module//libs/burger.js
    //= module//libs/corousel.js
    //= module/downVar.js
    //= module/thanksModal.js

    $('.quizz_button').on('click',function(e){
        e.preventDefault();
        
        let nextStep = $(this).data('next');
        let currenProgressValue = $('.' + nextStep).data('progress');
        
        $('.quizz_step').slideUp();
        $('.' + nextStep).slideDown();

        $('.progress_status').css('width',currenProgressValue);

    });

    var swiper = new Swiper(".parent__Reviews--slider", {
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    function selectedDesign() {
        let allimgClass = $(".covers__item");
        let designChoose = $(".design__chooser");
        let schoolChange = $(".school__choose");
        let classicMImg = $(".classicM");
        let classicSImg = $(".classicS");
        let modernMImg = $(".modernM");
        let modernSImg = $(".modernS");
        let showMore = $(".covers__show__more");

        schoolChange.on("change", function(e){
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

        designChoose.on("change", function(e){
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

        
        showMore.on("click", function(e){
            e.preventDefault();
            if (schoolChange.val() == "junior") {

                if (designChoose.val() == "classic"){
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
    $(function(){
        $(".man__proc__R--side .preview_content").cndkbeforeafter({
            autoSliding:true,
            showText:false,
            hoverEffect:false,
            autoSlidingStopOnHover:true,
        });            
    });

});