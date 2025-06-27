document.addEventListener("DOMContentLoaded", () => {
  const sectionIds = [
    "heroSection",
    "about",
    "skills",
    "projects",
    "testimonials",
    "contact"
  ];

  const sections = sectionIds.map(id => {
    const el = document.getElementById(id);
    if (!el) console.warn(`⚠️ Section ID '${id}' not found in DOM.`);
    return el;
  }).filter(Boolean);

  let currentIndex = 0;

  function loadImagesInSection(section) {
    return new Promise((resolve) => {
      const images = Array.from(section.querySelectorAll("img[data-src]"));
      if (images.length === 0) {
        console.log(`✅ No images to load in section '${section.id}'.`);
        resolve();
        return;
      }

      let loaded = 0;
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");

        img.onload = img.onerror = () => {
          loaded++;
          if (loaded === images.length) {
            console.log(`✅ All images loaded in section '${section.id}'.`);
            resolve();
          }
        };
      });
    });
  }

  async function loadSectionsSequentially() {
    while (currentIndex < sections.length) {
      const section = sections[currentIndex];
      console.log(`⏳ Loading section '${section.id}'...`);
      await loadImagesInSection(section);
      section.classList.add("visible");
      section.dataset.loaded = "true";
      console.log(`✅ Section '${section.id}' is now visible.`);
      currentIndex++;
    }
  }

  loadSectionsSequentially();
});







