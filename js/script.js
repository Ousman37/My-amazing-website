// Global variables
const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMoble = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navlinks = document.querySelectorAll(".nav-mobile .list-link");

console.log(navlinks);

//Toggle navigation
const toggleMenu = () => {
  navMoble.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// add / remove header border bottom on scroll
const headerScrollEvent = () => {
  if (this.scrollY >= 30) {
    headerElement.classList.add("active-scroll");
  } else {
    headerElement.classList.remove("active-scroll");
  }
};

window.addEventListener("scroll", headerScrollEvent);

// Add selected link styles to the link clicked and close navigation when clicking the links

navlinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMoble.classList.remove("active");
    headerElement.classList.remove("active");

    let current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    link.className = +" current";
  })
);
// Scroll Reveal
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
});

sr.reveal(".image-left", { origin: "left" });
sr.reveal(".popular-destinations-data");
sr.reveal(".plan-trip-data");

sr.reveal(".image-center", {
  origin: "bottom",
});

sr.reveal(".image-right, .showcase-data", {
  origin: "right",
});

sr.reveal(".beach-data-wrapper", {
  origin: "bottom",
  interval: 250,
});

sr.reveal(".newsletter-container", {
  origin: "top",
});

sr.reveal(".footer-container-inner > div, .footer-separator , .copyright", {
  origin: "bottom",
  interval: 250,
});
