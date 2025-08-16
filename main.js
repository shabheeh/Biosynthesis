const navLinks = document.querySelectorAll(".nav-links .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

function toggleMobileNav() {
  burgerMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "auto";
}

burgerMenu.addEventListener("click", toggleMobileNav);

overlay.addEventListener("click", toggleMobileNav);
