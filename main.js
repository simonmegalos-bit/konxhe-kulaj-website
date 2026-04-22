/* ═══════════════════════════════════════════════
   Dr. Konxhe Kulaj — Main JavaScript
═══════════════════════════════════════════════ */

/* ─── THEME TOGGLE ──────────────────────────── */
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;

  // Detect system preference
  let currentTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);
  updateToggleIcon(toggle, currentTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      updateToggleIcon(toggle, currentTheme);
      toggle.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  function updateToggleIcon(btn, theme) {
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
})();

/* ─── STICKY HEADER SCROLL CLASS ───────────── */
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 16);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ─── MOBILE MENU ───────────────────────────── */
(function () {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    nav.hidden = isOpen;

    // Animate hamburger to X
    const spans = btn.querySelectorAll('span');
    if (!isOpen) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
      const spans = btn.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
})();

/* ─── SCROLL FADE-IN ANIMATIONS ─────────────── */
(function () {
  // Add fade-in class to animatable elements (main site)
  const autoTargets = document.querySelectorAll(
    '.research-card, .pub-item, .timeline-item, .reading-item, .contact-item, .sidebar-card, .pub-featured, .thesis-block, .pub-metrics, .hero-content > *'
  );
  autoTargets.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${Math.min(i * 0.04, 0.3)}s`;
  });

  // Also observe any element already marked .fade-in in HTML (e.g. personal page)
  const allFadeTargets = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  );

  allFadeTargets.forEach(el => observer.observe(el));

  // Fallback: if IntersectionObserver never fires (e.g. pre-render), reveal all after 800ms
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 800);
})();

/* ─── ACTIVE NAV HIGHLIGHTING ───────────────── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a, .mobile-nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ─── ACTIVE NAV STYLE ──────────────────────── */
const style = document.createElement('style');
style.textContent = `
  .site-nav a.active { color: var(--color-text); }
  .site-nav a.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: var(--color-primary);
    margin-top: 2px;
  }
`;
document.head.appendChild(style);
