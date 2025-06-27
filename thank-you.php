<?php
session_start();

$formStatus = $_SESSION['form_status'] ?? null;
unset($_SESSION['form_status']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Thank You - Amarire Dev</title>
<style>
  /* Reset styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f7fa; /* Soft off-white background */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222222; /* Comfortable black text */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    overflow-x: hidden;
  }

  .container {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    max-width: 520px;
    width: 100%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    text-align: center;
    position: relative;
    animation: fadeSlideUp 0.7s ease forwards;
  }

  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #0047ab; /* Main blue color */
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    font-size: 2.5rem;
    user-select: none;
  }

  p.message {
    font-size: 1.15rem;
    line-height: 1.5;
    color: #333333;
    margin-bottom: 2rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  ul.errors {
    list-style: none;
    margin-bottom: 2rem;
    padding-left: 0;
    color: #d93025; /* Soft red */
    font-weight: 600;
    text-align: left;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
    animation: shake 0.3s ease;
  }

  ul.errors li {
    margin-bottom: 0.7rem;
    position: relative;
    padding-left: 24px;
  }

  ul.errors li::before {
    content: "⚠️";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    20%, 60% {
      transform: translateX(-5px);
    }
    40%, 80% {
      transform: translateX(5px);
    }
  }

  .contact-options {
    margin-top: 1.5rem;
  }

  .contact-options p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #0047ab;
  }

  .contact-options a {
    display: inline-block;
    background-color: #0047ab;
    color: #ffffff;
    font-weight: 600;
    padding: 0.55rem 1.3rem;
    border-radius: 28px;
    text-decoration: none;
    margin: 0 8px;
    box-shadow: 0 3px 10px rgba(0, 71, 171, 0.4);
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  }

  .contact-options a:hover,
  .contact-options a:focus {
    background-color: #003a8c;
    box-shadow: 0 6px 20px rgba(0, 58, 140, 0.6);
    transform: translateY(-3px);
    outline: none;
  }

  .contact-options a .emoji {
    font-size: 1.2rem;
    margin-right: 6px;
  }

  /* Responsive styles */
  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }
    .container {
      padding: 2rem 1.5rem;
    }
  }
</style>
</head>
<body>

<div class="container">

<?php if ($formStatus): ?>
  <?php if ($formStatus['success']): ?>
    <h1><span class="icon">✅</span> Thank You!</h1>
    <p class="message"><?= htmlspecialchars($formStatus['message']) ?></p>
  <?php else: ?>
    <h1 style="color:#d93025;"><span class="icon">❌</span> Oops! Something went wrong.</h1>
    <ul class="errors">
      <?php foreach ($formStatus['errors'] as $error): ?>
        <li><?= htmlspecialchars($error) ?></li>
      <?php endforeach; ?>
    </ul>
    <div class="contact-options">
      <p>If you'd like, you can reach out to us directly via:</p>
      <a href="mailto:contact@amarire.dev" title="Email us" tabindex="0">
        <span class="emoji">✉️</span> Email
      </a>
      <a href="https://wa.me/212772420252" target="_blank" rel="noopener noreferrer" title="WhatsApp us" tabindex="0">
        <span class="emoji">📱</span> WhatsApp
      </a>
    </div>
  <?php endif; ?>
<?php else: ?>
  <h1>Welcome to Amarire Dev</h1>
  <p style="margin-top: 1rem; font-size: 1.1rem; color: #555555;">
    No submission data was found. Please go back to the <a href="/index.php" style="color:#0047ab; text-decoration: underline;">contact form</a>.
  </p>
<?php endif; ?>

</div>

</body>
</html>
