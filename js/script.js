// script.js

// Toggle Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Toggle Dark Mode
const toggleDark = document.getElementById('toggle-dark');
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateLogo();
});

// Update Logo Based on Theme
function updateLogo() {
  const logoImg = document.getElementById('logo-img');
  if (document.body.classList.contains('dark')) {
    logoImg.src = 'assets/logo-dark.gif';
  } else {
    logoImg.src = 'assets/logo-light.gif';
  }
}

// Run on Load
document.addEventListener('DOMContentLoaded', () => {
  updateLogo();
});
