const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const navbar = document.querySelector(".links");
const gotoTop = document.getElementById("up-icon");
const cvButn = document.getElementById("cv-but");
const themeBtn = document.getElementById("theme-btn");

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
cvButn.addEventListener("click", () => {
  window.location.href =
    "https://drive.google.com/file/d/1qqgKuU6F4EZ4xWQis0kd-672Y2KBcy43/view?usp=sharing";
});
