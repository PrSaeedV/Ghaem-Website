const menu_icon = document.getElementById("menu-icon");
const nav_list = document.getElementById("nav-list");

menu_icon.addEventListener("click", () => {
  nav_list.classList.toggle("show");
});
