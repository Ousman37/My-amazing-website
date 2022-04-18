// Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};

const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});
