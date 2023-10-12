/* Go Top Button Start */
var btn = $("#goTpButton");

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").scrollTop(0);
});
/* Go Top Button End */

/* Main Slider Start */
if ($(".mainSlider").length > 0) {
  $(".mainSlider").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
    //navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    lazyLoad: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoWith: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        scrollPerPage: true,
      },
      1000: {
        items: 1,
      },
    },
  });
}
/* Main Slider Start End */

/* Tabs Slider Start */
if ($(".tabsContentSlider1").length > 0) {
  $(".tabsContentSlider1").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    lazyLoad: true,
    autoplay: false,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoWith: true,
    smartSpeed: 1000,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        scrollPerPage: true,
      },
      1000: {
        items: 1,
      },
    },
  });
}
/* Tabs Slider Start End */

/* Light Gallery 1 Start */
if ($(".light-gallery-1").length > 0) {
  $(".light-gallery-1").lightGallery({
    thumbnail: true,
    download: false,
    share: false,
    selector: ".light-gallery-item",
  });
}
/* Light Gallery 1 End */

/* side bar */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//!!son
const linksContainer = document.getElementById("mySidenav");
const scrollList = document.querySelectorAll(".links-scroll");

scrollList.forEach(function (link) {
  link.addEventListener("click", function () {
    linksContainer.style.width = "0";
  });
});
/* owl1 */
$(".slider-1").owlCarousel({
  loop: true,
  margin: 10,
  lazyLoad: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1300: {
      items: 1,
    },
  },
});
$(".slider-2").owlCarousel({
  loop: true,
  margin: 10,
  lazyLoad: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1.2,
    },
    1000: {
      items: 1.3,
    },
    1300: {
      items: 2,
    },
  },
});
$(".slider-3").owlCarousel({
  loop: true,
  margin: 10,
  lazyLoad: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1.7,
    },
    1300: {
      items: 3,
      nav: false,
      autoplay: false,
    },
  },
});
$(".slider-4").owlCarousel({
  loop: true,
  margin: 10,
  lazyLoad: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2,
      nav: false,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 2.2,
    },
    1300: {
      items: 3.4,
    },
  },
});
/* button */
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 1000) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
