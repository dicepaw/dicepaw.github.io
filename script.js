document.getElementById("year").textContent = new Date().getFullYear();
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.textContent = open ? "✕" : "≡";
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  btn.textContent = "≡";
}));
