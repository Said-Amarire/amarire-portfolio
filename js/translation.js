// DOM elements
const langSelector = document.getElementById('lang-selector');
const langDropdown = document.getElementById('lang-dropdown');

// Page direction for each language
const langDirections = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
  zgh: 'ltr'
};

// Load the general translation file
function loadTranslation(lang) {
  const path = `translations/${lang}.json`;

  return fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load translation: ${path}`);
      return res.json();
    })
    .catch(err => {
      console.error("Error fetching translation:", err);
      return {};
    });
}

// Apply translation to elements present on the page only
function applyTranslation(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[key];
    if (!translation) return;

    if ('placeholder' in el && el.placeholder !== undefined && el.tagName.toLowerCase() !== 'select') {
      el.placeholder = translation;
    } else if ((el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') && el.value !== undefined) {
      el.value = translation;
    } else {
      el.textContent = translation;
    }
  });



  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[key];
    if (translation) {
      el.placeholder = translation;
    }
  });
}

// Update language selection information
function updateLangSelector(lang, translations) {
  const selectedLang = langSelector.querySelector('.selected-lang');
  const btn = langDropdown.querySelector(`button[data-lang="${lang}"]`);
  if (!btn || !selectedLang) return;

  // Update flag image and text
  const img = btn.querySelector('img');
  selectedLang.querySelector('img').src = img ? img.src : '';
  selectedLang.querySelector('img').alt = translations[`lang.${lang}`] || lang;
  selectedLang.querySelector('span').textContent = lang.toUpperCase();

  // Update page direction and language
  document.documentElement.setAttribute('dir', langDirections[lang] || 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update dark mode button if present
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle && translations["darkModeLabel"]) {
    darkToggle.setAttribute('aria-label', translations["darkModeLabel"]);
    darkToggle.title = translations["darkModeLabel"];
  }
}

// Change language and apply translation
function changeLanguage(lang) {
  loadTranslation(lang)
    .then(translations => {
      applyTranslation(translations);
      updateLangSelector(lang, translations);
      localStorage.setItem('siteLanguage', lang);
    });
}

// Set language change button events
langDropdown.querySelectorAll('button[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.dataset.lang;
    changeLanguage(selectedLang);
    langSelector.setAttribute('aria-expanded', false);
    langSelector.classList.remove('open');
  });
});

// Open and close language list
langSelector.addEventListener('click', () => {
  const expanded = langSelector.getAttribute('aria-expanded') === 'true';
  langSelector.setAttribute('aria-expanded', !expanded);
  langSelector.classList.toggle('open');
});

// Keyboard support for language selection
langSelector.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    langSelector.click();
  } else if (e.key === 'Escape') {
    langSelector.setAttribute('aria-expanded', false);
    langSelector.classList.remove('open');
    langSelector.focus();
  }
});

// Close the list when clicking outside
document.addEventListener('click', e => {
  if (!langSelector.contains(e.target)) {
    langSelector.setAttribute('aria-expanded', false);
    langSelector.classList.remove('open');
  }
});

// Load saved or default language when the page starts
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  changeLanguage(savedLang);
});