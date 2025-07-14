const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Smooth scrolling for links and buttons
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
