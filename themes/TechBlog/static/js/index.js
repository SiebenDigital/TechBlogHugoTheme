// MOBILE NAV

const nav = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  console.log("Nav Toggled");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.setAttribute("aria-menuOpenend", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.setAttribute("aria-menuOpenend", false);
  }
});

// FAQ
const faqs = document.querySelectorAll(".faq-element");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
