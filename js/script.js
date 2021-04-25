// SHOW & HIDDEN HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      toggle.classList.toggle("toggle-action");
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK THE LINK
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

function linkAction() {
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("toggle-action");
}

navLink.forEach((e) => e.addEventListener("click", linkAction));
