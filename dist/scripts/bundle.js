"use strict";

var mobileMenuIconOpen = document.querySelector(".menu-mobile-icon-open");
var mobileMenuIconClose = document.querySelector(".menu-mobile-icon-close");
var body = document.querySelector("body");
var siteNavigation = document.querySelector(".site-navigation-main");
mobileMenuIconOpen.addEventListener("click", openNav);
mobileMenuIconClose.addEventListener("click", closeNav);

function openNav() {
  body.classList.add('is-menu-open');
}

function closeNav() {
  body.classList.remove("is-menu-open");
}