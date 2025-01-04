$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Video Editior"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});








function graph(){
    document.getElementsByClassName("graphicsDiv")[0].style.display="block";
    document.getElementsByClassName("uxDiv")[0].style.display="none";
    document.getElementsByClassName("webDiv")[0].style.display="none";
    document.getElementsByClassName("graph")[0].style.background="var(--orange)";
    document.getElementsByClassName("graph")[0].style.color="white";
    document.getElementsByClassName("web")[0].style.color="black";
    document.getElementsByClassName("web")[0].style.background="transparent";
    document.getElementsByClassName("ui")[0].style.background="transparent"
    document.getElementsByClassName("ui")[0].style.color="black"
  }
  
  
  function ui(){
    document.getElementsByClassName("graphicsDiv")[0].style.display="none";
    document.getElementsByClassName("uxDiv")[0].style.display="flex";
    document.getElementsByClassName("webDiv")[0].style.display="none";
    document.getElementsByClassName("graph")[0].style.background="transparent";
    document.getElementsByClassName("graph")[0].style.color="black";
    document.getElementsByClassName("web")[0].style.color="black";
    document.getElementsByClassName("web")[0].style.background="transparent";
    document.getElementsByClassName("ui")[0].style.background="var(--orange)"
    document.getElementsByClassName("ui")[0].style.color="white"
  
  }
//   function web(){
//     document.getElementsByClassName("graphicsDiv")[0].style.display="none";
//     document.getElementsByClassName("uxDiv")[0].style.display="none";
//     document.getElementsByClassName("webDiv")[0].style.display="flex";
//     document.getElementsByClassName("graph")[0].style.background="transparent";
//     document.getElementsByClassName("graph")[0].style.color="black";
//     document.getElementsByClassName("web")[0].style.color="white";
//     document.getElementsByClassName("web")[0].style.background="var(--red)";
//     document.getElementsByClassName("ui")[0].style.background="transparent"
//     document.getElementsByClassName("ui")[0].style.color="black"
  
//   }