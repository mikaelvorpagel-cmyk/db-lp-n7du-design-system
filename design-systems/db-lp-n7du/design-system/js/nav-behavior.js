/**
 * nav-behavior.js — Navbar: hide/show on scroll + active link by section
 *
 * Source behavior (from HTML inline styles on <nav>):
 *   - Nav starts: transform translate(-50%, 0), opacity 1, pointer-events auto
 *   - Nav hides: transform translate(-50%, -120%) when scrolling DOWN past 100px
 *   - Nav shows: transform translate(-50%, 0) when scrolling UP
 *   - Transition: cubic-bezier(0.25, 1, 0.30, 1) 0.6s — matches CSS var(--transition-smooth)
 *   - Active link: background #9333ea (var --color-purple), color white
 *   - Inactive link: color #9e9e9e (var --color-text-muted)
 *
 * Usage:
 *   initNavBehavior()
 *   // or:
 *   initNavBehavior({ navSelector: '.nav', linkSelector: '.nav-link' })
 */
function initNavBehavior(options) {
  var config = Object.assign({
    navSelector: '.nav',
    linkSelector: '.nav-link',
    hideThreshold: 100,
    sectionThreshold: 0.5
  }, options || {});

  var nav = document.querySelector(config.navSelector);
  var links = Array.from(document.querySelectorAll(config.linkSelector));

  if (!nav) {
    console.warn('[nav-behavior] Nav element not found:', config.navSelector);
    return;
  }

  // ── Hide / show on scroll direction ───────────────────────────────────────
  var lastScrollY = window.scrollY;
  var isHidden = false;

  function handleScroll() {
    var currentScrollY = window.scrollY;
    var isScrollingDown = currentScrollY > lastScrollY;
    var isPastThreshold = currentScrollY > config.hideThreshold;

    if (isScrollingDown && isPastThreshold && !isHidden) {
      nav.style.transform = 'translate(-50%, -120%)';
      nav.style.opacity = '0';
      nav.style.pointerEvents = 'none';
      isHidden = true;
    } else if (!isScrollingDown && isHidden) {
      nav.style.transform = 'translate(-50%, 0)';
      nav.style.opacity = '1';
      nav.style.pointerEvents = 'auto';
      isHidden = false;
    }

    lastScrollY = currentScrollY;
  }

  // Use Lenis scroll event if available for smoother integration
  if (window.__lenis) {
    window.__lenis.on('scroll', function(e) {
      var currentScrollY = e.scroll;
      var isScrollingDown = e.velocity > 0;
      var isPastThreshold = currentScrollY > config.hideThreshold;

      if (isScrollingDown && isPastThreshold && !isHidden) {
        nav.style.transform = 'translate(-50%, -120%)';
        nav.style.opacity = '0';
        nav.style.pointerEvents = 'none';
        isHidden = true;
      } else if (!isScrollingDown && isHidden) {
        nav.style.transform = 'translate(-50%, 0)';
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
        isHidden = false;
      }

      lastScrollY = currentScrollY;
    });
  } else {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ── Active link tracking by section ───────────────────────────────────────
  function setActiveLink(id) {
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      var isActive = href === '#' + id;
      link.classList.toggle('active', isActive);
    });
  }

  var sectionIds = [];
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var id = href.slice(1);
      if (id && !sectionIds.includes(id)) sectionIds.push(id);
    }
  });

  if (sectionIds.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, {
      threshold: config.sectionThreshold
    });

    sectionIds.forEach(function(id) {
      var section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  // ── Smooth scroll on link click ────────────────────────────────────────────
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      var target = document.querySelector(href);
      if (!target) return;

      // Use Lenis scroll if available
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Set first link as active initially
  if (sectionIds.length) {
    setActiveLink(sectionIds[0]);
  }
}
