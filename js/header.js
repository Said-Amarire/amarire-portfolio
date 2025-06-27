document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger3');
  const darkToggle = document.getElementById('darkModeToggle');
  const logoImg = document.getElementById('logoImg');

  const logoDay = "https://amarire.dev/assets/amarire-light.webp";
  const logoNight = "https://amarire.dev/assets/amarire-dark.webp";

  // Function to set dark mode, updating logo and button
  function setDarkMode(isDark) {
    if (!darkToggle || !logoImg) return;

    if (isDark) {
      document.body.classList.add('dark-mode');
      darkToggle.setAttribute('aria-label', 'Switch to light mode');
      logoImg.src = logoNight;
      darkToggle.classList.add('dark'); // Use a class to control icons
    } else {
      document.body.classList.remove('dark-mode');
      darkToggle.setAttribute('aria-label', 'Switch to dark mode');
      logoImg.src = logoDay;
      darkToggle.classList.remove('dark');
    }
  }

  // Restore dark mode state from localStorage on page load
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(savedDarkMode);

  // Toggle dark mode on click
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      setDarkMode(!isDark);
      localStorage.setItem('darkMode', !isDark);
    });

    darkToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        darkToggle.click();
      }
    });
  }

  // Fade-in effect for navigation items on page load
  const navItems = document.querySelectorAll("#nav3 .nav-item");
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 400);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger3");
  if (!hamburger) return;

  let sideMenu = document.querySelector(".side-menu");

  // Create the side menu without a close button
  if (!sideMenu) {
    sideMenu = document.createElement("div");
    sideMenu.className = "side-menu";
    document.body.appendChild(sideMenu);
  }

  // Elements to move
  const nav = document.getElementById("nav3");
  const darkmode = document.getElementById("darkmode-container");
  const lang = document.getElementById("language-container");

  // Save original parents
  const navOriginalParent = nav?.parentNode || null;
  const darkmodeOriginalParent = darkmode?.parentNode || null;
  const langOriginalParent = lang?.parentNode || null;

  // Function to move elements based on screen size
  function handleResponsiveMenu() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (lang && !sideMenu.contains(lang)) sideMenu.appendChild(lang);
      if (darkmode && !sideMenu.contains(darkmode)) sideMenu.appendChild(darkmode);
      if (nav && !sideMenu.contains(nav)) sideMenu.appendChild(nav);
    } else {
      // Return everything to its original place when returning to desktop view
      if (lang && langOriginalParent && !langOriginalParent.contains(lang)) {
        langOriginalParent.appendChild(lang);
      }
      if (darkmode && darkmodeOriginalParent && !darkmodeOriginalParent.contains(darkmode)) {
        darkmodeOriginalParent.appendChild(darkmode);
      }
      if (nav && navOriginalParent && !navOriginalParent.contains(nav)) {
        navOriginalParent.appendChild(nav);
      }

      // Close the menu automatically if it's open
      if (sideMenu.classList.contains("active")) {
        sideMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.classList.remove("active");
      }
    }
  }

  // On page load
  handleResponsiveMenu();

  // On screen resize
  window.addEventListener("resize", handleResponsiveMenu);

  // On hamburger click
  hamburger.addEventListener("click", () => {
    const isActive = sideMenu.classList.contains("active");
    sideMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!isActive));
  });

  // On click outside the menu
  document.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("active") &&
      !sideMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      sideMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});
