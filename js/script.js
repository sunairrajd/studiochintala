
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
console.log(viewportWidth)


// $(document).ready(function(){
//   $(window).bind('scroll', function() {
//   var navHeight = $('viewportHeight').height() - 70;
//
//   console.log(navHeight);
//     if ($(window).scrollTop() > navHeight) {
//       $('nav').addClass('sticky-top');
//       $('nav').removeClass('sticky-top');
//     }
//     else {
//       $('nav').removeClass('sticky-top');
//         $('nav').addClass('sticky-top');
//
//     }
//  });
// });


$(".sub-nav").on("click", function() {
  $("html").animate({ scrollTop: 0 }, "slow");
});


$(document).ready(function(){

  $(".navbar-toggler").click(function(){

if ($(".navbar-toggler").attr("aria-expanded") == 'true') {
    $(".navbar-brand").toggleClass("text-black");
    $(".nav_overlay").toggleClass("d-block");

          $(".btn-line").toggleClass("open");


      }

      else if ($(".navbar-toggler").attr("aria-expanded") == 'false') {
      $(".nav_overlay").toggleClass("d-block");

  $(".navbar-brand").toggleClass("text-black");
    $(".btn-line").toggleClass("open");


      }




      else {
        // $(".navbar-brand").toggleClass("text-black text-white");


        console.log("nth");
      }
    });


  



  });
