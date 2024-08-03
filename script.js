const burgerBtn = document.querySelector(".burger_menu_icon");
const burgerBtnLine = document.querySelectorAll(".line");
const overlay = document.querySelector(".overlay");
const navElements = document.querySelector(".navigation");
const logoDiv = document.querySelectorAll(".logo a");
const firstLine = document.querySelector(".line1");
const secondLine = document.querySelector(".line2");
const thirdLine = document.querySelector(".line3");

burgerBtn.addEventListener("click", function () {
  overlay.classList.toggle("active");
  navElements.classList.toggle("active");
  burgerBtn.classList.toggle("active");

  burgerBtnLine.forEach(function (item) {
    item.classList.toggle("active");
  });

  logoDiv.forEach(function (item) {
    item.classList.toggle("active");
  });
});
