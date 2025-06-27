//** class Hero **//



const c = document.getElementById('digitalCanvas'), x = c.getContext('2d');
let w, h, pts = [], active = false, id;
const N = 40, D = 100;

function init() {
  w = c.clientWidth; h = c.clientHeight;
  const s = Math.min(devicePixelRatio || 1, 1.5);
  c.width = w * s; c.height = h * s;
  x.setTransform(s, 0, 0, s, 0, 0);
  pts = Array.from({ length: N }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 2 + 1
  }));
}

function draw() {
  if (!active) return;
  x.clearRect(0, 0, w, h);
  for (let p of pts) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    x.beginPath();
    x.fillStyle = '#007bff99';
    x.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    x.fill();
  }
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let a = pts[i], b = pts[j];
      let dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
      if (d < D) {
        x.beginPath();
        x.strokeStyle = `rgba(0,123,255,${(D - d) / (D * 1.5)})`;
        x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke();
      }
    }
  }
  id = requestAnimationFrame(draw);
}

function toggle(on) {
  active = on;
  cancelAnimationFrame(id);
  if (on) draw();
}

new IntersectionObserver(([e]) => {
  toggle(e.isIntersecting);
}, { threshold: 0.1 }).observe(c);

window.addEventListener('resize', () => {
  init();
  if (active) draw();
});

init();












//** class About animation **//

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".section-title-gradient");
  const aboutSection = document.querySelector(".about-text");

  const animateElement = (el, animationName, delay = 0) => {
    el.style.animation = `${animationName} 1s ease-out ${delay}s forwards`;
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === title) {
          animateElement(title, "titlePopIn", 0.4);
          observer.unobserve(title);
        }
        if (entry.target === aboutSection) {
          aboutSection.querySelectorAll("p").forEach((p, i) => {
            animateElement(p, "fadeInUp", 0.6 + i * 0.2);
          });
          observer.unobserve(aboutSection);
        }
      }
    });
  }, { threshold: 0.3 });

  if (title) observer.observe(title);
  if (aboutSection) observer.observe(aboutSection);
});




//** class Tools **//

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#skills");
  if (!section) return;

  const title = section.querySelector(".section-title");
  const toolCards = section.querySelectorAll(".tool-card");
  let animationDone = false;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationDone) {
        animationDone = true;
        title.classList.add("title-visible");
        toolCards.forEach((card, i) => {
          setTimeout(() => card.classList.add("visible"), i * 150);
        });
        obs.unobserve(section);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});


//** class Projects **//

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".Projects-title");
  const cards = [...document.querySelectorAll(".project-card")];
  const windowHeight = window.innerHeight;

  const revealElements = () => {
    if (title && !title.classList.contains("title-visible")) {
      if (title.getBoundingClientRect().top <= windowHeight * 0.85) {
        title.classList.add("title-visible");
      }
    }

    cards.forEach(card => {
      if (!card.classList.contains("visible") && card.getBoundingClientRect().top <= windowHeight * 0.9) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealElements);
  revealElements(); // Run once on load
});



//** class Testimonial **//

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-nav.prev');
  const nextBtn = document.querySelector('.testimonial-nav.next');
  const section = document.getElementById('testimonials');
  let currentIndex = 0;
  let autoSlide;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 7000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlide);
    startAutoSlide();
  };

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  });

  showSlide(currentIndex);
  startAutoSlide();

  // ظهور تدريجي للقسم عند دخوله الشاشة
  const showSection = () => {
    section.classList.add('visible');
    window.removeEventListener('scroll', onScroll);
  };

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.85 && rect.bottom >= 0;
  };

  const onScroll = () => {
    if (isInViewport(section)) showSection();
  };

  if (isInViewport(section)) {
    showSection();
  } else {
    window.addEventListener('scroll', onScroll);
  }
});



//** class Contact **//

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const subjectInput = form.querySelector("#subject");
  const messageInput = form.querySelector("#message");
  const captcha = document.querySelector(".g-recaptcha");
  const submitBtn = form.querySelector('button[type="submit"]');

  const getTranslation = (key) => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    return el ? el.textContent : key;
  };

  const showError = (input, key) => {
    input.classList.add("input-error");
    const errorDiv = input.nextElementSibling;
    if (errorDiv) {
      errorDiv.textContent = getTranslation(key);
      errorDiv.style.display = "block";
    }
  };

  const clearError = (input) => {
    input.classList.remove("input-error");
    const errorDiv = input.nextElementSibling;
    if (errorDiv) {
      errorDiv.textContent = "";
      errorDiv.style.display = "none";
    }
  };

  if (captcha) captcha.style.display = "none";

  submitBtn.addEventListener("click", (e) => {
    let valid = true;

    const nameValue = nameInput.value.trim();
    if (!nameValue || !/^[a-zA-Z\u0600-\u06FF\s]+$/.test(nameValue)) {
      showError(nameInput, "contact.errors.name_required");
      valid = false;
    } else {
      clearError(nameInput);
    }

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailPattern.test(emailValue)) {
      showError(emailInput, "contact.errors.email_invalid");
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!subjectInput.value.trim()) {
      showError(subjectInput, "contact.errors.subject_required");
      valid = false;
    } else {
      clearError(subjectInput);
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, "contact.errors.message_required");
      valid = false;
    } else {
      clearError(messageInput);
    }

    e.preventDefault();

    if (!valid) return;

    if (captcha && captcha.style.display === "none") {
      captcha.style.display = "block";
      return;
    }

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert(getTranslation("contact.errors.complete_captcha") || "Please complete the CAPTCHA.");
      return;
    }

    form.submit();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contact");
  contactSection.querySelectorAll("*").forEach(el => {
    el.style.animationPlayState = "paused";
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.querySelectorAll("*").forEach(el => {
          el.style.animationPlayState = "running";
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(contactSection);
});
