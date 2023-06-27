//  $(function () {
// $("#amin").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 1000);
//    });
//   $(window).scroll(function () {
//     let scrollPoint = $("html, body").scrollTop();
//     if (scrollPoint > 650) {
//       $("#amin").addClass("bg_on_scroll");     } else {
//      $("#amin").removeClass("bg_on_scroll");
//   }
//      if (scrollPoint > 100) {
//        $("#amin").show(500);
//     } else {
//       $("#amin").hide(500);
//      }
//    });

//    });




   let mybutton = document.getElementById("amin");
    
   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};
   function scrollFunction() {
     if (document.body.scrollTop > 400 || document.documentElement.scrollTop >400) {
       mybutton.style.display = "flex";
     } else {
       mybutton.style.display = "none";
     }
   }
   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }



   
   $(".sidebar_btn").click(function () {
    $(".sidebar").toggleClass("ml_300");
 })
;


const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    
});






// new VenoBox({
//   selector: ".my-image-links",
//   numeration: true,
//   infinigall: true,
//   share: true,
//   spinner: "rotating-plane",
// });

// (() => {
//   // Specify the deadline date
//   const deadlineDate = new Date("May 06, 2023 23:59:59").getTime();

//   // Cache all countdown boxes into consts
//   const countdownDays = document.querySelector(".countdown__days .number");
//   const countdownHours = document.querySelector(".countdown__hours .number");
//   const countdownMinutes = document.querySelector(
//     ".countdown__minutes .number"
//   );
//   const countdownSeconds = document.querySelector(
//     ".countdown__seconds .number"
//   );

//   // Update the count down every 1 second (1000 milliseconds)
//   setInterval(() => {
//     // Get current date and time
//     const currentDate = new Date().getTime();

//     // Calculate the distance between current date and time and the deadline date and time
//     const distance = deadlineDate - currentDate;

//     // Calculations the data for remaining days, hours, minutes and seconds
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Insert the result data into individual countdown boxes
//     countdownDays.innerHTML = days;
//     countdownHours.innerHTML = hours;
//     countdownMinutes.innerHTML = minutes;
//     countdownSeconds.innerHTML = seconds;
//   }, 1000);
// })();

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   slidesPerView: 2,
//   spaceBetween: 24,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

 new WOW().init();

// AOS.init();
