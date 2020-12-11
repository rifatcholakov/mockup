const mobileMenuIconOpen = document.querySelector(".menu-mobile-icon-open");
const mobileMenuIconClose = document.querySelector(".menu-mobile-icon-close");
const body = document.querySelector("body");
const siteNavigation = document.querySelector(".site-navigation-main");

mobileMenuIconOpen.addEventListener("click", openNav);
mobileMenuIconClose.addEventListener("click", closeNav);

function openNav() {
	body.classList.add('is-menu-open');
}

function closeNav() {
	body.classList.remove("is-menu-open");
}
