/**
 * parallax.js — Two-speed column parallax for image grids
 *
 * Source behavior: Hero section has two sets of image columns.
 *   .col-fast elements scroll at 0.6× speed (move more = feel closer).
 *   .col-slow elements scroll at 0.3× speed (move less = feel farther away).
 *   Result: depth illusion as user scrolls down the hero.
 *
 * The original app applies this via React + requestAnimationFrame.
 * This vanilla implementation replicates the same visual effect.
 *
 * Compatible with Lenis: if window.__lenis exists, hooks into its scroll event.
 * Falls back to native scroll listener if Lenis is not present.
 *
 * Usage:
 *   initParallax()
 *   // or with custom options:
 *   initParallax({ fastSelector: '.col-fast', fastSpeed: 0.6,
 *                  slowSelector: '.col-slow', slowSpeed: 0.3 })
 *
 * HTML pattern:
 *   <div class="col-fast"> ... image cards ... </div>
 *   <div class="col-slow"> ... image cards ... </div>
 */
function initParallax(options) {
  var config = Object.assign({
    fastSelector: '.col-fast',
    fastSpeed: 0.6,
    slowSelector: '.col-slow',
    slowSpeed: 0.3,
    enabled: true
  }, options || {});

  if (!config.enabled) return;

  var fastEls = Array.from(document.querySelectorAll(config.fastSelector));
  var slowEls = Array.from(document.querySelectorAll(config.slowSelector));

  if (!fastEls.length && !slowEls.length) {
    console.warn('[parallax] No elements found for selectors:', config.fastSelector, config.slowSelector);
    return;
  }

  var ticking = false;
  var currentScrollY = 0;

  function applyParallax() {
    var scrollY = currentScrollY;
    fastEls.forEach(function(el) {
      el.style.transform = 'translateY(' + (scrollY * config.fastSpeed * -1) + 'px)';
    });
    slowEls.forEach(function(el) {
      el.style.transform = 'translateY(' + (scrollY * config.slowSpeed * -1) + 'px)';
    });
    ticking = false;
  }

  function onScroll(scrollY) {
    currentScrollY = scrollY;
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }

  // Prefer Lenis scroll event for smooth-scroll integration
  if (window.__lenis) {
    window.__lenis.on('scroll', function(e) {
      onScroll(e.scroll);
    });
  } else {
    window.addEventListener('scroll', function() {
      onScroll(window.scrollY);
    }, { passive: true });
  }

  // Disable parallax on mobile to preserve performance
  var mediaQuery = window.matchMedia('(max-width: 767px)');
  function handleMedia(mq) {
    if (mq.matches) {
      fastEls.forEach(function(el) { el.style.transform = ''; });
      slowEls.forEach(function(el) { el.style.transform = ''; });
    }
  }
  mediaQuery.addEventListener('change', handleMedia);
  handleMedia(mediaQuery);
}
