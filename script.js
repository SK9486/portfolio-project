const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menuBtn.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  menuBtn.classList.remove("hidden");
});
