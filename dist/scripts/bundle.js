"use strict";

var mobileMenuIconOpen = document.querySelector(".menu-mobile-icon-open");
var mobileMenuIconClose = document.querySelector(".menu-mobile-icon-close");
var siteNavigation = document.querySelector(".site-navigation-main");
mobileMenuIconOpen.addEventListener("click", openNav);
mobileMenuIconClose.addEventListener("click", closeNav);

function openNav() {
  siteNavigation.style.width = "100%";
  mobileMenuIconClose.style.display = "block";
}

function closeNav() {
  siteNavigation.style.width = "0%";
  mobileMenuIconClose.style.display = "none";
}