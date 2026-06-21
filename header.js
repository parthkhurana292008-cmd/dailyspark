/**
 * Daily Spark — Shared Header
 * =========================================================
 * Include this one file in every HTML page:
 *   <script src="header.js"></script>
 *
 * To update the header sitewide, edit ONLY this file.
 * =========================================================
 */

(function () {

  /* ─────────────────────────────────────────
     1. TICKER TEXT  ← edit here to update ticker on ALL pages
  ───────────────────────────────────────── */
  const TICKER_TEXT =
    'Jossa Round 2 result on Tuesday, 30 June, 2026 17:00 &nbsp;|&nbsp; ' +
    'Jac Delhi Round 2 result on Wednesday 1st July 2026 (After 05:00 PM) &nbsp;|&nbsp;';

  /* ─────────────────────────────────────────
     2. NOTIFICATION BAR  ← edit text / link here
  ───────────────────────────────────────── */
  const NOTIF_LINK = 'ns.html';
  const NOTIF_TEXT = '🔔 <strong>Trending News at Your Fingertips</strong> — Stay updated with daily alerts';

  /* ─────────────────────────────────────────
     3. NAV LINKS  ← add / remove / rename links here
  ───────────────────────────────────────── */
  const NAV_LINKS = [
    { href: 'index.html',   label: 'Home' },
    { href: 'parent.html',  label: 'Parenting' },
    { href: 'math.html',    label: 'Math Playground' },
    { href: 'gjobs.html',   label: 'Govt. Jobs' },
    { href: 'ait.html',     label: 'Best AI Tools' },
    { href: 'weather.html', label: 'Weather' },
    { href: 'contact.html', label: 'Contact Us' },
  ];

  /* ─────────────────────────────────────────
     4. CSS  ← all header styles in one place
  ───────────────────────────────────────── */
  const CSS = `
/* ── TOKENS (shared with page) ── */
:root {
  --navy:         #0D1B2A;
  --navy-mid:     #16283C;
  --saffron:      #FF6B00;
  --saffron-light:#FF8C33;
  --white:        #FFFFFF;
  --offwhite:     #F7F9FC;
  --slate:        #8899AA;
  --text:         #1A2B3C;
  --text-light:   #4A5C6E;
  --border:       #DDE4ED;
  --card-bg:      #FFFFFF;
  --radius:       6px;
  --font-sans:    'Inter', sans-serif;
  --font-serif:   'Playfair Display', Georgia, serif;
  --font-hindi:   'Noto Sans Devanagari', sans-serif;
}

a { text-decoration: none; color: inherit; }

/* ── NOTIFICATION BAR ── */
.ds-notif-bar {
  background: var(--saffron);
  color: var(--white);
  padding: 9px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 200;
}
.ds-notif-bar a { color: var(--white); }
.ds-notif-bar span { display: flex; align-items: center; gap: 8px; }
.ds-notif-close {
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 0 4px;
}
.ds-notif-close:hover { opacity: 1; }

/* ── TOP BAR ── */
.ds-topbar {
  background: var(--navy);
  color: var(--white);
  padding: 10px 20px;
  font-size: 12.5px;
  position: relative;
  z-index: 200;
}
.ds-topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.ds-topbar-date {
  color: var(--slate);
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.ds-ticker-wrap {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  background: rgba(255,255,255,0.06);
  padding: 5px 0;
  border-radius: 4px;
  border-left: 3px solid var(--saffron);
}
.ds-ticker {
  color: #CBD6E2;
  display: inline-block;
  padding-left: 100%;
  animation: ds-ticker-scroll 28s linear infinite;
  white-space: nowrap;
}
.ds-ticker:hover { animation-play-state: paused; }
@keyframes ds-ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* ── MASTHEAD / NAVBAR ── */
.ds-masthead {
  background: var(--white);
  border-bottom: 3px solid var(--saffron);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  position: sticky;
  top: 0;
  z-index: 200;
}
.ds-masthead-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.ds-logo-block { padding: 14px 0; flex-shrink: 0; text-decoration: none; }
.ds-logo-name {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: -0.5px;
  line-height: 1;
}
.ds-logo-name span { color: var(--saffron); }
.ds-logo-tag {
  font-size: 10px;
  color: var(--slate);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 2px;
}
.ds-nav-links { display: flex; gap: 2px; align-items: center; }
.ds-nav-links a {
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.01em;
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}
.ds-nav-links a:hover { background: var(--offwhite); color: var(--saffron); }
.ds-nav-links a.active { color: var(--saffron); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) { .ds-nav-links { display: none; } }
@media (max-width: 600px) { .ds-topbar-links { display: none; } }
@media (prefers-reduced-motion: reduce) {
  .ds-ticker { animation: none !important; }
}
`;

  /* ─────────────────────────────────────────
     5. INJECT function
  ───────────────────────────────────────── */
  function injectHeader() {
    // Inject CSS
    const style = document.createElement('style');
    style.id = 'ds-header-styles';
    style.textContent = CSS;
    document.head.appendChild(style);

    // Inject Google Fonts if not already present
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.crossOrigin = '';
      document.head.appendChild(preconnect2);

      const fonts = document.createElement('link');
      fonts.rel = 'stylesheet';
      fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&family=Noto+Sans+Devanagari:wght@400;600&display=swap';
      document.head.appendChild(fonts);
    }

    // Auto-detect active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navHTML = NAV_LINKS.map(link => {
      const isActive = currentPage === link.href ? ' class="active"' : '';
      return `<a href="${link.href}"${isActive}>${link.label}</a>`;
    }).join('\n      ');

    const headerHTML = `
<!-- ===== DAILY SPARK SHARED HEADER ===== -->
<div class="ds-notif-bar" id="ds-notif">
  <a href="${NOTIF_LINK}" target="_blank" rel="noopener">
    <span>${NOTIF_TEXT}</span>
  </a>
  <button class="ds-notif-close" onclick="document.getElementById('ds-notif').remove()" aria-label="Close">✕</button>
</div>
<div class="ds-topbar">
  <div class="ds-topbar-inner">
    <div class="ds-topbar-date" id="ds-topbar-date">Breaking News:</div>
    <div class="ds-ticker-wrap" aria-live="polite">
      <span class="ds-ticker">${TICKER_TEXT}</span>
    </div>
  </div>
</div>
<div class="ds-masthead">
  <div class="ds-masthead-inner">
    <a href="index.html" class="ds-logo-block">
      <div class="ds-logo-name">Daily <span>Spark</span></div>
      <div class="ds-logo-tag">Where Knowledge Sparks Success</div>
    </a>
    <nav class="ds-nav-links" aria-label="Main navigation">
      ${navHTML}
    </nav>
  </div>
</div>
<!-- ===== END SHARED HEADER ===== -->
`;

    // Insert at very top of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Live date
    var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d = new Date();
    var el = document.getElementById('ds-topbar-date');
    if (el) el.textContent = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  /* ─────────────────────────────────────────
     6. WAIT FOR DOM, THEN INJECT
     Works whether script is in <head> or <body>
  ───────────────────────────────────────── */
  if (document.body) {
    injectHeader();
  } else {
    document.addEventListener('DOMContentLoaded', injectHeader);
  }

})();
