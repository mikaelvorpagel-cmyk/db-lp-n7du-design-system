/**
 * smooth-scroll.js — Lenis smooth scroll initialization
 *
 * Dependency: Lenis CDN (load BEFORE this file)
 *   <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js"></script>
 *
 * Source behavior: The original app uses Lenis (class "lenis lenis-smooth" is
 *   applied to html/body in the CSS). CSS has .lenis.lenis-smooth { height: auto }
 *   and .lenis.lenis-stopped { overflow: hidden }.
 *
 * Usage:
 *   const lenis = initSmoothScroll();
 *   // optionally: lenis.stop() / lenis.start()
 */
function initSmoothScroll(options) {
  if (typeof Lenis === 'undefined') {
    console.warn('[smooth-scroll] Lenis not found. Load the CDN script first.');
    return null;
  }

  var config = Object.assign({
    duration: 1.2,
    easing: function(t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2
  }, options || {});

  var lenis = new Lenis(config);

  // RAF loop — drives Lenis on every frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Expose on window for external access (e.g. parallax.js integration)
  window.__lenis = lenis;

  return lenis;
}
