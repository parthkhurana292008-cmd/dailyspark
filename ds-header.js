/*!
 * ds-header.js — Daily Spark Shared Header
 * ─────────────────────────────────────────
 * HOW TO USE on any page:
 *
 *   1. Place this file in your project root (same folder as index.html)
 *
 *   2. Add ONE line anywhere inside <body> where you want the header:
 *        <div id="ds-header-root"></div>
 *        <script src="ds-header.js"></script>
 *
 *   3. To highlight the active nav link, add data-page on <body>:
 *        <body data-page="parenting">
 *
 *      Valid data-page values:
 *        home | parenting | math | gjobs | weather | gold | contact
 *
 * ─────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── 1. CSS ─────────────────────────────────────────────────────── */
  var CSS = `
    /* Google Fonts — injected only if not already loaded */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&family=Noto+Sans+Devanagari:wght@400;600&display=swap');

    /* ── CSS tokens (safe to re-declare — same values as index.html) ── */
    :root {
      --ds-navy:         #0D1B2A;
      --ds-navy-mid:     #16283C;
      --ds-saffron:      #FF6B00;
      --ds-saffron-lt:   #FF8C33;
      --ds-white:        #FFFFFF;
      --ds-offwhite:     #F7F9FC;
      --ds-slate:        #8899AA;
      --ds-text:         #1A2B3C;
      --ds-border:       #DDE4ED;
      --ds-font-sans:    'Inter', sans-serif;
      --ds-font-serif:   'Playfair Display', Georgia, serif;
      --ds-font-hindi:   'Noto Sans Devanagari', sans-serif;
    }

    /* ── Notification bar ── */
    .ds-notif {
      background: var(--ds-saffron);
      color: var(--ds-white);
      padding: 9px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.01em;
      font-family: var(--ds-font-sans);
    }
    .ds-notif a { color: var(--ds-white); text-decoration: none; }
    .ds-notif span { display: flex; align-items: center; gap: 8px; }
    .ds-notif-close {
      background: none; border: none;
      color: var(--ds-white); cursor: pointer;
      font-size: 18px; line-height: 1;
      opacity: 0.8; transition: opacity 0.2s;
      padding: 0 4px;
    }
    .ds-notif-close:hover { opacity: 1; }

    /* ── Top bar ── */
    .ds-topbar {
      background: var(--ds-navy);
      color: var(--ds-white);
      padding: 10px 20px;
      font-size: 12.5px;
      font-family: var(--ds-font-sans);
    }
    .ds-topbar-inner {
      max-width: 1280px; margin: 0 auto;
      display: flex; justify-content: space-between;
      align-items: center; gap: 16px; flex-wrap: wrap;
    }
    .ds-topbar-date {
      color: var(--ds-slate); white-space: nowrap;
      font-weight: 500; letter-spacing: 0.02em;
    }
    .ds-ticker-wrap {
      flex: 1; overflow: hidden; white-space: nowrap;
      background: rgba(255,255,255,0.06);
      padding: 5px 0; border-radius: 4px;
      border-left: 3px solid var(--ds-saffron);
    }
    .ds-ticker {
      color: #CBD6E2; display: inline-block;
      padding-left: 100%;
      animation: ds-ticker-scroll 28s linear infinite;
      white-space: nowrap;
    }
    .ds-ticker:hover { animation-play-state: paused; }
    @keyframes ds-ticker-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    /* ── Masthead / Navbar ── */
    .ds-masthead {
      background: var(--ds-white);
      border-bottom: 3px solid var(--ds-saffron);
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      position: sticky; top: 0; z-index: 200;
      font-family: var(--ds-font-sans);
    }
    .ds-masthead-inner {
      max-width: 1280px; margin: 0 auto;
      padding: 0 20px;
      display: flex; align-items: center;
      justify-content: space-between; gap: 24px;
    }
    .ds-logo-block {
      padding: 10px 0; flex-shrink: 0; text-decoration: none;
      display: flex; align-items: center; gap: 10px;
    }
    .ds-logo-img {
      height: 44px; width: auto;
      display: block; object-fit: contain;
    }
    .ds-logo-text { display: flex; flex-direction: column; }
    .ds-logo-name {
      font-family: var(--ds-font-serif);
      font-size: 22px; font-weight: 700;
      color: var(--ds-navy); letter-spacing: -0.5px; line-height: 1;
    }
    .ds-logo-name span { color: var(--ds-saffron); }
    .ds-logo-tag {
      font-size: 10px; color: var(--ds-slate);
      letter-spacing: 0.12em; text-transform: uppercase; margin-top: 3px;
    }
    .ds-nav {
      display: flex; gap: 2px; align-items: center; list-style: none;
    }
    .ds-nav a {
      padding: 8px 14px; font-size: 13px; font-weight: 600;
      color: var(--ds-text); letter-spacing: 0.01em;
      border-radius: 4px;
      transition: background 0.15s, color 0.15s;
      white-space: nowrap; text-decoration: none; display: block;
    }
    .ds-nav a:hover  { background: var(--ds-offwhite); color: var(--ds-saffron); }
    .ds-nav a.ds-active { color: var(--ds-saffron); }


    /* ── Mobile hamburger ── */
    .ds-hamburger {
      display: none; background: none; border: none;
      cursor: pointer; padding: 6px;
      flex-direction: column; gap: 5px;
    }
    .ds-hamburger span {
      display: block; width: 22px; height: 2px;
      background: var(--ds-navy); border-radius: 2px;
      transition: transform 0.25s, opacity 0.25s;
    }
    .ds-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .ds-hamburger.open span:nth-child(2) { opacity: 0; }
    .ds-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── Mobile nav drawer ── */
    .ds-mobile-nav {
      display: none; flex-direction: column;
      background: var(--ds-white);
      border-top: 1px solid var(--ds-border);
      padding: 10px 0 16px;
      font-family: var(--ds-font-sans);
    }
    .ds-mobile-nav.open { display: flex; }
    .ds-mobile-nav a {
      padding: 11px 24px; font-size: 14px; font-weight: 600;
      color: var(--ds-text); text-decoration: none;
      border-bottom: 1px solid var(--ds-border);
      transition: background 0.15s, color 0.15s;
    }
    .ds-mobile-nav a:last-child { border-bottom: none; }
    .ds-mobile-nav a:hover  { background: var(--ds-offwhite); color: var(--ds-saffron); }
    .ds-mobile-nav a.ds-active { color: var(--ds-saffron); }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .ds-nav         { display: none; }
      .ds-nav-search  { display: none; }
      .ds-hamburger   { display: flex; }
    }
    @media (max-width: 600px) {
      .ds-topbar-date { display: none; }
    }
  `;

  /* ── 2. Inject CSS into <head> ─────────────────────────────────── */
  if (!document.getElementById('ds-header-styles')) {
    var style = document.createElement('style');
    style.id = 'ds-header-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  /* ── 3. Active page detection ────────────────────────────────────
     Reads data-page="parenting" from <body>, OR auto-detects
     from the current filename.
  ────────────────────────────────────────────────────────────────── */
  var PAGE_MAP = {
    'index.html'   : 'home',
    'parent.html'  : 'parenting',
    'math.html'    : 'math',
    'gjobs.html'   : 'gjobs',
    'weather.html' : 'weather',
    'gold.html'    : 'gold',
    'contact.html' : 'contact',
    ''             : 'home'       // root URL
  };

  var bodyPage   = document.body.getAttribute('data-page') || '';
  var autoPage   = PAGE_MAP[location.pathname.split('/').pop()] || '';
  var activePage = bodyPage || autoPage;

  function navLink(href, label, pageKey) {
    var isActive = (activePage === pageKey) ? ' ds-active' : '';
    return '<a href="' + href + '" class="' + isActive.trim() + '">' + label + '</a>';
  }

  /* ── 4. Ticker content — edit here to update across all pages ─── */
  var TICKER_TEXT =
    'Jossa Round 2 result on Tuesday, 30 June, 2026 17:00 &nbsp;|&nbsp; ' +
    'Jac Delhi Round 2 result on Wednesday 1st July 2026 (After 05:00 PM) &nbsp;|&nbsp; ' +
    'Stay updated with Daily Spark — India\'s trusted knowledge platform &nbsp;|&nbsp;';

  /* ── 5. Notification bar text — edit here ─────────────────────── */
  var NOTIF_TEXT =
    '🔔 <strong>Trending News at Your Fingertips</strong> — Stay updated with daily alerts';
  var NOTIF_LINK = 'ns.html';

  /* ── 6. Build HTML ──────────────────────────────────────────────── */
  var HTML = '' +
    /* Notification bar */
    '<div class="ds-notif" id="ds-notif-bar">' +
      '<a href="' + NOTIF_LINK + '" target="_blank" rel="noopener">' +
        '<span>' + NOTIF_TEXT + '</span>' +
      '</a>' +
      '<button class="ds-notif-close" id="ds-notif-close" aria-label="Close notification">✕</button>' +
    '</div>' +

    /* Top bar */
    '<div class="ds-topbar">' +
      '<div class="ds-topbar-inner">' +
        '<div class="ds-topbar-date" id="ds-topbar-date">Loading…</div>' +
        '<div class="ds-ticker-wrap" aria-live="polite">' +
          '<span class="ds-ticker">' + TICKER_TEXT + '</span>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* Masthead */
    '<header class="ds-masthead" role="banner">' +
      '<div class="ds-masthead-inner">' +

        /* Logo */
        '<a href="index.html" class="ds-logo-block" aria-label="Daily Spark Home">' +
          '<img src="logo.png" alt="Daily Spark Logo" class="ds-logo-img"/>' +
          '<div class="ds-logo-text">' +
            '<div class="ds-logo-name">Daily <span>Spark</span></div>' +
            '<div class="ds-logo-tag">Where Knowledge Sparks Success</div>' +
          '</div>' +
        '</a>' +

        /* Desktop nav */
        '<nav class="ds-nav" aria-label="Main navigation">' +
          navLink('index.html',   'Home',           'home') +
          navLink('parent.html',  'Parenting',      'parenting') +
          navLink('math.html',    'Math Playground','math') +
          navLink('gjobs.html',   'Govt. Jobs',     'gjobs') +
          navLink('weather.html', 'Weather',        'weather') +
          navLink('gold.html',    'Gold Rate',      'gold') +
          navLink('contact.html', 'Contact Us',     'contact') +
        '</nav>' +



        /* Hamburger */
        '<button class="ds-hamburger" id="ds-hamburger" aria-label="Toggle navigation" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +

      '</div>' +

      /* Mobile nav drawer (inside masthead so it's sticky) */
      '<nav class="ds-mobile-nav" id="ds-mobile-nav" aria-label="Mobile navigation">' +
        navLink('index.html',   '🏠 Home',            'home') +
        navLink('parent.html',  '👨‍👩‍👧 Parenting',     'parenting') +
        navLink('math.html',    '🧮 Math Playground',  'math') +
        navLink('gjobs.html',   '💼 Govt. Jobs',       'gjobs') +
        navLink('weather.html', '🌤️ Weather',          'weather') +
        navLink('gold.html',    '🪙 Gold Rate',        'gold') +
        navLink('contact.html', '📬 Contact Us',       'contact') +
      '</nav>' +

    '</header>';

  /* ── 7. Mount into DOM ───────────────────────────────────────────── */
  var root = document.getElementById('ds-header-root');
  if (root) {
    root.innerHTML = HTML;
  } else {
    /* Fallback: prepend to body if placeholder div is missing */
    var wrapper = document.createElement('div');
    wrapper.id = 'ds-header-root';
    wrapper.innerHTML = HTML;
    document.body.insertBefore(wrapper, document.body.firstChild);
  }

  /* ── 8. Live date in top bar ────────────────────────────────────── */
  (function () {
    var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
    var d  = new Date();
    var el = document.getElementById('ds-topbar-date');
    if (el) {
      el.textContent = days[d.getDay()] + ', ' +
                       months[d.getMonth()] + ' ' +
                       d.getDate() + ', ' + d.getFullYear();
    }
  })();

  /* ── 9. Close notification bar ──────────────────────────────────── */
  var closeBtn = document.getElementById('ds-notif-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var bar = document.getElementById('ds-notif-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  /* ── 10. Hamburger toggle ───────────────────────────────────────── */
  var ham     = document.getElementById('ds-hamburger');
  var mobileNav = document.getElementById('ds-mobile-nav');
  if (ham && mobileNav) {
    ham.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      ham.classList.toggle('open', isOpen);
      ham.setAttribute('aria-expanded', String(isOpen));
    });
    /* Close drawer when a link is tapped */
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      });
    });
  }



})();
