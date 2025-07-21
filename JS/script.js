// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// SMOOTH SCROLLING for links and buttons
document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const targetSelector =
      el.tagName.toLowerCase() === "a"
        ? el.getAttribute("href")
        : el.getAttribute("data-target");

    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 🚫 DISABLE RIGHT CLICK
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Right–click is disabled on this page.");
});
