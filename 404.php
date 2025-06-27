<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <title>404 Not Found</title>

  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap" rel="stylesheet">

  <style>
    :root {
      --color-bg-start: #0d0d0d;
      --color-bg-mid: #1a1a1a;
      --color-white: #fff;
      --color-key-bg: #fff;
      --color-key-text: #111;
      --color-key-system-start: #007bff;
      --color-key-system-end: #004fa8;
      --color-spacebar-start: #007aff;
      --color-spacebar-end: #003e9f;
      --color-text-main: #f0f0f0;
      --color-text-tip: #bbb;
      --font-family: 'Fredoka', sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: var(--font-family);
      background: linear-gradient(-45deg, var(--color-bg-start), var(--color-bg-mid), var(--color-bg-start));
      background-size: 400% 400%;
      animation: backgroundShift 20s ease infinite;
      color: var(--color-white);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
      perspective: 1200px;
      overflow: hidden;
      padding: 20px;
    }

    @keyframes backgroundShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes keyboardEntrance {
      0% {
        transform: translateY(60px) rotateX(25deg) rotateZ(-15deg) scale(0.85);
        opacity: 0;
        filter: blur(6px);
      }
      50% {
        transform: translateY(10px) rotateX(10deg) rotateZ(-7deg) scale(1.05);
        opacity: 0.6;
        filter: blur(2px);
      }
      80% {
        transform: translateY(-5px) rotateX(0deg) rotateZ(2deg) scale(1.02);
        opacity: 0.9;
        filter: blur(0.5px);
      }
      100% {
        transform: translateY(0) rotateX(0) rotateZ(0) scale(1);
        opacity: 1;
        filter: blur(0);
      }
    }

    .keyboard-wrapper {
      background: rgba(255, 255, 255, 1);
      padding: 2.5rem 2rem;
      border-radius: 20px;
      backdrop-filter: blur(8px);

      background-image: radial-gradient(circle at center, 
          rgba(255, 255, 255, 0.0) 60%,
          rgba(255, 255, 255, 0.15) 80%,
          rgba(255, 255, 255, 0.25) 100%
        );

      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.15);

      transform-style: preserve-3d;
      opacity: 0;
      animation: keyboardEntrance 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      max-width: 720px;
      width: 90vw;
      margin: 0 auto;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      will-change: transform, opacity, filter, box-shadow;
    }

    .keyboard {
      background: white; /* white background */
      color: #111;       /* dark text color */
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 0.5rem;
      border-radius: 12px; /* rounded corners */
      padding: 1rem;       /* internal padding */
      box-shadow: 0 8px 24px rgba(0,0,0,0.15); /* subtle shadow for elegance */
    }

    .key {
      background: var(--color-key-bg);
      color: var(--color-key-text);
      border-radius: 6px;
      padding: 1rem 0;
      font-weight: 600;
      font-size: 1.1em;
      box-shadow:
        inset 0 -4px 6px rgba(0, 0, 0, 0.1),
        0 2px 4px rgba(0, 0, 0, 0.3);
      text-shadow: 0 1px 0 rgba(255,255,255,0.3);
      transform: translateZ(0);
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      cursor: pointer;
      user-select: none;
      text-align: center;
      -webkit-tap-highlight-color: transparent;
    }

    .key:hover {
      transform: translateY(1px) scale(1.02);
      box-shadow:
        inset 0 -3px 4px rgba(0, 0, 0, 0.2),
        0 0 8px rgba(255, 255, 255, 0.2);
    }

    /* Remove default :active effect */
    .key:active {
      /* none */
    }

    /* Realistic press effect via 'pressed' class */
    .key.pressed {
      transform: translateY(4px) scale(0.95);
      box-shadow:
        inset 0 4px 6px rgba(0, 0, 0, 0.8),
        0 1px 2px rgba(0, 0, 0, 0.2);
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .key.system {
      background: linear-gradient(to bottom, var(--color-key-system-start), var(--color-key-system-end));
      color: var(--color-white);
      text-shadow: none;
    }

    .key.blank {
      background: transparent;
      box-shadow: none;
      pointer-events: none;
      cursor: default;
    }

    .key.spacebar {
      grid-column: span 10;
      padding: 1rem 0;
      font-size: 1em;
      border-radius: 10px;
      background: linear-gradient(to bottom, var(--color-spacebar-start), var(--color-spacebar-end));
      color: var(--color-white);
      text-shadow: 0 1px 1px rgba(0,0,0,0.5);
      font-weight: 700;
      user-select: none;
    }

    .key.spacebar:active {
      transform: translateY(3px) scale(0.98);
      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.8);
    }

    .message {
      font-size: 1.5em;
      margin-top: 2.5rem;
      color: var(--color-text-main);
      animation: fadeInUp 1.5s ease forwards;
      opacity: 0;
      max-width: 90vw;
      user-select: none;
    }

    .tip {
      margin-top: 1.25rem;
      font-size: 0.9em;
      color: var(--color-text-tip);
      animation: fadeInUp 1.8s ease forwards;
      opacity: 0;
      max-width: 90vw;
      user-select: none;
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* === Advanced Responsive Design === */
    @media (max-width: 768px) {
      .keyboard-wrapper {
        padding: 2rem 1.5rem;
        max-width: 100vw;
      }

      .key {
        font-size: 1em;
        padding: 0.85rem 0;
      }
    }

    @media (max-width: 480px) {
      .keyboard {
        grid-template-columns: repeat(8, 1fr);
        gap: 0.4rem;
      }

      .key {
        font-size: 0.9em;
        padding: 0.7rem 0;
      }

      .key.spacebar {
        grid-column: span 8;
        font-size: 0.95em;
        padding: 0.7rem 0;
      }
    }

    @media (max-width: 360px) {
      .keyboard {
        grid-template-columns: repeat(6, 1fr);
        gap: 0.3rem;
      }

      .key {
        font-size: 0.8em;
        padding: 0.55rem 0;
      }

      .key.spacebar {
        grid-column: span 6;
        font-size: 0.85em;
        padding: 0.5rem 0;
      }

      .message {
        font-size: 1.2em;
      }

      .tip {
        font-size: 0.8em;
      }
    }
  </style>
</head>
<body>
  <div class="keyboard-wrapper" role="region" aria-label="Interactive keyboard with error code and navigation">
    <div class="keyboard" role="list">
      <div class="key system" role="listitem" tabindex="0">E</div>
      <div class="key system" role="listitem" tabindex="0">R</div>
      <div class="key system" role="listitem" tabindex="0">R</div>
      <div class="key system" role="listitem" tabindex="0">O</div>
      <div class="key system" role="listitem" tabindex="0">R</div>
      <div class="key blank"></div>
      <div class="key system" role="listitem" tabindex="0">4</div>
      <div class="key system" role="listitem" tabindex="0">0</div>
      <div class="key system" role="listitem" tabindex="0">4</div>
      <div class="key blank"></div>

      <div class="key" role="listitem" tabindex="0">Q</div>
      <div class="key" role="listitem" tabindex="0">W</div>
      <div class="key" role="listitem" tabindex="0">E</div>
      <div class="key" role="listitem" tabindex="0">R</div>
      <div class="key" role="listitem" tabindex="0">T</div>
      <div class="key" role="listitem" tabindex="0">Y</div>
      <div class="key" role="listitem" tabindex="0">U</div>
      <div class="key" role="listitem" tabindex="0">I</div>
      <div class="key" role="listitem" tabindex="0">O</div>
      <div class="key" role="listitem" tabindex="0">P</div>

      <div class="key" role="listitem" tabindex="0">A</div>
      <div class="key" role="listitem" tabindex="0">S</div>
      <div class="key" role="listitem" tabindex="0">D</div>
      <div class="key" role="listitem" tabindex="0">F</div>
      <div class="key" role="listitem" tabindex="0">G</div>
      <div class="key" role="listitem" tabindex="0">H</div>
      <div class="key" role="listitem" tabindex="0">J</div>
      <div class="key" role="listitem" tabindex="0">K</div>
      <div class="key" role="listitem" tabindex="0">L</div>
      <div class="key" role="listitem" tabindex="0">;</div>

      <div class="key" role="listitem" tabindex="0">Z</div>
      <div class="key" role="listitem" tabindex="0">X</div>
      <div class="key" role="listitem" tabindex="0">C</div>
      <div class="key" role="listitem" tabindex="0">V</div>
      <div class="key" role="listitem" tabindex="0">B</div>
      <div class="key" role="listitem" tabindex="0">N</div>
      <div class="key" role="listitem" tabindex="0">M</div>
      <div class="key" role="listitem" tabindex="0">,</div>
      <div class="key" role="listitem" tabindex="0">.</div>
      <div class="key" role="listitem" tabindex="0">/</div>

      <div class="key spacebar" role="button" tabindex="0" aria-label="Go back to homepage" onclick="window.location.href='/'" onkeydown="if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); }">
        Go back home →
      </div>
    </div>
  </div>

  <div class="message" role="alert">Oops! That page doesn't exist.</div>
  <div class="tip">Click the keys – they work with sound!</div>

  <script>
    const clickSound = new Audio('assets/sounds/keyboard-typing-one.mp3');
    let soundReady = false;

    function playClickSound() {
      if (!soundReady) {
        clickSound.load();
        soundReady = true;
      }
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {
        // sound may fail due to browser policies, no worries
      });
    }

    const keys = document.querySelectorAll('.key:not(.blank)');

    keys.forEach(key => {
      key.addEventListener('click', playClickSound);

      // realistic press effect via JS
      key.addEventListener('mousedown', () => {
        key.classList.add('pressed');
      });
      key.addEventListener('touchstart', () => {
        key.classList.add('pressed');
      }, {passive: true});

      function removePressed() {
        key.classList.remove('pressed');
      }

      key.addEventListener('mouseup', removePressed);
      key.addEventListener('mouseleave', removePressed);
      key.addEventListener('touchend', removePressed);
      key.addEventListener('touchcancel', removePressed);

      // keyboard interaction support (Enter, Space)
      key.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          key.click();
        }
      });
    });
  </script>
</body>
</html>
