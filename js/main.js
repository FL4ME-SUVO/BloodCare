// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner(0);


//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 45) {
//             $('.navbar').addClass('sticky-top shadow-sm');
//         } else {
//             $('.navbar').removeClass('sticky-top shadow-sm');
//         }
//     });


//     // Hero Header carousel
//     $(".header-carousel").owlCarousel({
//         animateOut: 'slideOutDown',
//         items: 1,
//         autoplay: true,
//         smartSpeed: 1000,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//     });


//     // International carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         items: 1,
//         smartSpeed: 1500,
//         dots: true,
//         dotsData: true,
//         loop: true,
//         margin: 25,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ]
//     });


//     // Modal Video
//     $(document).ready(function () {
//         var $videoSrc;
//         $('.btn-play').click(function () {
//             $videoSrc = $(this).data("src");
//         });
//         console.log($videoSrc);

//         $('#videoModal').on('shown.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
//         })

//         $('#videoModal').on('hide.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc);
//         })
//     });


//     // testimonial carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         center: true,
//         dots: true,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//     });



//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//         return false;
//     });


//     function myMove() {
//         let id = null;
//         const elem = document.getElementById("animate");
//         let pos = 0;
//         clearInterval(id);
//         id = setInterval(frame, 5);
//         function frame() {
//             if (pos == 350) {
//                 clearInterval(id);
//             } else {
//                 pos++;
//                 elem.style.top = pos + "px";
//                 elem.style.left = pos + "px";
//             }
//         }
//     }

// })(jQuery);


(function () {
    "use strict";

    // Spinner
    function spinner() {
        setTimeout(function () {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    }
    spinner();


    // Initiate the WOW.js
    new WOW().init();  // You would still need to include the WOW.js library.


    // Sticky Navbar
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    });


    

    // Hero Header carousel (using Owl Carousel)
    document.addEventListener("DOMContentLoaded", function () {
        const headerCarousel = document.querySelector(".header-carousel");
        if (headerCarousel) {
            $(headerCarousel).owlCarousel({
                animateOut: 'slideOutDown',
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
            });
        }

        // Testimonial carousel
        const testimonialCarousel = document.querySelector(".testimonial-carousel");
        if (testimonialCarousel) {
            $(testimonialCarousel).owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
            });
        }

        // Modal Video
        let videoSrc;
        const playButtons = document.querySelectorAll('.btn-play');
        playButtons.forEach(button => {
            button.addEventListener('click', function () {
                videoSrc = this.getAttribute("data-src");
            });
        });

        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.addEventListener('shown.bs.modal', function () {
                const videoElement = document.getElementById('video');
                videoElement.setAttribute('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            });

            videoModal.addEventListener('hide.bs.modal', function () {
                const videoElement = document.getElementById('video');
                videoElement.setAttribute('src', videoSrc);
            });
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
                backToTopButton.classList.add('fade-in');
                backToTopButton.classList.remove('fade-out');
            } else {
                backToTopButton.classList.add('fade-out');
                backToTopButton.classList.remove('fade-in');
            }
        });

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animation Example (myMove function)
    function myMove() {
        const elem = document.getElementById("animate");
        if (!elem) return;
        let pos = 0;
        const id = setInterval(frame, 5);
        function frame() {
            if (pos === 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

})();
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector('.outside').classList.toggle('in');
    document.querySelector('.bar').classList.toggle('active');
    this.classList.toggle('is-showing');
});
