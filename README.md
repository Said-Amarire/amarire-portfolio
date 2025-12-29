![1](https://github.com/user-attachments/assets/e94f3fd0-ca20-4035-8eac-3880b2137725)

## 🚀 Project Overview

This portfolio is built to serve as a professional online presence where potential clients and employers can explore my work, read testimonials from past collaborators, and get in touch with me easily.

The website is carefully crafted with a combination of modern web technologies, clean design principles, and accessibility in mind.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic and accessible markup for all content sections.
- **CSS3**: Responsive, mobile-first design using flexbox, grid, and custom animations.
- **JavaScript**: Interactive UI elements including testimonials slider, navigation toggles, and multi-language support.
- **PHP**: Modular templating (header, footer) and basic backend form handling integration.
- **Google reCAPTCHA**: To secure the contact form from spam and abuse.
- **Multilingual Support**: Dynamic translation using JSON language files supporting English, Arabic, French, and Tamazight (ⵜⴰⵛⵍⵃⵉⵜ).

---

## 🗂️ Project Structure

The project files are organized for clarity and scalability:
├── assets/ # Images, icons, and media assets
├── css/ # Stylesheets (main style.css and section-specific styles)
├── js/ # JavaScript files (header.js, visitor-logs.js, translations, etc.)
├── php/ # Backend PHP scripts including form handlers (minimal exposure for security)
├── includes/ # Reusable components: header.php, footer.php
├── translations/ # JSON files containing language translations per page and global strings
├── index.php # Main entry point, includes header, footer, and content sections
├── contact.php # Contact page with form and validation
├── README.md # This documentation file
├── robots.txt # SEO and crawler instructions to protect sensitive paths
├── sitemap.xml # XML sitemap for SEO indexing
└── ... # Other configuration and utility files


---

## 🌈 Design & Features Highlights

### Transparent Glassmorphic Header  
- The header background uses a modern glass-like semi-transparent effect that adapts to light and dark modes, allowing subtle visibility of the content behind it.
- This design choice creates a sleek and modern user experience.

### Responsive & Accessible Layout  
- Fully responsive design tailored for desktops, tablets, and mobiles.
- Accessibility attributes (`aria-label`, keyboard navigation support) included for inclusive usability.

### Dynamic Multilingual Support  
- Users can switch seamlessly between four languages.
- All visible text, placeholders, error messages, and button labels dynamically update based on language selection.
- Translations are stored in separate JSON files for easy maintenance and scalability.

### Interactive Project Showcase  
- A dedicated section displays featured projects with descriptive titles, technology stacks, live previews, and GitHub repository links.
- Project images use lazy loading (`data-src`) for performance optimization.

### Client Testimonials Slider  
- Rotating testimonials with navigation arrows.
- Each testimonial includes client feedback, platform logos (custom SVG icons), and author names.
- Smooth animations enhance user engagement.

### Contact Section with Form Validation  
- A contact form with fields for name, email, subject, and message.
- Client-side validation ensures all required inputs are correctly filled.
- Google reCAPTCHA v2 integration prevents spam submissions.
- Backend PHP form handler processes submissions securely (excluded from public repository for privacy).
- Error handling popups inform users clearly when issues arise.

### SEO & Performance Optimizations  
- `robots.txt` carefully configured to disallow crawling of sensitive directories and file types.
- Sitemap XML provided for search engines.
- Next-gen image formats (`.webp`) used for faster loading times.
- Efficient CSS and JS loading order to minimize blocking.

---

## 📂 Included Files & Why

- **HTML/PHP files**: Core content pages (`index.php`, `contact.php`), modularized for maintainability.
- **CSS files**: Custom styles for layout, animations, and responsiveness.
- **JavaScript**: Includes visitor logging, translation scripts, and UI controls.
- **Assets**: Optimized images and icons for projects and UI elements.
- **translations/**: Language JSON files enabling multi-language support.
- **robots.txt & sitemap.xml**: To guide search engine crawlers and protect sensitive areas.
- **README.md**: Detailed documentation of the project (this file).

---

## 🔐 What’s Excluded from the Public Repo

- Sensitive backend PHP files that handle database connections and form processing securely.
- Private API keys or credentials.
- Any user data or logs.
  
This approach ensures your privacy and security while showcasing the full frontend capabilities of the portfolio.

---

## 🖥️ Running the Project Locally

Since the project uses PHP templating and form handling, it requires a local server environment:

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Said-Amarire/amarire-portfolio.git

2. **Set up a local server:**
Use tools like XAMPP, MAMP, or WAMP.

3. **Place the project folder inside the server root (e.g., htdocs).**

4. **Open in browser:**
Navigate to http://localhost/amarire-portfolio/index.php

📬 Contact & Contributions
Feel free to reach out for collaboration or questions.

This repository is mainly for showcasing my portfolio and learning; contributions are welcome but please open issues or pull requests first.

🙏 Acknowledgments
Thanks to open source communities and libraries that inspired and supported this project.

Special mention to Google reCAPTCHA for form security.

Inspired by modern web design trends including glassmorphism and responsive UI best practices.

© 2025 Amarire Dev
Crafted with passion and precision.


