// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== Scroll-triggered reveal for profile cards =====
function revealOnScroll() {
  const cards = document.querySelectorAll('.slide-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(36px)';
    card.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(card);
  });
}

// ===== Sparkle cursor effect on hero =====
function initSparkles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.85) {
      const sparkle = document.createElement('span');
      sparkle.textContent = ['✦', '✧', '🌸', '⚡', '✨'][Math.floor(Math.random() * 5)];
      sparkle.style.cssText = `
        position:fixed;
        left:${e.clientX - 8}px;
        top:${e.clientY - 8}px;
        font-size:.9rem;
        pointer-events:none;
        z-index:9999;
        animation:sparkFade .7s ease forwards;
      `;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 700);
    }
  });
}

// ===== Add sparkle keyframe dynamically =====
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes sparkFade {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to   { opacity: 0; transform: translateY(-28px) scale(.4); }
  }
`;
document.head.appendChild(styleSheet);

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  initSparkles();
});
