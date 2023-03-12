const menu = document.querySelector(".mobile-menu");
document.body.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("burger")) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  effect: "flip",
  flipEffect: {
    slideShadows: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").slice(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
