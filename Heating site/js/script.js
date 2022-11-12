window.onscroll = () => {
  let imageLeft = document.querySelector(".slideFromLeft");
  let imageRight = document.querySelector(".slideFromRight");
  let sectionForAnimation = document.querySelector(".after-hero .images");
  let scrollPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (scrollPosition < screenPosition) {
    imageLeft.classList.add("animated");
  } else {
    imageRight.classList.add("animated");
  }

  let container = document.querySelector(".hero-section .container");
  let sectionForAnimationRE = document.querySelector(
    ".hero-section .container"
  );
  let scrollPositionRE = sectionForAnimationRE.getBoundingClientRect().top;
  let screenPositionRE = window.innerHeight;

  if (scrollPositionRE < screenPositionRE) {
    container.classList.add("transi");
  } else {
    container.classList.add("transi");
  }
};

$(document).ready(function () {
  $(".openBtn").click(function () {
    $(".menu-section ").css({
      display: "block",
    });
  });

  $("#closeBtn").click(function () {
    $(".menu-section ").css({
      display: "none",
    });
  });
});

$(document).ready(function () {
  setTimeout(function () {
    $(".loaderWrapper").fadeOut();
  }, 800);
});
