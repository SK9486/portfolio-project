const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const navbar = document.querySelector(".links");
const gotoTop = document.getElementById("up-icon");
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menuBtn.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  menuBtn.classList.remove("hidden");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
gotoTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
